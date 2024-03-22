
-- banco cyberwise

CREATE DATABASE cyberwise;

USE cyberwise;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cnpj INT,
    funcionarios INT
	);
insert into empresa values
(null, 'CyberWise', 1234567, 5);
    
CREATE TABLE funcionario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_empresa INT,
    cargo VARCHAR(50),
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);
insert into funcionario values
(null, 'davi', 'davi@cyberwise', 'senha123', 1, 'gestor'),
(null, 'joao', 'joao@cyberwise', 'senha12', 1, 'analista');

CREATE TABLE maquina(
	id INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(20),
	numSerie int,
  --  minCPU float,
   -- minDISCO float,
  --  minRAM float,
    maxCPU float,
    maxDISCO float,
    maxRAM float,
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

insert into maquina values
(null, 'dell', 1212, 90.0, 80.0, 95.0, 1),
(null, 'dell', 1513, 94.0, 87.0, 90.0, 1),
(null, 'acer', 1010, 89.0, 84.5, 92.4, 1);
    
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



/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE empresa (
	id INT PRIMARY KEY IDENTITY(1,1),
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT FOREIGN KEY REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300),
	fk_empresa INT FOREIGN KEY REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
