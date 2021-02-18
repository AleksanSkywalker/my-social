import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.like}
            </div>
        </div>
    );
}

export default Post;