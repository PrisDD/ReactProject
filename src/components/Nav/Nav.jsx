import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
            {/* <div className={`${s.item} ${s.active}`}> */}
                {/* для 2 классов */}
                <NavLink to='/profile' activeClassName={s.active}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}> Messages </NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/news' activeClassName={s.active}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}> Settings </NavLink>
            </div>
        </nav>
    );
}

export default Nav;