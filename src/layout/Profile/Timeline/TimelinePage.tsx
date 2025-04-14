import { StarTwoTone } from '@ant-design/icons';
import { Avatar, Card, Col, Image, Row } from 'antd';
import React from 'react';
import { CreatePost, PostList } from '../../../components';

const TimelinePage: React.FC = () => {
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col span={8}>
                    <Card
                        style={{
                            cursor: 'pointer',
                        }}
                    >
                        <StarTwoTone /> <span style={{ color: '#40a9ff' }}> 27 Items for yoou</span>
                    </Card>
                    <Card
                        variant="borderless"
                        className="mt-3"
                        title={<span className="ms-1">Life Event</span>}
                        extra={<span style={{ color: '#40a9ff' }}>Create</span>}
                        styles={{
                            body: {
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            },
                        }}
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '100%',
                                }}
                            >
                                <Row
                                    style={{
                                        width: '100%',
                                    }}
                                    justify={'center'}
                                >
                                    <Col
                                        span={24}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <div
                                            className="mt-3"
                                            style={{
                                                borderRadius: '10px',
                                                alignContent: 'center',
                                                backgroundImage: `url(https://templates.iqonic.design/product/lite/socialv/html/dist/assets/images/page-img/07.jpg)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: 200,
                                                position: 'relative',
                                                width: '90%',
                                            }}
                                        >
                                            <Avatar
                                                size={50}
                                                src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/490011465_17899777956172253_3024570406282557719_n_nxqjl4.jpg"
                                                style={{
                                                    position: 'absolute',
                                                    bottom: -35,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    border: '4px solid white',
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="mt-5">
                                    <p className="text-center mb-1 fs-6 fw-normal">Started New Job at Apple</p>
                                    <p className="text-center">January 24, 2019</p>
                                </div>
                            </div>
                        ))}
                    </Card>
                    <Card
                        variant="borderless"
                        className="mt-3"
                        title={<span className="ms-1">Photos</span>}
                        extra={<span style={{ color: '#40a9ff' }}>Add Photo</span>}
                    >
                        <Row gutter={[10, 10]}>
                            {Array.from({ length: 9 }).map((_, i) => (
                                <Col
                                    span={8}
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        style={{ cursor: 'pointer' }}
                                        preview={false}
                                        width={'100%'}
                                        height={100}
                                        src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389574/476037729_1302573824125008_4017964540772625941_n_jqx9mr.jpg"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Card>
                    <Card
                        variant="borderless"
                        className="mt-3"
                        title={<span className="ms-1">Friends</span>}
                        extra={<span style={{ color: '#40a9ff' }}>Add New</span>}
                    >
                        <Row gutter={[10, 10]}>
                            {Array.from({ length: 9 }).map((_, i) => (
                                <Col
                                    span={8}
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Row justify={'center'}>
                                        <Image
                                            style={{ cursor: 'pointer' }}
                                            preview={false}
                                            width={'100%'}
                                            height={100}
                                            src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389574/476037729_1302573824125008_4017964540772625941_n_jqx9mr.jpg"
                                        />
                                        <span className="mt-1">Anna Rexia</span>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>
                <Col span={16}>
                    <CreatePost />
                    <div style={{ width: '100%', height: '100%' }} className='mt-3'>
                        <PostList />
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default TimelinePage;
