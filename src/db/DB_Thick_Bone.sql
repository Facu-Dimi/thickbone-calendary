SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS DB_Thick_Bone;
CREATE SCHEMA DB_Thick_Bone;
USE DB_Thick_Bone;

create table Empleador(
ID Int(5) Not Null Auto_Increment,
Nombre_Completo Varchar(30) Not NULL ,
DNI INT(9) Not NULL,
Correo_Electronico Varchar(20) Not NULL,
Contraseña Varchar(20) Not NULL,
Numero_de_Telefono INT(15) Not NULL,
Cargo VARCHAR(50) Not NULL,
Antiguedad INT(2) Not NULL,
Vacaciones_Disponibles int(4) Not NULL,
Foto Varchar(60) Not NULL,
ID_Calendario int(30) Not NULL,
Primary Key (ID),
Foreign Key (ID_Calendario) references Calendario(ID)
);

Create Table Empleado(
ID Int(5) Not Null Auto_Increment,
Nombre_Completo Varchar(30) Not NULL ,
DNI INT(9) Not NULL,
Correo_Electronico Varchar(20) Not NULL,
Contraseña Varchar(20) Not NULL,
Numero_de_Telefono INT(15) Not NULL,
Cargo VARCHAR(50) Not NULL,
Antiguedad INT(2) Not NULL,
Vacaciones_Disponibles INT(4) Not NULL,
Foto Varchar(60) Not NULL,
ID_Calendario int(5) Not NULL,
Primary Key (ID),
Foreign Key (ID_Calendario) references Calendario(ID)
);

Create Table Calendario(
ID INT(5) Not NULL Auto_Increment,
Dias INT(10)Not null,
Primary Key (ID)
);

Create Table Notificacion(
ID INT(5) Not NULL Auto_Increment,
Nombre_Empleado Varchar(30)Not null,
Titulo Varchar(15) Not Null,
Contenido Varchar(150)Not NULL,
ID_Empleador INT(5)Not Null,
ID_Empleado INT(5)Not NUll,
Primary Key (ID),
Foreign Key(ID_Empleador) references  Empleador(ID),
Foreign Key(ID_Empleado) references  Empleado(ID)
);

Create Table Chat(
ID INT(20) Not NULL Auto_Increment,
Contenido TEXT Not null,
ID_Empleador INT(5)Not Null,
ID_Empleado INT(5)Not NUll,
Primary Key (ID),
Foreign Key(ID_Empleador) references  Empleador(ID),
Foreign Key(ID_Empleado) references  Empleado(ID)
);

Create Table Solicitud(
ID INT(20) Not null Auto_Increment,
Nombre_Empleado Varchar(30)Not Null,
Mensaje text not null,
Dias int(10)not null,
ID_Empleador INT(5)Not Null,
ID_Empleado INT(5)Not NUll,
ID_Calendario INT(5)NOt NUll,
Primary Key (ID),
Foreign Key(ID_Empleador) references  Empleador(ID),
Foreign Key(ID_Empleado) references  Empleado(ID),
Foreign Key(ID_Calendario) references alendario(ID)
);


insert into empleado (ID, Nombre_Completo, DNI, Correo_Electronico, Contraseña, Numero_de_Telefono, Cargo, Antiguedad, Vacaciones_Disponibles, Foto, ID_Calendario)

Values(1, "Roberto Alfonso", 34657852, "", "", 1154356578, "Operador de Prensa", 20, 28, "", 1),
(2, "Tiziano Fierro", 12345678, "", "", 1123456789, "Operador de Soldadura", 5, 14, "", 1),
(3, "Matias Tinteros", 98745761, "", "", 1167829121, "Operador de Maquinaria", 8, 21, "", 1),
(4, "Miguel Fernandez", 11223344, "", "", 1198765432, "Operador de Pintura", 4, 14, "", 1),
(5, "Mar Checa", 87654321, "", "", 1109134581, "Operador de Montaje", 8, 21, "", 1),
(6, "Alberto Mateos", 83607219, "", "", 1111111111, "Operador de Robots Industriales", 6, 21, "", 1),
(7, "Maria Alejandra", 62337185, "", "", 1122222222, "Inspector de Calidad", 8, 21, "", 1),
(8, "Diego Calle", 55667788, "", "", 1133333333, "Operador de Pintura", 15, 28, "", 1),
(9, "Jaime Jimenez", 96729991, "", "", 1144444444, "Operador de Prensa", 3, 14, "", 1),
(10, "Sebastian Chaparro", 54116462, "", "", 1155555555, "Operador de Maquinaria", 21, 35, "", 1);

