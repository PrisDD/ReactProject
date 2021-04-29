import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            {/* to='/dialogs/1'  используя dialogs мы остаемся на Rout диалогов и меняем только url */}
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.dialogActive}> 
            <img src='https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png'/>
            {props.name} </NavLink>
        </div>
    );
}

export default DialogItem;