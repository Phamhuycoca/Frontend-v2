import React from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    width?: string;
    height?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    width = '100%',
    height = 'auto',
    autoPlay = false,
    muted = false,
    loop = false,
    controls = true,
}) => {
    return (
        <div style={{ width, height }}>
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
            </video>
        </div>
    );
};

export default VideoPlayer;
