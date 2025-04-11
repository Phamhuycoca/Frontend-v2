import React from 'react';
import { Card, Avatar, Button, Space, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Text } = Typography;

type StoryItem = {
    id: number;
    name: string;
    time: string;
    avatar?: string;
    icon?: React.ReactNode;
    isCreate?: boolean;
};

const stories: StoryItem[] = [
    {
        id: 1,
        name: 'Create Your Story',
        time: 'time to story',
        icon: <PlusOutlined />,
        isCreate: true,
    },
    {
        id: 2,
        name: 'Anna Mull',
        time: '1 hour ago',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 3,
        name: 'Ira MemBrit',
        time: '4 hour ago',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    },
    {
        id: 4,
        name: 'Bob Frapples',
        time: '9 hour ago',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    },
];

const StoriesCard: React.FC = () => {
    return (
        <Card title="Stories" size="small" style={{ width: '100%' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                {stories.map((story) => (
                    <div
                        key={story.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 0',
                            gap: 12,
                        }}
                    >
                        {story.isCreate ? (
                            <Avatar size={48} icon={story.icon} style={{ backgroundColor: '#f0f0f0', color: '#555' }} />
                        ) : (
                            <Avatar size={48} src={story.avatar} />
                        )}
                        <div>
                            <Text strong style={{ display: 'block' }}>
                                {story.name}
                            </Text>
                            <Text type="secondary" style={{ fontSize: 12 }}>
                                {story.time}
                            </Text>
                        </div>
                    </div>
                ))}
            </Space>
            <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 16 }}>
                <Button type="primary" block>
                    See All aaaaaaa
                </Button>
            </div>
        </Card>
    );
};

export default StoriesCard;
