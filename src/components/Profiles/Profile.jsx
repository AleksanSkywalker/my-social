import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/Profileinfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {


    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Profile;