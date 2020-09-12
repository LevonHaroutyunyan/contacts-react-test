import React from 'react';
import Container from 'shared/layout/container';
import withMeta from 'shared/hoc/withMeta';
import withPage from 'shared/hoc/withPage';
// import Heading from 'shared/heading';

const Contact = (props) => {
    return (
        <div className='contact'>
            <Container>
Contact
            </Container>
        </div>
    )
}

const WrapperContact = withMeta(Contact);

export default withPage({
    Component: WrapperContact
});