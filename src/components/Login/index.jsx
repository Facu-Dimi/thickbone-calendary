import "./login.css"
import React from "react"


export function Login () {
    return(
        <div class="log-div">
            <div class="inputs">
            <form action="">
                <input type="text" id="mail" name="mail" placeholder="Mail"/><br></br>
                <input type="password" id="clave" name="clave" placeholder="Contraseña"/>
            </form>
            </div>
            <div class="buttons">
                <form action="">
                    <input type="submit" value={"Iniciar Sesion"} id="submit"/><br></br>
                    <a href="/Register">
                    <input type="button" value={"Registrarse"} id="button" /><br></br>
                    </a>
                </form>
            </div>
        </div>
    )


}

