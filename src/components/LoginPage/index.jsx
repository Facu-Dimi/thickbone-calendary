import styles from "./loginpage.module.css"
import React from "react";
import { Login } from "../Login";


export default function LoginPage (){
    return(
        <div className={styles.logoslogin}>
            <div className={styles.logos}>
            <img className={styles.logo} src="/img/logo.png" alt="thickbone-logo"/>
            <img className={styles.logoname} src="/img/logo-name.webp" alt="logo-name"/>
            <img className={styles.calendar} src="/img/calendar.png" alt="calendar"/>
            </div>
            <img className={styles.race} src="/img/race.jpg" alt="race"/>

            <div className={styles.background}>
            <img className={styles.fondo} src="/img/fondo-login.jpg" alt="fondo" />    
                <div className={styles.loginregister}> 
                    <Login/>

                </div>
            </div>
        </div>
    )
}