import React from 'react';
import HeaderPage from '../Header/Header';
import { Col, Layout, Row } from 'antd';
import Rootpage from './../../pages/pageRoot';
// import FooterPage from './FooterPage';
import { FriendPage, ScrollToTopButton, SiderPage } from '../../components';
const { Content } = Layout;

const homePage: React.FC = () => {
    return (
        <>
            <Layout style={{ minHeight: '100vh', height: '100%' }}>
                <HeaderPage />
                <Layout style={{minHeight: '100vh', height: '100%'
                 }} hasSider>
                    <SiderPage />
                    <Content style={{ padding: '0 24px',minHeight: '100vh', height: '100%' }}>
                        <Row style={{ minHeight: '100vh', height: '100%' }}>
                            <Col span={4}></Col>
                            <Col span={16}>
                                <Rootpage />
                            </Col>
                            <Col span={4}>
                                <FriendPage />
                            </Col>
                        </Row>
                        <ScrollToTopButton />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
export default homePage;
