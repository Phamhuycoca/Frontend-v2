import React, { CSSProperties } from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    width?: string;
    height?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    style?: CSSProperties | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    width = '100%',
    height = '100%',
    autoPlay = false,
    muted = false,
    loop = false,
    controls = true,
    style,
}) => {
   

   
    const mergeStyle = {
        width,
        height,
        ...style,
    };

    return (
        <div
            style={mergeStyle}
        >
            <video
                width="100%"
                height="100%"
                controls={controls}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                poster={poster}
                style={{ borderRadius: '12px' }}
            >
                <source src={src} type="video/ogg" />
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer;
