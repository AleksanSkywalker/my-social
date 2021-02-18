import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', like: 25},
    {id: 2, message: "I's my first post", like: 14},
    {id: 3, message: 'yo', like: 55},
    {id: 4, message: 'zaebis', like: 17},
    {id: 5, message: 'zaebis', like: 90}
]

let dialogs = [
    {id: 1, name: 'Aleksan'},
    {id: 2, name: 'Serge'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Givi'},
    {id: 5, name: 'Yuliia'},
    {id: 6, name: 'Jon'},
    {id: 7, name: 'Valera'},
    {id: 8, name: 'Kristina'},
    {id: 9, name: 'Nika'},
    {id: 10, name: 'Dragoslav'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Fuck you'},
    {id: 3, message: 'How are do you do'},
    {id: 4, message: 'Bye'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
    {id: 7, message: 'Yo'},
    {id: 8, message: 'Yo'}
]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
