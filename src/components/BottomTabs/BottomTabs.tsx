import React, { useState } from 'react';
import ChatBox from './Chatbox';
import { RootState } from '../../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined, MessageOutlined } from '@ant-design/icons';
import { Avatar, FloatButton } from 'antd';
import { createStyles } from 'antd-style';
import { removeUserByEmail } from '../../stores/reducers/listchat.slice';
const useStyles = createStyles(({ css }) => ({
    floatIcon: css`
        .ant-float-btn-content {
            padding: 0 !important;
        }
        .ant-float-btn-icon {
            height: 100% !important;
            width: 100% !important;
        }
    `,
}));

const BottomTabs: React.FC = () => {
    const list = useSelector((state: RootState) => state.chatList);
    const listInLast = list.slice(3);
    const { styles, cx } = useStyles();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const dispatch = useDispatch();
    const handleHover = (index: number) => {
        setHoveredIndex(index);  // Bật trạng thái hover cho phần tử cụ thể
      };

      const handleMouseLeave = () => {
        setHoveredIndex(null);  // Tắt trạng thái hover
      };
    return (
        <>
            {listInLast.length > 0 && (
                <FloatButton.Group
                badge={{
                    count:listInLast.length
                }}
                    closeIcon={<CloseOutlined />}
                    style={{
                        position: 'fixed',
                        bottom: 100,
                        right: 30,
                        zIndex: 1000,
                        height: '50px',
                        width: '50px',
                    }}
                    trigger="click"
                    type="primary"
                    icon={<MessageOutlined />}
                >
                    {listInLast.map((user, index) => (
                        
                        <FloatButton
                            badge={{
                                count: hoveredIndex === index ? null : 1000,
                                // dot: hoveredIndex === index, 
                                size: 'small',
                            }}
                            className={cx(styles.floatIcon)}
                            key={index}
                            icon={
                                hoveredIndex ===index ? (
                                    <CloseOutlined
                                        onClick={() => {
                                            dispatch(removeUserByEmail(user.email));
                                        }}
                                    />
                                ) : (
                                    <Avatar
                                        src={user.picture.large}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    />
                                )
                            }
                            onClick={() => console.log(`Chat với ${user.name}`)}
                            style={{
                                marginBottom: 2,
                            }}
                            onMouseEnter={() => handleHover(index)}  // Khi hover vào phần tử này
                            onMouseLeave={handleMouseLeave}  // Khi rời chuột khỏi phần tử
                        />
                    ))}
                </FloatButton.Group>
            )}
            <div
                style={{
                    height: 400,
                    zIndex: 20,
                    position: 'fixed',
                    bottom: 0,
                    right: 100,
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                {list.slice(0, 3).map((user, index) => (
                    <ChatBox key={index} user={user} />
                ))}
            </div>
        </>
    );
};

export default BottomTabs;
