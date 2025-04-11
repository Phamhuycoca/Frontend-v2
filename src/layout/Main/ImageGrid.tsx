// ImageGrid.tsx
import React from 'react';
import { Image } from 'antd';
import './ImageGrid.scss';

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const count = images.length;

  return (
    <div className={`image-grid count-${count}`}>
      {count === 1 ? (
        <Image
          src={images[0]}
          width="100%"
          height="auto"
          preview
          style={{ borderRadius: 8 }}
        />
      ) : (
        images.map((img, index) => (
          <div className="image-wrapper" key={index}>
            <Image
              src={img}
              preview
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGrid;
