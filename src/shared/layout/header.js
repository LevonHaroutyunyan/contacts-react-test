import React, { useState } from "react";
import {
  Layout,
  Button,
  Modal,
  Form,
  Input,
  Menu,
  Dropdown,
  Avatar,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { authChecker, doLogout } from "utils/authChecker";
import { useHistory, Link, Redirect } from "react-router-dom";

const { Header } = Layout;

export default () => {
  const isAuthentificated = authChecker();
  const [popup, setPopUp] = useState(false);
  const [current, setCurrent] = useState("home");
  const [form] = Form.useForm();
  const history = useHistory();

  const logout = () => {
    history.push("/");
    doLogout();
  };

  const handleAuth = () => {
    !isAuthentificated ? setPopUp(true) : logout();
  };

  const onCreate = () => {
    localStorage.setItem("authToken", true);
    // history.push('/profile');
    setPopUp(false);
    return <Redirect to="/profile" />;
  };

  const handleMenuSelect = (e) => {
    setCurrent(e.key);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => history.push("/profile")}>Profile</Menu.Item>
      <Menu.Item onClick={handleAuth}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Header>
        <Menu
          mode="horizontal"
          onClick={handleMenuSelect}
          selectedKeys={[current]}
          style={{ background: "transparent", color: "white" }}
        >
          <Menu.Item key="home">
            <Link to="/">HOME</Link>
          </Menu.Item>
          {isAuthentificated && (
            <Menu.Item
              key="contacts"
              onClick={() => history.push("/profile/contacts")}
            >
              CONTACTS
            </Menu.Item>
          )}
          {isAuthentificated && (
            <Menu.Item key="user">
              {/* check for user and set data  verev@ dir payman@ */}
              <Dropdown overlay={menu}>
                <span onClick={() => history.push("/profile")}>
                  user name <DownOutlined />
                </span>
              </Dropdown>
            </Menu.Item>
          )}
          {isAuthentificated && (
            <>
              <Avatar size="large" icon={<UserOutlined />} />
            </>
          )}
          {!isAuthentificated ? (
            <Menu.Item>
              <Button type="primary" onClick={handleAuth}>
                Sign In
              </Button>
            </Menu.Item>
          ) : null}
        </Menu>

        <Modal
          visible={popup}
          okText="Sign In"
          title="Sign In"
          cancelText="Cancel"
          onCancel={() => setPopUp(false)}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        >
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              modifier: "public",
            }}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
                {
                  type: "email",
                  message: "Please enter valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
                {
                  min: 8,
                  message: "Your password is too short",
                },
              ]}
            >
              <Input.Password
                type="textarea"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Form>
        </Modal>
      </Header>
    </div>
  );
};
