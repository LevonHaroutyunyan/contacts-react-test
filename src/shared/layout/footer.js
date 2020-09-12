import React from 'react';
import { Layout, Row, Col} from 'antd';

const { Footer } = Layout;

export default () => {
    return  (
        <Footer className="footer">
            <Row className='footer__copyright'>
                <Col span={24}>
                    <p className='footer__copyright__text'>&copy;2020 Wezom</p>
                </Col>
            </Row>
        </Footer>
    )
}