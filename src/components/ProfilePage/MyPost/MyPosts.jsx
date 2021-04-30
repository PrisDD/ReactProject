import React from 'react';
import Post from './Post/Post';
import s from '../MyPost/MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.postsData.map((posts) => <Post message={posts.message} like={posts.like} />);

    let newPostElement = React.createRef();

    let send = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);


    }

    return (
        <div className={s.posts}>
            <div className='new-post'>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={send} >Send</button>
                </div>
            </div>
            <div className={s.postsItem}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;