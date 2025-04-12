import React, { ReactNode } from 'react';
import {
    BellOutlined,
    CloseCircleOutlined,
    EllipsisOutlined,
    LikeOutlined,
    MessageOutlined,
    SaveOutlined,
    ShareAltOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Dropdown, List, Row, Space } from 'antd';
import ImageGrid from '../ImageGrid/ImageGrid';
import { createStyles } from 'antd-style';
type ListMemu = {
    key?: string;
    icon?: ReactNode;
    title?: string;
    description?: string;
};
const ListMenus: ListMemu[] = [
    {
        key: '1',
        icon: <SaveOutlined />,
        title: 'Save Post',
        description: 'Add this to your saved items',
    },
    {
        key: '2',
        icon: <CloseCircleOutlined />,
        title: 'Hide Post',
        description: 'See fewer posts like this',
    },
    {
        key: '3',
        icon: <UserDeleteOutlined />,
        title: 'Unfollow User',
        description: 'Stop seeing posts but stay friends',
    },
    {
        key: '4',
        icon: <BellOutlined />,
        title: 'Notifications',
        description: 'Turn on notifications for this posts',
    },
];
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

const { Meta } = Card;
const CardPost: React.FC = () => {
    const { styles, cx } = useStyles();
    const images = [
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482451414_18019050191689334_8469670557885974096_n_1080_le82fd.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482804041_18019050182689334_6423249862590659425_n_1080_ricisr.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482918326_18019050200689334_3721899778141811526_n_1080_np6rbw.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463015/Snapins.ai_481366255_18017806829689334_2291091407126968192_n_1080_vydtal.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463015/Snapins.ai_480816343_18017806844689334_978884232827736532_n_1080_rt2vqn.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463014/Snapins.ai_481183538_18017806847689334_8778237351082774890_n_1080_u4465y.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482921021_18019050173689334_4502309268054230383_n_1080_pltnqf.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_435524673_17976564980689334_6694540615151069200_n_1080_gd63rx.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_451303216_7870709326341783_3616255518987744697_n_1080_ksv9qa.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_451665166_1536611533873464_9027857837839653197_n_1080_g7s9i4.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_435884306_17976564989689334_4811020392780866221_n_1080_ogn2nc.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_420469186_17976564998689334_6134855275071931184_n_1080_xs0moi.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463015/Snapins.ai_436513277_17976565007689334_4194788892760304090_n_1080_dvamex.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/485730074_1114737893738212_1753368295113564478_n_vopjsz.jpg',
        'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/486062504_1114737393738262_357359478360556972_n_fsy7u1.jpg',
    ];

    return (
        <>
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
            >
                <Meta
                    avatar={
                        <Avatar src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389292/489570373_18363216550133291_2396251366816409346_n_tfpjy9.jpg" />
                    }
                    title={
                        <>
                            <Row>
                                <Col span={12}>
                                    <span style={{ fontWeight: 600 }}>Anna Sthesia</span>{' '}
                                    <span style={{ color: '#888' }}>Add New Post</span>
                                </Col>
                                <Col span={12}>
                                    <Row justify={'end'}>
                                        <Dropdown
                                            placement="bottom" arrow
                                            trigger={['click']}
                                            overlayStyle={{ width: 280 }}
                                            dropdownRender={() => (
                                                <div
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        borderRadius: '5px',
                                                    }}
                                                >
                                                    <List
                                                        style={{ cursor: 'pointer' }}
                                                        itemLayout="horizontal"
                                                        dataSource={ListMenus}
                                                        renderItem={(item, index) => (
                                                            <List.Item className={cx(styles.list)}>
                                                                <List.Item.Meta
                                                                    key={index}
                                                                    avatar={
                                                                        <div style={{ fontSize: 18, marginLeft: 5 }}>
                                                                            {item.icon}
                                                                        </div>
                                                                    }
                                                                    title={<span>{item.title}</span>}
                                                                    description={
                                                                        <span style={{ fontSize: 14 }}>
                                                                            {item.description}
                                                                        </span>
                                                                    }
                                                                />
                                                            </List.Item>
                                                        )}
                                                    />
                                                </div>
                                            )}
                                        >
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    <EllipsisOutlined style={{ fontSize: 18 }} />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    }
                    description={<span style={{ color: '#1890ff' }}>Just Now</span>}
                />

                <div style={{ marginTop: 12 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,
                    feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
                </div>

                <ImageGrid images={images} />
            </Card>
        </>
    );
};
export default CardPost;
