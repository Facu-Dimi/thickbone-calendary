import "./register.css"
import React, { Component } from "react";


class Register extends Component{

  state = {cargo: "", nombre: "", dni: "", mail: "", clave: "", perfil: ""}

  valueToState = ({name, value}) => {
    this.setState(state => {
      return {[name]: value}
    })
  }
  
  render(){
    return (
      <div class="background">
        <div class="register">
          <legend>¿Que eres?</legend>
          <div class="cargo">
            <label class="emp">
              Empleado
              <input 
              type="radio"
              name="cargo"
              value={"empleado"}
              onChange={event => this.valueToState(event.target)}
              />
            </label>
            <label  class="emp">
              Empleador
              <input 
              type="radio"
              name="cargo"
              value={"empleador"}
              onChange={event => this.valueToState(event.target)}
              />
            </label>
          </div>
          <div class="">
            <form action="register">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo"
                onChange={event => this.valueToState(event.target)}/><br></br>
                <input type="text" id="dni" name="dni" placeholder="DNI"
                onChange={event => this.valueToState(event.target)}/><br></br>
                <input type="email" id="mail" name="mail" placeholder="Correo electronico"
                onChange={event => this.valueToState(event.target)}/><br></br>
                <input type="password" id="clave" name="clave" placeholder="Contraseña"
                onChange={event => this.valueToState(event.target)}/><br></br>
                <label class="fot" htmlFor="">Foto de perfil:</label>
                <input type="file" id="perfil" name="perfil"
                onChange={event => this.valueToState(event.target)}/>
            </form>
          </div>
          <form action="">
            <input type="button" value={"Registrarse"} id="button" onClick={() => {console.log(this.state)}}/><br></br>
          </form>
        </div>
      </div>
    );
  }
  }

export default Register;