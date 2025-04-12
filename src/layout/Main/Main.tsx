import React from 'react';
import { Col, Row } from 'antd';
import CreatePostPage from './CreatePost';
import StoriesCard from './StoriesCard';
import './style.scss';
import { CardPost, SuggestedPages, UpcomingBirthday } from '../../components';

const MainPage: React.FC = () => {
    return (
        <Row gutter={[8, 8]} className="mt-2">
            <Col
                span={16}
                style={{
                    minHeight: '100vh',
                    height: '100%',
                }}
            >
                <CreatePostPage />
                <Row className="mt-3">
                    <Col span={24}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CardPost key={index} />
                        ))}
                    </Col>
                </Row>
            </Col>
            <Col span={8}>
                <Row justify="center">
                    <StoriesCard/>
                    <UpcomingBirthday />
                    <SuggestedPages />
                </Row>
            </Col>
        </Row>
    );
};

export default MainPage;
