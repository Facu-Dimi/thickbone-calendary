import styles from "./register.module.css"
import React, { Component } from "react";


class Register extends Component{

  state = {tipo: "", nombre: "", dni: "", mail: "", clave: "", perfil: ""}

  error = ''

  valueToState = ({name, value}) => {
    this.setState(state => {
      return {[name]: value}
    })
  }


  async fetchUsuario(tipo){
    if (tipo === 'empleado'){
      try{
        const response = await fetch('http://localhost:3001/api/empleados')
        if (!response.ok){
          throw new Error('Error al obtener los datos del servidor!')
        }

        const data = await response.json()
        return data
      }
      catch(error){
        console.log('Error al obtener los empleados!')
      }
    }
      if(tipo === 'empleador'){
        try{
          const response = await fetch('http://localhost:3001/api/empleadores')
          if (!response.ok){
            throw new Error('Error al obtener los datos del servidor!')
          }

          const data = await response.json()
          return data

        }
        catch(error){
          console.log('Error al obtener los empleadores!')
        }
      }
  }

  async checkUsuario(usuario){
    let usersList = await this.fetchUsuario(usuario.tipo)
    console.log(usersList)

    for (let user in usersList){
      if (usersList[user].Nombre_Completo === usuario.nombre && usersList[user].DNI === parseInt(usuario.dni)){
        console.log(usersList[user])
        return usersList[user]
      }
    }

    this.error = 'Nombre y/o DNI incorrectos'
    
  }


  


  render(){
    return (
      <div className={styles.background}>
        <div className={styles.register}>
          <legend>¿Que eres?</legend>
          <div className={styles.tipo}>
            <label className={styles.emp}>
              Empleado
              <input 
              type="radio"
              name="tipo"
              value={"empleado"}
              onChange={event => this.valueToState(event.target)}
              />
            </label>
            <label  className={styles.emp}>
              Empleador
              <input 
              type="radio"
              name="tipo"
              value={"empleador"}
              onChange={event => this.valueToState(event.target)}
              />
            </label>
          </div>
          <div class="">
            <form action="register">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo" className={styles.inputs}
                onChange={event => this.valueToState(event.target)}/><br></br>
                <input type="text" id="dni" name="dni" placeholder="DNI" className={styles.inputs}
                onChange={event => this.valueToState(event.target)}/><br></br>
                <input type="email" id="mail" name="mail" placeholder="Correo electronico" className={styles.inputs}
                onChange={event => this.valueToState(event.target)}/><br></br>
                <input type="password" id="clave" name="clave" placeholder="Contraseña" className={styles.inputs}
                onChange={event => this.valueToState(event.target)}/><br></br>
                <label className={styles.fot}>Foto de perfil:</label>
                <input type="file" id="perfil" name="perfil" className={styles.perfil}
                onChange={event => this.valueToState(event.target)}/>
            </form>
          </div>
          <form action="">
            <input type="button" value={"Registrarse"} id="button" className={styles.button} onClick={() => {console.log(this.state)
               this.checkUsuario(this.state)
            }}/><br></br>
          </form>
          <h1>{this.error}</h1>
        </div>
      </div>
    );
  }
  }

export default Register;