import "./loginpage.css"
import React from "react";


export function LoginPage (){
    return(
        <div class="logos-login">
            <div class="logos">
            <img class="logo" src="/img/logo.png" alt="thickbone-logo"/>
            <img class="logo-name" src="/img/logo-name.webp" alt="logo-name"/>
            <img class="calendar" src="/img/calendar.png" alt="calendar"/>
            </div>
            <img  class="race" src="/img/race.jpg" alt="race"/>

            <div class="login">
                <div>
                    <img class="fondo" src="/img/fondo-login.jpg" alt="fondo" />     
                </div>
            </div>
        </div>
    )
}