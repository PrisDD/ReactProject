import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

let dialogsData = [
    { id: 1, name: 'Tina' },
    { id: 2, name: 'Ann' },
    { id: 3, name: 'Mari' },
    { id: 4, name: 'Margo' },
    { id: 5, name: 'Lena' },
    { id: 6, name: 'Dar' }
];


let messageData = [
    { id: 1, textMessage: 'Hello' },
    { id: 2, textMessage: 'hi' },
    { id: 3, textMessage: 'woow' },
    { id: 4, textMessage: 'no...' },
    { id: 5, textMessage: 'Lena,hi!' },
    { id: 6, textMessage: 'Hi, hau?' }
];

// все обьекты со строк 7-12 записаны в 
let dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

// [
//     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
//     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
// ]


let messageElements = messageData.map((text) => <MessageItem textMessage={text.textMessage} />);

/* <MessageItem textMessage={messageData[0].textMessage} />
                <MessageItem textMessage={messageData[1].textMessage} />
                <MessageItem textMessage={messageData[2].textMessage} />
*/

const Dialogs = (props) => {
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