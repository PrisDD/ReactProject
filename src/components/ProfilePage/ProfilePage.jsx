import React from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './ProfilePage.module.css';

// let postsData = [
//     { id: 1, message: 'Hi, hay?', like: '10' },
//     { id: 2, message: 'Hi2, hay?', like: '20' },
//     { id: 3, message: 'Hi3, hay?', like: '30' },
//     { id: 4, message: 'Hi4, hay?', like: '40' },
//     { id: 5, message: 'Hi2, hay?', like: '20' },
//     { id: 6, message: 'Hi3, hay?', like: '30' },
//     { id: 7, message: 'Hi4, hay?', like: '40' }
// ];

const ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default ProfilePage;