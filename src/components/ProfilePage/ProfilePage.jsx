import React from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './ProfilePage.module.css';

const ProfilePage = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} 
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default ProfilePage;