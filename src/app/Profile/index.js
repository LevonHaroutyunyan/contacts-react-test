import React from 'react';
import Container from 'shared/layout/container';
import { Typography } from 'antd';
import withMeta from 'shared/hoc/withMeta';
import withPage from 'shared/hoc/withPage';
// import Heading from 'shared/heading';

const { Title } = Typography;

const Profile = (props) => {
    return (
        <div className='profile'>
            <Container>
               <Title level={1}>Profile</Title>
               {/* image*/}

            </Container>
        </div>
    )
}

const WrapperProfile = withMeta(Profile);

export default withPage({Component: WrapperProfile});