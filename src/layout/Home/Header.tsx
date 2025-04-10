    import { Col, Image, Input, Layout, Row } from 'antd';
    import React from 'react';
    import logo from './../../assets/logo.png';
    import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
    import { useDispatch, useSelector } from 'react-redux';
    import { setOpen } from '../../stores/reducers/sider.slice';
    const { Header } = Layout;
    const HeaderPage: React.FC = () => {
        const dispatch = useDispatch();
        const open = useSelector((state: any) => state.sider.open);
        const onClick = () => 
            {
                dispatch(setOpen(open));
            }
        return (
            <>
                <Header
                    style={{
                        padding: 0,
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
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
                                    <Input size='large'
                                    placeholder='Search here...'
                                    suffix={
                                        <SearchOutlined />
                                    }
                                    className='ms-2'
                                        style={{
                                            maxWidth: 500,
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <div style={{ backgroundColor: 'red', width: '100%' }}>a</div>
                        </Col>
                    </Row>
                </Header>
            </>
        );
    };
    export default HeaderPage;
