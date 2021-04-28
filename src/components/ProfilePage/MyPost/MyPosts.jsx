import React from 'react';
import Post from './Post/Post';
import s from '../MyPost/MyPosts.module.css';

let postsData = [
    { id: 1, message: 'Hi, hay?', like: '10' },
    { id: 2, message: 'Hi2, hay?', like: '20' },
    { id: 3, message: 'Hi3, hay?', like: '30' },
    { id: 4, message: 'Hi4, hay?', like: '40' },
    { id: 5, message: 'Hi2, hay?', like: '20' },
    { id: 6, message: 'Hi3, hay?', like: '30' },
    { id: 7, message: 'Hi4, hay?', like: '40' }
];

let postsElements = postsData.map( (posts) => <Post message={posts.message} like={posts.like} />);

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className='new-post'>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={s.postsItem}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;