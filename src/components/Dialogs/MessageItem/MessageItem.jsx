import React from 'react';
import s from './MessageItem.module.css';


const MessageItem = (props) => {
    return (
        <div className={s.message}>
            <img src='https://static9.depositphotos.com/1682899/1155/i/600/depositphotos_11558184-stock-photo-green-check-mark.jpg' />
            {props.textMessage}
            <img src='https://i.pinimg.com/736x/a0/d2/52/a0d252d0a804ebd29338faff46925047.jpg' />
        </div>
    );
}

export default MessageItem;