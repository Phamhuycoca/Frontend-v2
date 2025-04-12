// CardPost.tsx
import React from 'react';
import {
    BellOutlined,
    CloseCircleOutlined,
    EllipsisOutlined,
    LikeOutlined,
    MessageOutlined,
    SaveOutlined,
    ShareAltOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Dropdown, List, Row, Space } from 'antd';
import { createStyles } from 'antd-style';
import ImageGrid from '../ImageGrid/ImageGrid';

type PostType = {
    id: string;
    user: {
        name: string;
        avatar: string;
    };
    content: string;
    images: string[];
    createdAt: string;
};

type ListMemu = {
    key?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
};

const ListMenus: ListMemu[] = [
    { key: '1', icon: <SaveOutlined />, title: 'Save Post', description: 'Add this to your saved items' },
    { key: '2', icon: <CloseCircleOutlined />, title: 'Hide Post', description: 'See fewer posts like this' },
    {
        key: '3',
        icon: <UserDeleteOutlined />,
        title: 'Unfollow User',
        description: 'Stop seeing posts but stay friends',
    },
    { key: '4', icon: <BellOutlined />, title: 'Notifications', description: 'Turn on notifications for this post' },
];

const useStyles = createStyles(({ css }) => ({
    list: css`
        transition: all 0.3s ease;
        &:hover {
            background-color: #f0f2f5;
            .ant-list-item-meta-description > span {
                color: #48a3e6;
            }
        }
    `,
}));

const { Meta } = Card;

const CardPost: React.FC<{ post: PostType }> = ({ post }) => {
    const { styles, cx } = useStyles();

    return (
        <Card
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            style={{ width: '100%', marginBottom: 18 }}
            actions={[
                <span>
                    <LikeOutlined /> 140 Likes
                </span>,
                <span>
                    <MessageOutlined /> 20 Comment
                </span>,
                <span>
                    <ShareAltOutlined /> 99 Share
                </span>,
            ]}
        >
            <Meta
                avatar={<Avatar src={post.user.avatar} />}
                title={
                    <Row>
                        <Col span={12}>
                            <span style={{ fontWeight: 600 }}>{post.user.name}</span>{' '}
                            <span style={{ color: '#888' }}>Add New Post</span>
                        </Col>
                        <Col span={12}>
                            <Row justify={'end'}>
                                <Dropdown
                                    placement="bottom"
                                    arrow
                                    trigger={['click']}
                                    overlayStyle={{ width: 280 }}
                                    dropdownRender={() => (
                                        <div style={{ backgroundColor: '#fff', borderRadius: '5px' }}>
                                            <List
                                                style={{ cursor: 'pointer' }}
                                                itemLayout="horizontal"
                                                dataSource={ListMenus}
                                                renderItem={(item, index) => (
                                                    <List.Item className={cx(styles.list)}>
                                                        <List.Item.Meta
                                                            key={index}
                                                            avatar={
                                                                <div style={{ fontSize: 18 }} className="ms-2">
                                                                    {item.icon}
                                                                </div>
                                                            }
                                                            title={<span>{item.title}</span>}
                                                            description={
                                                                <span style={{ fontSize: 14 }}>{item.description}</span>
                                                            }
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </div>
                                    )}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <EllipsisOutlined style={{ fontSize: 18 }} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Row>
                        </Col>
                    </Row>
                }
                description={<span style={{ color: '#1890ff' }}>{post.createdAt}</span>}
            />

            <div style={{ marginTop: 12 }}>{post.content}</div>
            <ImageGrid images={post.images} />
        </Card>
    );
};

export default CardPost;
