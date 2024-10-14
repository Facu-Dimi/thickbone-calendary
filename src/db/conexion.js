let mysql = require("mysql2")

export let conexion = mysql.createConnection({
    host: "localhost",
    database: "db_thick_bone",
    user: "root",
    password: "123456"
})


conexion.connect(function(err){
    if(err){
        throw err
    }
    else{
        console.log("conexion exitosa")
    }
})


const verificacion = (registro) => {
    return `SELECT * FROM ${registro.tipo} WHERE DNI = ${registro.dni}`
}

//{clave: "pansito", dni: "12345678", mail: "tizi@gmail.com", nombre: "Tiziano Fierro", tipo: "empleado"}

conexion.query(verificacion(), function(err, lista){
    if(err){
        throw err
    }
    else{
        console.log(lista)
    }
})



conexion.end()
