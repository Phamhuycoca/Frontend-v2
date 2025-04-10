import React from 'react';
import HeaderPage from './Header';
import { Layout } from 'antd';
import Rootpage from './../../pages/pageRoot';
import { SiderPage } from '../Sider';
const { Content, Footer } = Layout;
const homePage: React.FC = () => {
    return (
        <>
            <Layout>
                <HeaderPage />
                <Layout>
                <SiderPage/>
                <Content style={{ maxHeight: '100vh', height: '100vh' }}>
                    <Rootpage />
                </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </>
    );
};
export default homePage;
