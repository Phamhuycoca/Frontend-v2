import React, { useState } from 'react';
import { LikeOutlined } from '@ant-design/icons';
import './LikeButton.module.scss';
import like from './../../assets/emojis/like.svg';
import love from './../../assets/emojis/love.svg';
import haha from './../../assets/emojis/haha.svg';
import wow from './../../assets/emojis/wow.svg';
import sad from './../../assets/emojis/sad.svg';
import angry from './../../assets/emojis/angry.svg';

const emojis = [
    { name: 'like', src: like },
    { name: 'love', src: love },
    { name: 'haha', src: haha },
    { name: 'wow', src: wow },
    { name: 'sad', src: sad },
    { name: 'angry', src: angry },
];

const LikeButton: React.FC = () => {
    const [showReactions, setShowReactions] = useState(false);
    const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
    const [likesCount, setLikesCount] = useState<number>(140);

    const handleReactionClick = (reaction: string) => {
        setSelectedReaction(reaction);
        setLikesCount(likesCount + 1); // Cập nhật số lượt thích khi chọn phản ứng
    };

    return (
        <div
            className="like-container"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
        >
            <div className="like-button">
                <LikeOutlined style={{ color: '#1877F2' }} />
                <span style={{ marginLeft: 4 }}>
                    {selectedReaction ? `${likesCount} ${selectedReaction.charAt(0).toUpperCase() + selectedReaction.slice(1)}` : `${likesCount} Likes`}
                </span>
            </div>

            {/* Thêm class show khi showReactions là true */}
            {showReactions && selectedReaction && (
                <div className={`reaction-popup ${showReactions ? 'show' : ''}`}>
                    {emojis.map((emoji) => (
                        <img
                            key={emoji.name}
                            src={emoji.src}
                            alt={emoji.name}
                            className="emoji"
                            onClick={() => handleReactionClick(emoji.name)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikeButton;
