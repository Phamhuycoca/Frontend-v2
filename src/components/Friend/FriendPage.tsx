import { Avatar, Badge, Divider, Layout, List, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Sider } = Layout;

interface DataType {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

const siderStyle: React.CSSProperties = {
    position: 'fixed',
    top: '80px',
    bottom: 0,
    right: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    height: '100%',
    maxHeight:'100vh',
    boxShadow: '-4px 0 6px rgba(134, 134, 134, 0.1)',
};
const FriendPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        setCollapsed(false);
    }, []);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    return (
        <>
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

                    <div
                        id="scrollableDiv"
                        style={{
                            height: '86vh',
                            overflow: 'auto',
                            padding: '0 16px',
                            // border: '1px solid rgba(140, 140, 140, 0.35)',
                        }}
                    >
                        <InfiniteScroll
                            dataLength={data.length}
                            next={loadMoreData}
                            hasMore={data.length < 50}
                            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                            scrollableTarget="scrollableDiv"
                        >
                            <List
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item key={item.email}>
                                        <List.Item.Meta
                                            avatar={
                                                <Badge dot color="green">
                                                    <Avatar src={item.picture.large} />
                                                </Badge>
                                            }
                                            title={item.name.last}
                                        />
                                    </List.Item>
                                )}
                            />
                        </InfiniteScroll>
                    </div>
                </Sider>
            </Row>
        </>
    );
};
export default FriendPage;