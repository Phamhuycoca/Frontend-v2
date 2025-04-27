import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import modalService from '../../services/Observable/Observable.modal';
import ModalCategory from './ModalCategory';
import { Emoji, RichText } from '../../components';

const CategoryPage: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const richTextRef = useRef<any>(null);

    const handleEmojiSelect = (value: any) => {
        if (!value?.emoji) return;
        const editor = richTextRef.current;
        if (!editor) return;

        editor.focus();
        editor.selection.setContent(value.emoji); // 👉 chèn emoji vào VỊ TRÍ CON TRỎ
    };

    return (
        <>
            <Button onClick={() => modalService.setOpenModal('category')}>OK day</Button>
            <ModalCategory />
            <RichText
                ref={richTextRef}
                value={content}
                onChange={(value:any) => setContent(value)}
            />
            <Emoji onChange={handleEmojiSelect} />
        </>
    );
};

export default CategoryPage;
