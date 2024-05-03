CREATE DATABASE cyberwise;

USE cyberwise;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    telefone char(15),
    cnpj char(18)
	);
    
   -- SELECT COUNT(*) AS total_registros FROM empresa;
    
insert into empresa values
(null, 'CyberWise', '119845382', '12345678912');

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


insert into funcionario values
(null, 'davi', 'davi@cyberwise', 'senha123', 1, 1),
(null, 'joao', 'joao@cyberwise', 'senha12', 1, 2);

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

insert into parametros values
(null, 'parametro1', 50, 70, 60, 80, 60, 80, 1);

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
(null, 'Dell', 1212, 1, 1),
(null, 'Dell', 1414, 1, 1),
(null, 'Dell', 1545, 1, 1),
(null, 'Acer', 3434, 1, 1),
(null, 'Positivo', 2232, 1, 1),
(null, 'Lg', 3232, 1, 1);

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

insert into monitoramento values
(80, 90, 70, 50, 1, CURRENT_TIMESTAMP),
(60, 70, 60, 50, 2, CURRENT_TIMESTAMP),
(40, 30, 30, 50, 3, CURRENT_TIMESTAMP),
(90, 30, 40, 50, 4, CURRENT_TIMESTAMP),
(90, 80, 40, 50, 5, CURRENT_TIMESTAMP),
(50, 60, 60, 50, 6, CURRENT_TIMESTAMP);

CREATE TABLE alertas(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(20),
data_hora datetime,
componente VARCHAR(30),
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);

SELECT 
    funcionario.id, 
    funcionario.nome, 
    funcionario.email, 
    funcionario.fk_empresa,
    empresa.nome AS nome_empresa,
    cargos.cargo AS nome_cargo
FROM 
    funcionario
JOIN 
    empresa ON funcionario.fk_empresa = empresa.id
JOIN 
    cargos ON funcionario.fk_cargo = cargos.id
WHERE 
    funcionario.email = 'davi.mendonca@sptech.school' AND funcionario.senha = '222';



    select * from empresa;	
    select * from funcionario;
    select * from maquina;
    select * from monitoramento;
    select * from cargos;
    select * from parametros;
    
    -- drop database cyberwise;