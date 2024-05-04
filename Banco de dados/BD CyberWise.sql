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




CREATE TABLE parametros(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30),
alertaCPU VARCHAR(20),
criticoCPU VARCHAR(20),
alertaDISCO VARCHAR(20),
criticoDISCO VARCHAR(20),
alertaRAM VARCHAR(20),
criticoRAM VARCHAR(20),
 fk_empresa int,
FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);


select * from parametros;

CREATE TABLE maquina(
	id INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(20),
	numSerie int,
	fk_parametros INT,
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    FOREIGN KEY (fk_parametros) REFERENCES parametros(id)
);



-- INSERT INTO maquina (numSerie)
-- SELECT 1212
-- WHERE NOT EXISTS (
   --  SELECT 1 FROM maquina WHERE numSerie = 1212
-- );
    
CREATE TABLE monitoramento(
	cpuEmUso FLOAT,
	ramDisponivel FLOAT,
	tamanhoDisponivelDisco FLOAT,
    dadosREDE FLOAT,
    fk_maquina INT,
	data_hora  datetime,
    FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);
select * from monitoramento;


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
    select * from cargos;
    select * from parametros;
    
    -- drop database cyberwise;