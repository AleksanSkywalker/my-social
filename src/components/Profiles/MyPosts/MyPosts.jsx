import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {NavLink} from "react-router-dom";

const MyPosts = (props) => {

    let posts = [
        {id: 0, message: 'Hi, how are you?', like: 25},
        {id: 1, message: "I's my first post", like: 14},
        {id: 2, message: 'yo', like: 0},
        {id: 3, message: 'zaebis', like: 17},
    ]

    let postsElements = posts.map(p => <Post message={p.message} like={p.like}/>);


    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.textbar}>
                    <textarea>Enter your text</textarea>
                </div>
                <div className={s.item}>
                    <button>Add post</button>
                    <button>Clean</button>
                </div>
            </div>
            {postsElements}


        </div>
    )


}

export default MyPosts;