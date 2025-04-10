import { EllipsisOutlined, PictureOutlined, SmileOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Input, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
const CustomActionsWrapper = styled.div`
    &::before,
    &::after {
        display: none !important;
    }
    padding-left: 8px;
    padding-right: 8px;
`;
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
                                <Button icon={<EllipsisOutlined />} style={{ backgroundColor: '#e7f3ff' }} />
                            </Col>
                        </Row>
                    </CustomActionsWrapper>,
                ]}
            >
                <Row align="middle" style={{ marginBottom: 16 }}>
                    <Col>
                        <Avatar
                            src="https://randomuser.me/api/portraits/men/32.jpg"
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
                </Row>
            </Card>
        </>
    );
};
export default CreatePostPage;
