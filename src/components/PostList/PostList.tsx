// PostList.tsx
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardPost from '../CardPost/CardPost';
import { Skeleton } from 'antd';

const fakeImages = [
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389533/485035891_1112428667302468_7524161883491890393_n_dhwogd.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/484629919_1112428663969135_8561795339182956993_n_df5m9x.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/490011465_17899777956172253_3024570406282557719_n_nxqjl4.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482451414_18019050191689334_8469670557885974096_n_1080_le82fd.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482804041_18019050182689334_6423249862590659425_n_1080_ricisr.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482918326_18019050200689334_3721899778141811526_n_1080_np6rbw.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463015/Snapins.ai_481366255_18017806829689334_2291091407126968192_n_1080_vydtal.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463015/Snapins.ai_480816343_18017806844689334_978884232827736532_n_1080_rt2vqn.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463014/Snapins.ai_481183538_18017806847689334_8778237351082774890_n_1080_u4465y.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_482921021_18019050173689334_4502309268054230383_n_1080_pltnqf.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_435524673_17976564980689334_6694540615151069200_n_1080_gd63rx.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_451303216_7870709326341783_3616255518987744697_n_1080_ksv9qa.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463017/Snapins.ai_451665166_1536611533873464_9027857837839653197_n_1080_g7s9i4.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_435884306_17976564989689334_4811020392780866221_n_1080_ogn2nc.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463016/Snapins.ai_420469186_17976564998689334_6134855275071931184_n_1080_xs0moi.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463015/Snapins.ai_436513277_17976565007689334_4194788892760304090_n_1080_dvamex.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/485730074_1114737893738212_1753368295113564478_n_vopjsz.jpg',
    'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744389531/486062504_1114737393738262_357359478360556972_n_fsy7u1.jpg',
];
const generatePosts = (start = 0, count = 5) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `post-${start + i}`,
        user: {
            name: `User ${start + i + 1}`,
            avatar: 'https://res.cloudinary.com/drhdgw1xx/image/upload/v1744463633/464406393_1225444018740551_556811453310840895_n_kwgfdn.jpg',
        },
        content: `This is post number ${start + i + 1}`,
        images: fakeImages.slice(0, Math.floor(Math.random() * fakeImages.length)),
        createdAt: 'Just now',
    }));
};

const PostList: React.FC = () => {
    const [posts, setPosts] = useState(generatePosts(0, 5));
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'auto' });
    },[]);
    const fetchMoreData = () => {
        if (posts.length >= 50) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            const newPosts = generatePosts(posts.length, 1);
            setPosts((prev) => [...prev, ...newPosts]);
        }, 5000);
    };

    return (
        <InfiniteScroll
            style={{ overflowY: 'hidden' }}
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
                <Skeleton avatar paragraph={{ rows: 4 }} />
            }
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>You have seen it all!</b>
                </p>
            }
        >
            {posts.map((post) => (
                <CardPost key={post.id} post={post} />
            ))}
        </InfiniteScroll>
    );
};

export default PostList;
