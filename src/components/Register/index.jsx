import "./register.css"
import React, { Component } from "react";


class Register extends Component{

  state = {cargo: "", nombre: "", dni: "", mail: "", clave: "", perfil: ""}
  
  valueToState 


  render(){
    return (
      <div class="background">
        <pre>{JSON.stringify(this.state)}</pre>
        <div class="register">
          <legend>¿Que eres?</legend>
          <div class="cargo">
            <label class="emp">
              Empleado
              <input 
              type="radio"
              name="cargo"
              value={"empleado"}
              />
            </label>
            <label  class="emp">
              Empleador
              <input 
              type="radio"
              name="cargo"
              value={"empleador"}
              />
            </label>
          </div>
          <div class="data">
            <form action="">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo"/><br></br>
                <input type="text" id="dni" name="dni" placeholder="DNI"/><br></br>
                <input type="email" id="mail" name="mail" placeholder="Correo electronico"/><br></br>
                <input type="password" id="clave" name="clave" placeholder="Contraseña"/><br></br>
                <label class="fot" htmlFor="">Foto de perfil:</label>
                <input type="file" id="perfil" name="perfil"/>
            </form>
          </div>
          <form action="">
            <input type="button" value={"Registrarse"} id="button"/><br></br>
          </form>
        </div>
      </div>
    );
  }
  }

