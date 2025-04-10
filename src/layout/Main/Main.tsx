import { Col, Row } from 'antd';
import React from 'react';
import './style.scss';
import CreatePostPage from './CreatePost';
import StoriesCard from './StoriesCard';

const MainPage: React.FC = () => {
    return (
        <>
            <Row gutter={[8, 8]} className="mt-2">
                <Col span={16}>
                    <CreatePostPage />
                </Col>
                <Col span={8}>
                    <Row justify={'end'}>
                        <StoriesCard />
                    </Row>
                </Col>
            </Row>
        </>
    );
};
export default MainPage;
