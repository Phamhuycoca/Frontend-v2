import React, { useState } from 'react';
import './ImageGrid.scss';
import { Image, Modal } from 'antd';
import VideoPlayer from '../VideoJS/VideoPlayer';
interface ImageGridProps {
    images?: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const displayedImages = images?.slice(0, 4);
    const remainingCount = images !=undefined ? images?.length- 4 : 0;
    const remainingImages = images;
    const [image, setImage] = useState<string>('');
    const getGridClass = () => {
        switch (displayedImages?.length) {
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
    const openModal = (imgage: string) => {
        setImage(imgage);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className={`image-grid ${getGridClass()}`}>
                {displayedImages?.map((img, index) => (
                    <div key={index} className="image-wrapper">
                        {img.includes('.mp4') ? (
                            <>
                                <VideoPlayer src={img} />
                            </>
                        ) : (
                            <>
                                <Image preview={false} src={img} alt={`img-${index}`} onClick={() => openModal(img)} />
                                {index === 3 && remainingCount > 0 && (
                                    <div className="overlay" onClick={() => setIsModalOpen(true)}>
                                        +{remainingCount}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Modal
                open={isModalOpen}
                onCancel={() => {
                    setIsModalOpen(false);
                    setImage('');
                }}
                footer={null}
                title="Hình ảnh khác"
                width={800}
            >
                {image !== '' ? (
                    <Image src={image} className="mb-2" />
                ) : (
                    <>
                        {remainingImages?.map((img, idx) => (
                            <Image key={idx} src={img} alt={`extra-${idx}`} className="mb-2" />
                        ))}
                    </>
                )}
            </Modal>
        </>
    );
};

export default ImageGrid;
