import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Aleksan'},
        {id: 2, name: 'Serge'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Givi'},
        {id: 5, name: 'Yuliia'},
        {id: 6, name: 'Jon'},
        {id: 7, name: 'Valera'},
        {id: 8, name: 'Kristina'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Fuck you'},
        {id: 3, message: 'How are do you do'},
        {id: 4, message: 'Bye'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElement }
            </div>
        </div>
    );

}


export default Dialogs;