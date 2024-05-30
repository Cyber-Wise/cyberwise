CREATE DATABASE cyberwise;

USE cyberwise;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    telefone char(11),
    cnpj char(14)
	);
    

CREATE TABLE cargos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    cargo varchar(50)
    );
    
    insert into cargos (cargo) values
    ('Administrador'),
    ('Gerente'),
    ('Funcionário');
    
    
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

CREATE TABLE fotoPerfil(
idFoto INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
id_usuario INT,
fotoBase64 longblob,
metadata varchar(100),
 FOREIGN KEY (id_usuario) REFERENCES funcionario(id)
);

CREATE TABLE parametros(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30),
alertaCPU DECIMAL,
criticoCPU DECIMAL,
alertaDISCO DECIMAL,
criticoDISCO DECIMAL,
alertaRAM DECIMAL,
criticoRAM DECIMAL,
 fk_empresa int,
FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

select * from parametros;

CREATE TABLE maquina(
	id INT PRIMARY KEY AUTO_INCREMENT,
    codigoAcesso INT,
	modelo VARCHAR(20),
    sistemaOperacional VARCHAR(50),
    fabricante VARCHAR(50),
    NumeroSerieProcessador VARCHAR(100),
    ramTotal VARCHAR(20),
	qtdDisco VARCHAR(20),
    discoTotal VARCHAR(20),
	hostname VARCHAR(50),
	fk_parametros INT,
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    FOREIGN KEY (fk_parametros) REFERENCES parametros(id)
);

CREATE TABLE monitoramento(
	status_maquina VARCHAR(10),
	cpuEmUso DECIMAL,
	ramEmUso DECIMAL,
	tamanhoEmUsoDisco FLOAT,
    gbEnviados DECIMAL,
    gbRecebidos DECIMAL,
    pacotesEnviados DECIMAL,
    pacotesRecebidos DECIMAL,
    fk_maquina INT,
	data_hora  datetime,
    FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);

CREATE TABLE alertas(
id INT PRIMARY KEY AUTO_INCREMENT,
criticidade VARCHAR(20),
data_hora datetime,
componente VARCHAR(30),
fk_maquina INT,		
FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);

    select * from empresa;	
    select * from funcionario;
    select * from maquina;
    select * from cargos;
    select * from parametros;
	select * from monitoramento;
    select * from alertas;
    -- drop database cyberwise;