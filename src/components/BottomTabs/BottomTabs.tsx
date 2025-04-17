import React from 'react';
import ChatBox from './Chatbox';
import { RootState } from '../../stores/store';
import { useSelector } from 'react-redux';

const BottomTabs: React.FC = () => {
    const list = useSelector((state: RootState) => state.chatList);

    return (
        <div
            style={{
                height: 400,
                zIndex: 9,
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
    );
};

export default BottomTabs;
