import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

let dialogsElements = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
// let avaElements = props.state.avaData.map((ava) => <DialogItem imgAva={ava.imgAva} id={ava.id} />)


let messageElements = props.state.messageData.map((text) => <MessageItem textMessage={text.textMessage} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;