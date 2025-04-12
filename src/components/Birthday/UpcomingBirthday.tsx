import { Avatar, Card, Space, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

type BirthdayItem = {
    id: number;
    name: string;
    time: string;
    avatar?: string;
    icon?: React.ReactNode;
    isCreate?: boolean;
};

const stories: BirthdayItem[] = [
    {
        id: 2,
        name: 'Anna Sthesia',
        time: 'Today',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 3,
        name: 'Paul Molive',
        time: 'Tomorrow',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    }
];

const UpcomingBirthday: React.FC = () => {
    return (
        <>
            <Card title="Upcoming Birthday" size="small" style={{ width: '100%' }}>
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
                            <Avatar size={48} src={story.avatar} />
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
            </Card>
        </>
    );
};
export default UpcomingBirthday;
