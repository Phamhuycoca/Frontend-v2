import { EllipsisOutlined, PictureOutlined, SendOutlined, SmileOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Dropdown, Input, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import type { MenuProps } from 'antd';
const CustomActionsWrapper = styled.div`
    &::before,
    &::after {
        display: none !important;
    }
    padding-left: 8px;
    padding-right: 8px;
`;
const items: MenuProps['items'] = [
    {
        label: 'Check in',
        key: '0',
    },
    {
        label: 'Live video',
        key: '1',
    },
    {
        label: 'Gif',
        key: '3',
    },
    {
        label: 'Watch Party',
        key: '4',
    },
    {
        label: 'Play with friend',
        key: '5',
    },
];
const CreatePostPage: React.FC = () => {
    return (
        <>
            <Card
                title="Create Post"
                size="small"
                actions={[
                    <CustomActionsWrapper key="actions">
                        <Row justify="space-evenly" gutter={[12, 12]}>
                            <Col flex="1">
                                <Button block icon={<PictureOutlined />} style={{ backgroundColor: '#e7f3ff' }}>
                                    Photo/Video
                                </Button>
                            </Col>
                            <Col flex="1">
                                <Button block icon={<UserAddOutlined />} style={{ backgroundColor: '#e7f3ff' }}>
                                    Tag Friend
                                </Button>
                            </Col>
                            <Col flex="1">
                                <Button block icon={<SmileOutlined />} style={{ backgroundColor: '#e7f3ff' }}>
                                    Feeling/Activity
                                </Button>
                            </Col>
                            <Col flex="0 0 40px">
                                <Dropdown menu={{ items }} trigger={['click']}>
                                    <Button
                                        icon={<EllipsisOutlined />}
                                        style={{ backgroundColor: '#e7f3ff' }}
                                        onClick={(e) => e.preventDefault()}
                                    />
                                </Dropdown>
                            </Col>
                        </Row>
                    </CustomActionsWrapper>,
                ]}
            >
                <Row align="middle" style={{ marginBottom: 16 }}>
                    <Col>
                        <Avatar
                            src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/464406393_1225444018740551_556811453310840895_n_kwgfdn.jpg"
                            size={48}
                            style={{ marginRight: 12 }}
                        />
                    </Col>
                    <Col flex={1}>
                        <Input.TextArea
                            placeholder="Write something here..."
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                                outline: 'none',
                                resize: 'none',
                            }}
                        />
                    </Col>
                    <Col>
                        <Button variant='outlined' style={{
                                border: 'none',
                                boxShadow: 'none',
                                outline: 'none',
                                resize: 'none',
                            }} icon={<SendOutlined />} />
                    </Col>
                </Row>
            </Card>
        </>
    );
};
export default CreatePostPage;
