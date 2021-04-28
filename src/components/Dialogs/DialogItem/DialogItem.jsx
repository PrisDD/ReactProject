import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            {/* to='/dialogs/1'  используя dialogs мы остаемся на Rout диалогов и меняем только url */}
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.dialogActive}> {props.name} </NavLink>
        </div>
    );
}

export default DialogItem;