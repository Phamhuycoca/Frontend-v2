import React from 'react';
import { Avatar, Button, Card, Typography, Space, Tabs, Row, Col } from 'antd';
import {
    FacebookFilled,
    TwitterOutlined,
    InstagramOutlined,
    GooglePlusOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    EditOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { createStyles } from 'antd-style';
import TimelinePage from './Timeline/TimelinePage';
const { Title, Text } = Typography;
const useStyles = createStyles(({ css }) => ({
    tabswrap: css`
        .ant-tabs-nav {
            margin: 0 !important;
            border-radius: 10px;
            padding: 1px;
            display: flex;
            justify-content: center;
        }

        .ant-tabs-nav-list {
            width: 100%;
            display: flex;
            justify-content: space-around;
            background-color: none !important;
        }

        .ant-tabs-tab {
            background-color: white !important;
            border-radius: 8px !important;
            padding: 12px 24px;
            color: #777;
            transition: all 0.3s ease;
            font-weight: 500;
            height: 60px;
            width: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab {
            border-radius: 8px;
        }
        .ant-tabs-tab-active {
            background-color: #50b5ff !important;
            color: #ffffff !important;
            border-radius: 8px !important;
        }

        div.ant-tabs.ant-tabs-top > div.ant-tabs-nav::before {
            display: none !important;
            background: transparent !important;
        }

        .ant-tabs-tab-active .ant-tabs-tab-btn {
            color: #ffffff !important;
            border-radius: 8px;
        }

        .ant-tabs-tab:hover {
            color: #40a9ff;
        }

        .ant-tabs-ink-bar {
            display: none !important;
        }

        .ant-tabs-content-holder {
            margin-top: 10px;
            background-color: transparent !important;
            border-radius: 8px;
        }
    `,
}));

const ProfilePage: React.FC = () => {
    const { styles, cx } = useStyles();

    return (
        <>
            <Card
                style={{
                    padding: 0,
                    overflow: 'hidden',
                    borderRadius: '10px',
                }}
                styles={{
                    body: {
                        padding: 0,
                    },
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463024/Snapins.ai_489578285_17944006325971869_9001034676423594288_n_1024_dgcx2d.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: 200,
                        position: 'relative',
                    }}
                >
                    <Avatar
                        size={100}
                        src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/490011465_17899777956172253_3024570406282557719_n_nxqjl4.jpg"
                        style={{
                            position: 'absolute',
                            bottom: -50,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: '4px solid white',
                        }}
                    />
                </div>
                <div style={{ paddingTop: 60, textAlign: 'center', paddingBottom: 20 }}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={8}>
                            <Space size="middle">
                                <FacebookFilled style={{ fontSize: 24, color: '#3b5998' }} />
                                <TwitterOutlined style={{ fontSize: 24, color: '#1DA1F2' }} />
                                <InstagramOutlined style={{ fontSize: 24, color: '#C13584' }} />
                                <GooglePlusOutlined style={{ fontSize: 24, color: '#db4437' }} />
                                <YoutubeOutlined style={{ fontSize: 24, color: '#FF0000' }} />
                                <LinkedinOutlined style={{ fontSize: 24, color: '#0077b5' }} />
                            </Space>
                        </Col>
                        <Col span={8}>
                            <Title level={4}>Bni Cyst</Title>
                        </Col>
                        <Col span={8}>
                            <Space size="large">
                                <div>
                                    <Text strong>Posts</Text>
                                    <div>690</div>
                                </div>
                                <div>
                                    <Text strong>Followers</Text>
                                    <div>206</div>
                                </div>
                                <div>
                                    <Text strong>Following</Text>
                                    <div>100</div>
                                </div>
                            </Space>
                        </Col>
                    </Row>
                    <div style={{ position: 'absolute', top: 160, right: 30 }}>
                        <Space>
                            <Button shape="circle" icon={<EditOutlined />} />
                            <Button shape="circle" icon={<SettingOutlined />} />
                        </Space>
                    </div>
                </div>
            </Card>
            <div style={{ width: '100%' }} className="mt-4">
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    className={cx(styles.tabswrap)}
                    items={[
                        {
                            key: '1',
                            label: 'Timeline',
                            children: <TimelinePage/>
                        },
                        {
                            key: '2',
                            label: 'About',
                            children: 'Nội dung About',
                        },
                        {
                            key: '3',
                            label: 'Friends',
                            children: 'Danh sách bạn bè',
                        },
                        {
                            key: '4',
                            label: 'Photos',
                            children: 'Album ảnh',
                        },
                    ]}
                />
            </div>
        </>
    );
};

export default ProfilePage;
