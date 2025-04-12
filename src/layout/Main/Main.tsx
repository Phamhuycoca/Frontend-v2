import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import { EllipsisOutlined, LikeOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons';
import CreatePostPage from './CreatePost';
import StoriesCard from './StoriesCard';
import './style.scss';
import ImageGrid from './ImageGrid';

const { Meta } = Card;

const MainPage: React.FC = () => {
    const images = [
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389292/489570373_18363216550133291_2396251366816409346_n_tfpjy9.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911592/481975633_2251497388613022_1771262822051285834_n_orw75k.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911544/484408779_17941525388971869_804391854255890285_n_dzwiep.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389533/485035891_1112428667302468_7524161883491890393_n_dhwogd.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/486062504_1114737393738262_357359478360556972_n_fsy7u1.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389292/489570373_18363216550133291_2396251366816409346_n_tfpjy9.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911592/481975633_2251497388613022_1771262822051285834_n_orw75k.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911544/484408779_17941525388971869_804391854255890285_n_dzwiep.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/486062504_1114737393738262_357359478360556972_n_fsy7u1.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389533/485035891_1112428667302468_7524161883491890393_n_dhwogd.jpg',
    ];

    return (
        <Row gutter={[8, 8]} className="mt-2">
            <Col span={16}>
                <CreatePostPage />
                <Row className="mt-3">
                    <Col span={24}>
                        <Card
                            style={{ width: '100%', marginBottom: 24 }}
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
                            extra={<EllipsisOutlined style={{ fontSize: 18 }} />}
                        >
                            <Meta
                                avatar={
                                    <Avatar src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389292/489570373_18363216550133291_2396251366816409346_n_tfpjy9.jpg" />
                                }
                                title={
                                    <>
                                        <span style={{ fontWeight: 600 }}>Anna Sthesia</span>{' '}
                                        <span style={{ color: '#888' }}>Add New Post</span>
                                    </>
                                }
                                description={<span style={{ color: '#1890ff' }}>Just Now</span>}
                            />

                            <div style={{ marginTop: 12 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at
                                commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                                massa sed rhoncus
                            </div>

                            <ImageGrid images={images} />
                        </Card>
                    </Col>
                </Row>
            </Col>

            <Col span={8}>
                <Row justify="center">
                    <StoriesCard />
                </Row>
            </Col>
        </Row>
    );
};

export default MainPage;
