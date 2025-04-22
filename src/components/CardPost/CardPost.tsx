// CardPost.tsx
import React, { useState } from 'react';
import {
    BellOutlined,
    CloseCircleOutlined,
    EllipsisOutlined,
    // LikeOutlined,
    MessageOutlined,
    SaveOutlined,
    SendOutlined,
    ShareAltOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Card, Col, Divider, Dropdown, List, Row, Space } from 'antd';
import { createStyles } from 'antd-style';
import ImageGrid from '../ImageGrid/ImageGrid';
import UploadTextArea from './UploadTextArea';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import LikeButton from '../Button/LikeButton';
type PostType = {
    id: string;
    user: {
        name: string;
        avatar?: string;
    };
    content: string;
    images?: string[];
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
    actions: css`
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            color: #1890ff;
        }
    `,
    divider: css`
        margin: 8px 0px;
    `,
}));

const { Meta } = Card;
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const CardPost: React.FC<{ post: PostType }> = ({ post }) => {
    const { styles, cx } = useStyles();
    const [showComment, setShowComment] = useState(false);
    const handlerComment = () => {
        setShowComment(!showComment);
    };
    return (
        <>
            <Card
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                style={{ 
                    width: '100%', 
                    marginBottom: 18 ,
                   boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)'
                }}
                // actions={[
                //         <span>
                //             <LikeOutlined /> 140 Likes
                //         </span>
                //         ,
                //         <span>
                //             <MessageOutlined onClick={handlerComment}/> 20 Comment
                //         </span>
                //         ,
                //         <span>
                //             <ShareAltOutlined /> 99 Share
                //         </span>
                // ]}
            >
                <Meta
                    avatar={<Avatar src={post.user.avatar} />}
                    title={
                        <Row>
                            <Col span={12}>
                                <Link to={`/profile/${post.id}`} style={{ fontWeight: 600,textDecoration:'none' }} className='me-2'>{post.user.name}</Link>
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
                                                                    <span style={{ fontSize: 14 }}>
                                                                        {item.description}
                                                                    </span>
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
                <Row justify="space-around" className={cx('mt-4')}>
                    <span className={cx(styles.actions)}>
                        <LikeButton />
                    </span>
                    <span onClick={handlerComment} className={cx(styles.actions)}>
                        <MessageOutlined /> 20 Comment
                    </span>
                    <span className={cx(styles.actions)}>
                        <ShareAltOutlined /> 99 Share
                    </span>
                </Row>
                {/* {showComment && (
                    <>
                        <Divider className={cx(styles.divider)} />
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />
                                        }
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                        <Row>
                            <Col flex={1}>
                                <UploadTextArea />
                            </Col>
                            <Col>
                                <Button
                                className='mt-1'
                                    variant="outlined"
                                    style={{
                                        border: 'none',
                                        boxShadow: 'none',
                                        outline: 'none',
                                        resize: 'none',
                                    }}
                                    icon={<SendOutlined />}
                                />
                            </Col>
                        </Row>
                    </>
                )}
                 */}
                {showComment && (
                    <>
                        <Divider className={cx(styles.divider)} />

                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={
                                                    <Avatar
                                                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                                                    />
                                                }
                                                title={<a href="https://ant.design">{item.title}</a>}
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            />
                                        </List.Item>
                                    )}
                                />
                                <Row className="mt-2">
                                    <Col flex={1}>
                                        <UploadTextArea />
                                    </Col>
                                    <Col>
                                        <Button
                                            className="mt-1"
                                            icon={<SendOutlined />}
                                            style={{
                                                border: 'none',
                                                boxShadow: 'none',
                                                outline: 'none',
                                                resize: 'none',
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
            </Card>
        </>
    );
};

export default CardPost;
