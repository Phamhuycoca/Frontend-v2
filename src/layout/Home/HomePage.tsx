import React, { useEffect, useState } from 'react';
import HeaderPage from './Header';
import { Col, Layout, Row } from 'antd';
import Rootpage from './../../pages/pageRoot';
import FooterPage from './FooterPage';
import SiderPage from './SiderPage';
const { Content, Sider } = Layout;
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';

interface UserItem {
    email: string;
    gender: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const siderStyle: React.CSSProperties = {
    position: 'fixed',
    top: '80px',
    bottom: 0,
    right: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    height: '100vh',
    maxHeight: '100vh',
};
const homePage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        setCollapsed(true);
    }, []);
    const [data, setData] = useState<UserItem[]>([]);

    const appendData = (showMessage = true) => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
                showMessage && message.success(`${body.results.length} more items loaded!`);
            });
    };

    useEffect(() => {
        appendData(false);
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
        if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
            appendData();
        }
    };

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
                            <Col span={4}>
                                <Row justify={'end'} className="mt-2">
                                    <Sider
                                        reverseArrow={false}
                                        width={260}
                                        collapsedWidth={0}
                                        style={siderStyle}
                                        theme="light"
                                        trigger={null}
                                        collapsible
                                        collapsed={!collapsed}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: -20,
                                                zIndex: 999,
                                            }}
                                        >
                                            <button
                                                onClick={() => setCollapsed(!collapsed)}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    position: 'absolute',
                                                    top: 10,
                                                    left: -20, // trồi ra ngoài
                                                    backgroundColor: '#4FC3F7',
                                                    border: 'none',
                                                    borderTopLeftRadius: 40,
                                                    borderBottomLeftRadius: 40,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: 0,
                                                    zIndex: 1000,
                                                }}
                                            >
                                                <span style={{ color: 'white', fontSize: 16 }}>←</span>
                                            </button>
                                        </div>

                                        <List>
                                            <VirtualList
                                                data={data}
                                                height={ContainerHeight}
                                                itemHeight={47}
                                                itemKey="email"
                                                onScroll={onScroll}
                                            >
                                                {(item: UserItem) => (
                                                    <List.Item key={item.email}>
                                                        <List.Item.Meta
                                                            avatar={<Avatar src={item.picture.large} />}
                                                            title={<a href="https://ant.design">{item.name.last}</a>}
                                                        />
                                                    </List.Item>
                                                )}
                                            </VirtualList>
                                        </List>
                                    </Sider>
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <FooterPage />
            </Layout>
        </>
    );
};
export default homePage;
