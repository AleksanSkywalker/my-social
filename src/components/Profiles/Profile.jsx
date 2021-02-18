import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/Profileinfo";
// import Message from "../Dialogs/Message/Message";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    // debugger;
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} />

    </div>
}

export default Profile;