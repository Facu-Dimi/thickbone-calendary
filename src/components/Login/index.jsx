import styles from "./login.module.css"
import React from "react"


export function Login () {
    return(
        <div className={styles.logdiv}>
            <div className={styles.inpform}>
            <form action="">
                <input type="text" id="mail" name="mail" placeholder="Mail" className={styles.inputs}/><br></br>
                <input type="password" id="clave" name="clave" placeholder="Contraseña" className={styles.inputs}/>
            </form>
            </div>
            <div className={styles.butform}>
                <form action="">
                    <input type="submit" value={"Iniciar Sesion"} id="submit" className={styles.buttons}/><br></br>
                    <a href="/Register">
                    <input type="button" value={"Registrarse"} id="button" className={styles.buttons}/><br></br>
                    </a>
                </form>
            </div>
        </div>
    )


}

