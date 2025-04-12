import { Avatar, Col, Dropdown, Image, Input, Layout, Row, Space } from 'antd';
import React from 'react';
import logo from './../../assets/logo.png';
import type { MenuProps } from 'antd';
import {
    BellOutlined,
    HomeOutlined,
    MailOutlined,
    MenuOutlined,
    SearchOutlined,
    UsergroupDeleteOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../stores/reducers/sider.slice';
const { Header } = Layout;
const items: MenuProps['items'] = [
    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                2nd menu item
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];
const HeaderPage: React.FC = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: any) => state.sider.open);
    const onClick = () => {
        dispatch(setOpen(open));
    };
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    height: '80px',
                    width: '100%',
                    backgroundColor: 'white',
                }}
            >
                <Row
                    align={'middle'}
                    style={{
                        height: '100%',
                    }}
                >
                    <Col span={3}>
                        <Row
                            justify={'space-between'}
                            align={'middle'}
                            className="ms-4"
                            style={{
                                height: '100%',
                            }}
                        >
                            <Image src={logo} width={'50px'} height={'50px'} preview={false} className="mb-4" />
                            <span className="fs-2 fw-semibold lh-sm">SocialV</span>
                            <MenuOutlined
                                onClick={onClick}
                                style={{
                                    cursor: 'pointer',
                                }}
                            />
                        </Row>
                    </Col>
                    <Col span={17}>
                        <Row align={'middle'}>
                            <Col span={8}></Col>
                            <Col span={8}>
                                <Input
                                    size="large"
                                    placeholder="Search here..."
                                    suffix={<SearchOutlined style={{color:'#61BCFF'}}/>}
                                    className="ms-2"
                                    style={{
                                        backgroundColor:'#DCF0FF',
                                        maxWidth: 500,
                                        border: 'none',
                                        boxShadow: 'none',
                                        outline: 'none',
                                        resize: 'none',
                                    }}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <Row justify={'space-between'} align={'middle'} style={{ height: '100%', maxHeight: '100%' }}>
                            <Col span={18} style={{ height: '100%', maxHeight: '100%' }}>
                                <Row
                                    justify={'space-evenly'}
                                    align={'middle'}
                                    style={{ height: '100%', maxHeight: '100%' }}
                                >
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <HomeOutlined style={{ fontSize: '20px',color:'#61BCFF' }} twoToneColor={'#57B8FF'} />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <UsergroupDeleteOutlined
                                                    style={{ fontSize: '20px',color:'#61BCFF' }}
                                                />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <BellOutlined style={{ fontSize: '20px',color:'#61BCFF' }}/>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <MailOutlined style={{ fontSize: '20px',color:'#61BCFF' }} />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </Row>
                            </Col>
                            <Col span={6}>
                                <Row justify={'end'} align={'middle'} style={{ height: '100%', maxHeight: '100%' }}>
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>                                                
                                                <Avatar size="large" icon={<UserOutlined />} className="me-4" src='https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/464406393_1225444018740551_556811453310840895_n_kwgfdn.jpg'/>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </>
    );
};
export default HeaderPage;
