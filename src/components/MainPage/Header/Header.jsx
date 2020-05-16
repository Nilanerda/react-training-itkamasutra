import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.appHeader}>
            <div className={styles.innerContainer}>
                <div className={styles.logoArea}>
                    <NavLink to="/profile"></NavLink>
                </div>
                <div className={styles.loginArea}>
                    {props.isAuthorized
                        ? <NavLink to="/profile">{props.login}</NavLink>
                        : <NavLink to="/auth">Sign In</NavLink>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header