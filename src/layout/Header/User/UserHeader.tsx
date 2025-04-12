import {
    BellOutlined,
    CloseCircleOutlined,
    SaveOutlined,
    UserDeleteOutlined,
    UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { Dropdown, List, Space } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
type ListMemu = {
    key?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
};
const useStyles = createStyles(({ css }) => ({
    list: css`
        transition: all 0.3s ease;
        &:hover {
            background-color: #f0f2f5;
            .ant-list-item-meta-description > span {
                color: #48a3e6;
            }
        }
    `,
}));
const ListMenus: ListMemu[] = [
    { key: '1', icon: <SaveOutlined />, title: 'Save Post', description: 'Add this to your saved items' },
    { key: '2', icon: <CloseCircleOutlined />, title: 'Hide Post', description: 'See fewer posts like this' },
    {
        key: '3',
        icon: <UserDeleteOutlined />,
        title: 'Unfollow User',
        description: 'Stop seeing posts but stay friends',
    },
    { key: '4', icon: <BellOutlined />, title: 'Notifications', description: 'Turn on notifications for this post' },
];

const UserHeader: React.FC = () => {
    const { styles, cx } = useStyles();
    return (
        <>
            <Dropdown
                placement="bottomRight"
                arrow
                trigger={['click']}
                overlayStyle={{ width: 300 }}
                dropdownRender={() => (
                    <div style={{ backgroundColor: '#fff', borderRadius: '5px' }}>
                        <List
                            style={{ cursor: 'pointer' }}
                            itemLayout="horizontal"
                            dataSource={ListMenus}
                            renderItem={(item, index) => (
                                <List.Item className={cx(styles.list)}>
                                    <List.Item.Meta
                                        key={index}
                                        avatar={
                                            <div style={{ fontSize: 18 }} className="ms-2">
                                                {item.icon}
                                            </div>
                                        }
                                        title={<span>{item.title}</span>}
                                        description={<span style={{ fontSize: 14 }}>{item.description}</span>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                )}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <UsergroupDeleteOutlined style={{ fontSize: 18 }} />
                    </Space>
                </a>
            </Dropdown>
        </>
    );
};
export default UserHeader;
