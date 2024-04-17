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
    cargo varchar(50));
    
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

CREATE TABLE maquina(
	id INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(20),
	numSerie int,
	minCPU float,
    minDISCO float,
    minRAM float,
    
    maxCPU float,
    maxDISCO float,
    maxRAM float,
    
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

insert into maquina values
(null, 'dell', 1212, 90.0, 80.0, 95.0, 20.0, 30.0, 40.0, 1),
(null, 'dell', 1513, 94.0, 87.0, 90.0, 20.0, 30.0, 40.0, 1),
(null, 'acer', 1010, 89.0, 84.5, 92.4, 20.0, 30.0, 40.0, 1);
    
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

    select * from empresa;
    select * from funcionario;
    select * from maquina;
    select * from monitoramento;
    -- drop database cyberwise;