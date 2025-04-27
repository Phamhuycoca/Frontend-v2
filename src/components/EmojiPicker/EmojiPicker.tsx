import React from 'react';
import EmojiPicker from 'emoji-picker-react';
interface Props {
    onChange?: (value: string) => void;
  }
  
const Emoji: React.FC<Props> = ({onChange}) => {
    const handleReaction=(value:any)=>{
        onChange?.(value)
    }
    return (
        <>
            <EmojiPicker onEmojiClick={handleReaction}/>
        </>
    );
};
export default Emoji;
