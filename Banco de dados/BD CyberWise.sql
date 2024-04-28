CREATE DATABASE cyberwise;

USE cyberwise;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    telefone char(9),
    cnpj char(11)
	);
    
insert into empresa values
(null, 'CyberWise', '119845382', '12345678912');

CREATE TABLE cargos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cargo varchar(50)
    );
    
    insert into cargos (cargo) values
    ('Administrador'),
    ('Gerente');
    
    
CREATE TABLE funcionario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_empresa INT,
    fk_cargo int,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    FOREIGN KEY (fk_cargo) REFERENCES cargos(id)
);

insert into funcionario values
(null, 'davi', 'davi@cyberwise', 'senha123', 1, 1),
(null, 'joao', 'joao@cyberwise', 'senha12', 1, 2);

CREATE TABLE parametros(
id INT PRIMARY KEY AUTO_INCREMENT,
alertaCPU VARCHAR(20),
criticoCPU VARCHAR(20),
alertaDISCO VARCHAR(20),
criticoDISCO VARCHAR(20),
alertaRAM VARCHAR(20),
criticoRAM VARCHAR(20)
);

insert into parametros values
(null, 50, 70, 60, 80, 60, 80);

CREATE TABLE maquina(
	id INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(20),
	numSerie int,
	fk_parametros INT,
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    FOREIGN KEY (fk_parametros) REFERENCES parametros(id)
);

insert into maquina values
(null, 'dell', 1212, 1, 1),
(null, 'dell', 1513, 1, 1),
(null, 'acer', 1010, 1, 1);
    
CREATE TABLE monitoramento(
	dadosCPU FLOAT,
	dadosRAM FLOAT,
	dadosDISCO FLOAT,
    dadosREDE FLOAT,
    fk_maquina INT,
	data_hora datetime,
    FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);

insert into monitoramento values
(56.0, 70.0, 67.0, 54, 1, CURRENT_TIMESTAMP);

CREATE TABLE alertas(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(20),
data_hora datetime,
componente VARCHAR(30),
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);



    select * from empresa;
    select * from funcionario;
    select * from maquina;
    select * from monitoramento;
    -- drop database cyberwise;