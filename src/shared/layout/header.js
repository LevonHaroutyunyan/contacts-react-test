import React, { useState } from 'react';
import { Layout, Button, Modal, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { authChecker, doLogout } from 'utils/authChecker';
import { useHistory } from 'react-router-dom';


const { Header } = Layout;

export default () => {
    const isAuthentificated = authChecker();
    const [popup, setPopUp] = useState(false);
    const [form] = Form.useForm();
    const history = useHistory();

    const handleAuth = () => {
        !isAuthentificated ? setPopUp(true) : doLogout()
    }

    const onCreate = () => {
        history.push('/profile');
        localStorage.setItem('authToken', true);
        setPopUp(false);
    }

    return (
        <div>
            <Header>
                <Button type='primary' onClick={handleAuth}>
                    {!isAuthentificated ? "Sign In" : "Sign Out"}
                </Button>
                <Modal
                    visible={popup}
                    okText="Sign In"
                    title="Sign In"
                    cancelText="Cancel"
                    onCancel={() => setPopUp(false)}
                    onOk={() => {
                        form
                            .validateFields()
                            .then(values => {
                                form.resetFields();
                                onCreate(values);
                            })
                            .catch(info => {
                                console.log('Validate Failed:', info);
                            });
                    }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please enter valid email!',
                                }
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
                                    message: 'Please enter your password!',
                                },
                                {
                                    min: 8,
                                    message: 'Your password is too short'
                                }
                            ]}
                        >
                            <Input.Password type="textarea"  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </Header>
        </div>
    )
}