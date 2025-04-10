import React from 'react';
import HeaderPage from './Header';
import { Col, Layout, Row } from 'antd';
import Rootpage from './../../pages/pageRoot';
import FooterPage from './FooterPage';
import SiderPage from './SiderPage';
const { Content } = Layout;

const homePage: React.FC = () => {
    return (
        <>
            <Layout>
                <HeaderPage />
                <Layout>
                    <SiderPage />
                    <Content style={{ maxHeight: '100vh', height: '100vh' }}>
                        <Row>
                            <Col span={4}></Col>
                            <Col span={16}>
                                <Rootpage />
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                    </Content>
                </Layout>
                <FooterPage />
            </Layout>
        </>
    );
};
export default homePage;
