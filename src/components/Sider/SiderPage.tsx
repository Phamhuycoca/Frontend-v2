import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
    position: 'fixed',
    top: '80px',
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    height: '100%',
    maxHeight:'100vh',
    zIndex:10,
    boxShadow: '4px 0 6px rgba(134, 134, 134, 0.1)', // Bóng đổ bên phải

};
const SiderPage: React.FC = () => {
    const open = useSelector((state: any) => state.sider.open);
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        setCollapsed(open);
    }, [open]);
    return (
        <>
            <Sider width={'260'} style={siderStyle} theme="light" trigger={null} collapsible collapsed={!collapsed}>
                <Menu
                    style={{ flex: 1, minWidth: 0}}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
        </>
    );
};
export default SiderPage;
