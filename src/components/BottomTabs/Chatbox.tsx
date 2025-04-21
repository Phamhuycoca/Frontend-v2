import { CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Input, List, Row, Skeleton } from 'antd';
import { removeUserByEmail, User } from '../../stores/reducers/listchat.slice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
interface DataType {
    fromMe?: boolean;
    gender?: string;
    name: {
        title?: string;
        first?: string;
        last?: string;
    };
    email?: string;
    picture: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
    content?: string;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

type UserProp = {
    user: User;
};

const ChatBox: React.FC<UserProp> = ({ user }) => {
    const dispatch = useDispatch();
    const [initLoading, setInitLoading] = useState(true);
    const [list, setList] = useState<DataType[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const updatedData = res.results.map((item: DataType, index: number) => ({
                    ...item,
                    loading: false,
                    fromMe: index % 2 === 0,
                    content: index % 2 === 0 ? 'Xin chào bạn!' : 'Ant Design là thư viện UI tuyệt vời!',
                }));
                setInitLoading(false);
                setList(updatedData);
            });
    }, []);



    const onSend = () => {
        if (!message.trim()) return;
        const newMessage: DataType = {
            loading: false,
            fromMe: true,
            name: { first: '', last: 'Bạn' },
            picture: { large: user.picture.large },
            content: message,
        };
        const updatedList = [...list, newMessage];
        setList(updatedList);
        setMessage('');
    };

 

    return (
        <Card
            key={user.email}
            size="small"
            extra={
                <Button
                    type="text"
                    size="small"
                    icon={<CloseOutlined />}
                    onClick={() => {
                        dispatch(removeUserByEmail(user.email));
                    }}
                />
            }
            title={
                <>
                    <Avatar src={user.picture.large} /> <span>{user.name.last}</span>
                </>
            }
            styles={{
                body: {
                    padding: 0,
                },
            }}
            style={{
                height: '100%',
                width: '400px',
                maxWidth: '350px',
                minWidth: '350px',
                marginRight: '10px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item) => {
                        const isFromMe = item.fromMe;
                        return (
                            <List.Item
                                style={{
                                    borderBottom: 'none',
                                    padding: '5px 0',
                                    justifyContent: isFromMe ? 'flex-end' : 'flex-start',
                                }}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: isFromMe ? 'row-reverse' : 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {!isFromMe && <Avatar src={item.picture?.large} style={{ marginRight: 8 }} />}
                                        <Card
                                            style={{
                                                backgroundColor: isFromMe ? '#1677FF' : '#f0f0f0',
                                                maxWidth: '250px',
                                            }}
                                            bodyStyle={{
                                                borderRadius: 5,
                                                padding: 8,
                                                color: isFromMe ? '#fff' : '#000',
                                            }}
                                        >
                                            <span style={{ fontSize: 13 }}>{item.content}</span>
                                        </Card>
                                    </div>
                                </Skeleton>
                            </List.Item>
                        );
                    }}
                />
            </div>

            <Row
                style={{
                    position: 'fixed',
                    bottom: 0,
                    padding: 10,
                    width: '18.3%',
                    borderTop: '1px solid #f0f0f0',
                    backgroundColor: '#f0f0f0',
                }}
            >
                <Col flex={1}>
                    <Input.TextArea
                        placeholder="Nhập tin nhắn..."
                        autoSize={{ minRows: 1, maxRows: 4 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onPressEnter={(e) => {
                            if (!e.shiftKey) {
                                e.preventDefault();
                                onSend();
                            }
                        }}
                        style={{
                            boxShadow: 'none',
                            resize: 'none',
                        }}
                    />
                </Col>
                <Col>
                    <Button
                        type="text"
                        icon={<SendOutlined />}
                        onClick={onSend}
                        style={{
                            marginLeft: 8,
                        }}
                    />
                </Col>
            </Row>
        </Card>
    );
};

export default ChatBox;
