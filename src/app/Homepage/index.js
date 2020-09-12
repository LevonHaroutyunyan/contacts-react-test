import React from 'react';
import Container from 'shared/layout/container';
import withPage from 'shared/hoc/withPage';
// import Heading from 'shared/heading';

const Homepage = (props) => {
    return (
        <div className='homepage'>
            <Container>

            </Container>
        </div>
    )
}

// const WrapperHomepage = Homepage;

export default withPage({Component: Homepage});