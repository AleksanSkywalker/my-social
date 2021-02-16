import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return (
        <div className={s.item}>

            <div className={s.text}>
                <img src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'/>
                { props.message }
            </div>
            <div className={s.like}>
               <span>
                   { props.like }
                   Like
               </span>
            </div>
        </div>

    )

}
export default Post;