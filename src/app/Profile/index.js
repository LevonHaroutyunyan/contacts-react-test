import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "shared/layout/container";
import { Typography, Spin } from "antd";
import withMeta from "shared/hoc/withMeta";
import withPage from "shared/hoc/withPage";

// redux
import actions from "store/actions";
import selectors from "store/selectors";

const { Title, Paragraph } = Typography;

const Profile = () => {
  // actions
  const dispatch = useDispatch();
  const findProfile = () => dispatch(actions.profile.find());

  const { data, loaded } = useSelector(selectors.profile);

  useEffect(() => {
    findProfile();
  }, []);

  return (
    <div className="profile">
      <Container>
        <Title level={1} className='profile__header'>Profile</Title>
        {!loaded && (
          <div className="perfectCenter">
            <Spin />
          </div>
        )}
        {loaded && data && data.rows && (
          <div className="profile__container profile__center">
            <img src={data.rows[0].picture.large} alt="user" />
            <div>
              <Typography
                copyable={{
                  text: `${data.rows[0].name.title} ${data.rows[0].name.first} ${data.rows[0].name.last}`,
                }}
              >
                {`${data.rows[0].name.title} ${data.rows[0].name.first} ${data.rows[0].name.last}`}
              </Typography>
              <Paragraph copyable={{ text: data.rows[0].email }}>
                {data.rows[0].email}
              </Paragraph>
              <Typography copyable={{ text: data.rows[0].phone }}>
                {data.rows[0].phone}
              </Typography>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

const WrapperProfile = withMeta(Profile);

export default withPage({ Component: WrapperProfile });
