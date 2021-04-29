import React from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './ProfilePage.module.css';

const ProfilePage = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} />
        </div>
    );
}

export default ProfilePage;