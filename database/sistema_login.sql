create database sistema_login;

use sistema_login;

create table usuario (
	id INT auto_increment primary key,
    nome VARCHAR(100) not null,
    email VARCHAR(100) not null,
    senha VARCHAR(100) not null
);