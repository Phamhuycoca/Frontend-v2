import { Avatar, Col, Dropdown, Image, Input, Layout, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import logo from './../../assets/logo.png';
import type { MenuProps } from 'antd';
import {
    BellOutlined,
    HomeOutlined,
    MailOutlined,
    MenuOutlined,
    SearchOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../stores/reducers/sider.slice';
import { Link } from 'react-router-dom';
import UserHeader from './User/UserHeader';
import { RootState } from '../../stores/store';
import SearchHistory from './History/SearchHistory';
import { addHistorySearch, removeHistorySearch } from '../../stores/reducers/historysearch.slice';
import { AnimatePresence,motion } from 'framer-motion';
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
    const list = useSelector((state: RootState) => state.historySearch);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [showhistory, setShowHistory] = useState(false);
    const open = useSelector((state: any) => state.sider.open);
    const onClick = () => {
        dispatch(setOpen(open));
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const date = new Date();
        
        dispatch(
            addHistorySearch({

                title: e.currentTarget.value,
                time: date.toDateString(),
            }),
        );
        setInputValue('');
    };
    const handleFocus = () => {
        setShowHistory(true);
    };
    const handleBlur = () => {
        setTimeout(() => setShowHistory(false), 150);
    };
    const handleRemoveHistory = (id: number | undefined) => {
        if (id !== undefined) {
            dispatch(removeHistorySearch(id));
        }
    };
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    position: 'fixed',
                    top: 0,
                    zIndex: 100,
                    height: '80px',
                    width: '100%',
                    backgroundColor: 'white',
                    boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
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
                                    suffix={<SearchOutlined style={{ color: '#61BCFF' }} />}
                                    className="ms-2"
                                    style={{
                                        backgroundColor: '#DCF0FF',
                                        maxWidth: 500,
                                        border: 'none',
                                        boxShadow: 'none',
                                        outline: 'none',
                                        resize: 'none',
                                    }}
                                    onChange={(e) => setInputValue(e.target.value)}
                                   value={inputValue}
                                    onFocus={handleFocus}
                                    onPressEnter={handleKeyPress}
                                    onBlur={handleBlur}
                                />
                                {list.length > 0 && showhistory && (
                                    // <div
                                    //     style={{
                                    //         zIndex: 150,
                                    //         position: 'fixed',
                                    //         width: '24.5%',
                                    //         backgroundColor: 'white',
                                    //         padding: 10,
                                    //         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                    //         borderRadius: 5,
                                    //     }}
                                    // >
                                    //     <SearchHistory />
                                    // </div>
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                zIndex: 150,
                                                position: 'fixed',
                                                width: '24.3%',
                                                backgroundColor: 'white',
                                                padding: 10,
                                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                                borderRadius: 5,
                                            }}
                                        >
                                            <SearchHistory historyList={list} deleteHistory={
                                                handleRemoveHistory
                                            }/>
                                        </motion.div>
                                    </AnimatePresence>
                                )}
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
                                    <Link to="/">
                                        <Space>
                                            <HomeOutlined
                                                style={{ fontSize: '20px', color: '#61BCFF' }}
                                                twoToneColor={'#57B8FF'}
                                            />
                                        </Space>
                                    </Link>
                                    {/* <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <UsergroupDeleteOutlined
                                                    style={{ fontSize: '20px', color: '#61BCFF' }}
                                                />
                                            </Space>
                                        </a>
                                    </Dropdown> */}
                                    <UserHeader />
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <BellOutlined style={{ fontSize: '20px', color: '#61BCFF' }} />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <MailOutlined style={{ fontSize: '20px', color: '#61BCFF' }} />
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
                                                <Avatar
                                                    size="large"
                                                    icon={<UserOutlined />}
                                                    className="me-4"
                                                    src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/464406393_1225444018740551_556811453310840895_n_kwgfdn.jpg"
                                                />
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
