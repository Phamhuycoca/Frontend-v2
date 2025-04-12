import React, { useState } from 'react';
import './ImageGrid.scss';
import { Image, Modal } from 'antd';

interface ImageGridProps {
    images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const displayedImages = images.slice(0, 4);
    const remainingCount = images.length - 4;
    const remainingImages = images;
    const getGridClass = () => {
        switch (displayedImages.length) {
            case 1:
                return 'grid-one';
            case 2:
                return 'grid-two';
            case 3:
                return 'grid-three';
            case 4:
                return 'grid-four';
            default:
                return 'grid-four';
        }
    };

    return (
        <>
            <div className={`image-grid ${getGridClass()}`}>
                {displayedImages.map((img, index) => (
                    <div key={index} className="image-wrapper">
                        <Image preview={false} src={img} alt={`img-${index}`} />
                        {index === 3 && remainingCount > 0 && (
                            <div className="overlay" onClick={() => setIsModalOpen(true)}>
                                +{remainingCount}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                title="Hình ảnh khác"
                width={800}
            >
                    {remainingImages.map((img, idx) => (
                        <Image preview={false} key={idx} src={img} alt={`extra-${idx}`} className='mb-2'/>
                    ))}
            </Modal>
        </>
    );
};

export default ImageGrid;
