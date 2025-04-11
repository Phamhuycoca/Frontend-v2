import React from 'react';
import { Avatar, Card, Col, Image, Row } from 'antd';
import {
  EllipsisOutlined,
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import CreatePostPage from './CreatePost';
import StoriesCard from './StoriesCard';
import './style.scss';

const { Meta } = Card;

const MAX_DISPLAY_IMAGES = 4;

const ImageGrid: React.FC<{ images: string[] }> = ({ images }) => {
    const visibleImages = images.slice(0, MAX_DISPLAY_IMAGES);
    const hiddenCount = images.length - MAX_DISPLAY_IMAGES;
  
    return (
      <Row gutter={[8, 8]} style={{ marginTop: 12 }}>
        {visibleImages.map((src, index) => {
          const isLast = index === MAX_DISPLAY_IMAGES - 1 && hiddenCount > 0;
          return (
            <Col span={12} key={index}>
              <div style={{ position: 'relative', width: '50%', paddingBottom: '50%', overflow: 'hidden', borderRadius: 8 }}>
                <img
                  src={src}
                  alt={`post-${index}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
                {isLast && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: 8,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    +{hiddenCount}
                  </div>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
    );
  };
  
const MainPage: React.FC = () => {
  const images = [
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389292/489570373_18363216550133291_2396251366816409346_n_tfpjy9.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911592/481975633_2251497388613022_1771262822051285834_n_orw75k.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1742911544/484408779_17941525388971869_804391854255890285_n_dzwiep.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/486062504_1114737393738262_357359478360556972_n_fsy7u1.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389533/485035891_1112428667302468_7524161883491890393_n_dhwogd.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389533/485035891_1112428667302468_7524161883491890393_n_dhwogd.jpg',
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
                  <Avatar
                    src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389292/489570373_18363216550133291_2396251366816409346_n_tfpjy9.jpg"
                  />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
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
