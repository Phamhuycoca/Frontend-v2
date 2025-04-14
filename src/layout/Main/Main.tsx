import React from 'react';
import { Col, Row } from 'antd';
import CreatePostPage from '../../components/CreatePost/CreatePost';
import StoriesCard from '../../components/StoriesCard/StoriesCard';
import './main.module.scss';
import { PostList, SuggestedPages, UpcomingBirthday } from '../../components';

const MainPage: React.FC = () => {
    return (
        <Row
            gutter={[8, 8]}
            style={{
                marginTop: '100px',
            }}
        >
            <Col
                span={16}
                style={{
                    minHeight: '100vh',
                    height: '100%',
                }}
            >
                <Row>
                    <Col
                        span={24}
                        style={{
                            padding: '0 10px',
                        }}
                    >
                        <CreatePostPage />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col span={24}>
                        <PostList />
                    </Col>
                </Row>
            </Col>
            <Col span={8}>
                <Row justify="center">
                    <StoriesCard />
                    <UpcomingBirthday />
                    <SuggestedPages />
                </Row>
            </Col>
        </Row>
    );
};

export default MainPage;
