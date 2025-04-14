import React from 'react';
import {
    DeleteOutlined,
    DownloadOutlined,
    EditOutlined,
    EllipsisOutlined,
    EyeOutlined,
    LikeOutlined,
    PrinterOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Dropdown, Image, Row, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';

const { Text } = Typography;

type BirthdayItem = {
    id: number;
    name: string;
    time: string;
    avatar?: string;
    icon?: React.ReactNode;
    isCreate?: boolean;
    image?: string;
};

const stories: BirthdayItem[] = [
    {
        id: 1,
        name: 'Paul Molive',
        time: 'Tomorrow',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        image: 'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_451303216_7870709326341783_3616255518987744697_n_1080_ksv9qa.jpg',
    },
    {
        id: 2,
        name: 'Anna Sthesia',
        time: 'Today',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        image: 'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463024/Snapins.ai_489828232_17944006352971869_5882687136292615004_n_1024_xtltif.jpg',
    },
    {
        id: 3,
        name: 'Paul Molive',
        time: 'Tomorrow',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        image: 'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_451303216_7870709326341783_3616255518987744697_n_1080_ksv9qa.jpg',
    },
];

const items: MenuProps['items'] = [
    {
        label: (
            <>
                <Row align={'middle'} justify={'space-between'}>
                    <Col span={6}>
                        <Row justify={'end'}>
                            <EyeOutlined />
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row justify={'start'}>
                            <Text style={{ fontSize: 12 }}>View</Text>
                        </Row>
                    </Col>
                </Row>
            </>
        ),
        key: '0',
    },
    {
        label: (
            <>
                <Row align={'middle'} justify={'space-between'}>
                    <Col span={6}>
                        <Row justify={'end'}>
                            <DeleteOutlined />
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row justify={'start'}>
                            <Text style={{ fontSize: 12 }}>Delete</Text>
                        </Row>
                    </Col>
                </Row>
            </>
        ),
        key: '1',
    },
    {
        label: (
            <>
                <Row align={'middle'} justify={'space-between'}>
                    <Col span={6}>
                        <Row justify={'end'}>
                            <EditOutlined />
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row justify={'start'}>
                            <Text style={{ fontSize: 12 }}>Edit</Text>
                        </Row>
                    </Col>
                </Row>
            </>
        ),
        key: '2',
    },
    {
        label: (
            <>
                <Row align={'middle'} justify={'space-between'}>
                    <Col span={6}>
                        <Row justify={'end'}>
                            <PrinterOutlined />
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row justify={'start'}>
                            <Text style={{ fontSize: 12 }}>Print</Text>
                        </Row>
                    </Col>
                </Row>
            </>
        ),
        key: '3',
    },
    {
        label: (
            <>
                <Row align={'middle'} justify={'space-between'}>
                    <Col span={6}>
                        <Row justify={'end'}>
                            <DownloadOutlined />
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row justify={'start'}>
                            <Text style={{ fontSize: 12 }}>Download</Text>
                        </Row>
                    </Col>
                </Row>
            </>
        ),
        key: '4',
    },
];
const SuggestedPages: React.FC = () => (
    <Card
        title="Suggested Pages"
        extra={
            <Dropdown
                menu={{ items }}
                trigger={['click']}
                overlayStyle={{
                    width: '150px',
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <EllipsisOutlined />
                    </Space>
                </a>
            </Dropdown>
        }
        className='mb-2'
        size="small"
        style={{ width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}
    >
        <Space direction="vertical" style={{ width: '100%' }}>
            {stories.map((story) => (
                <div
                    key={story.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '8px 0',
                        gap: 12,
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'start',
                        }}
                    >
                        <Avatar size={48} src={story.avatar} />
                        <div className="ms-3">
                            <Text strong style={{ display: 'block' }}>
                                {story.name}
                            </Text>
                            <Text type="secondary" style={{ fontSize: 12 }}>
                                {story.time}
                            </Text>
                        </div>
                    </div>
                    <div>
                        <Image src={story.image} preview={false} />
                    </div>
                    <a>
                        <LikeOutlined /> 140 Likes
                    </a>
                </div>
            ))}
        </Space>
    </Card>
);

export default SuggestedPages;
