import { CloseOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import { removeUserByEmail, User } from '../../stores/reducers/listchat.slice';
import { useDispatch } from 'react-redux';

type UserProp = {
    user: User;
};
const ChatBox: React.FC<UserProp> = ({ user }) => {
    const dispatch = useDispatch();

    return (
        <>
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
                       <Avatar src={user.picture.large}/> <span>{user.name.last}</span> 
                    </>
                }
                style={{
                    height: '100%',
                    width: '350px',
                    maxWidth: '350px',
                    minWidth: '350px',
                    marginRight: '10px',
                }}
            ></Card>
        </>
    );
};
export default ChatBox;
