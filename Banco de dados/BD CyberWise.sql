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
id_usuario INT PRIMARY KEY,
fotoBase64 longblob,
metadata varchar(100)
-- fk_funcionario int,
-- FOREIGN KEY (fk_funcionario) REFERENCES funcionario(id)
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
    codigoAcesso INT,
	modelo VARCHAR(20),
	status_maquina VARCHAR(20),
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

-- INSERT INTO maquina (sistemaOperacional, fabricante, NumeroSerieProcessador, ramTotal, qtdDisco, discoTotal, hostname) VALUES ('', '', '', 1, 1, 1, '');
-- UPDATE maquina SET sistemaOperacional = '', fabricante = '', NumeroSerieProcessador = '', ramTotal = 1, qtdDisco = 1, discoTotal = 1, hostname = '' WHERE id = 1;
    
CREATE TABLE monitoramento(
	cpuEmUso FLOAT,
	ramEmUso FLOAT,
	tamanhoDisponivelDisco FLOAT,
    gbEnviados DECIMAL,
    gbRecebidos DECIMAL,
    pacotesEnviados DECIMAL,
    pacotesRecebidos DECIMAL,
    fk_maquina INT,
	data_hora  datetime,
    FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);
select * from monitoramento;


CREATE TABLE alertas(
id INT PRIMARY KEY AUTO_INCREMENT,
criticidade VARCHAR(20),
data_hora datetime,
componente VARCHAR(30),
fk_maquina INT,		
FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);
-- SELECT funcionario.id, funcionario.nome, funcionario.fk_empresa, empresa.nome AS nome_empresa 
-- FROM funcionario JOIN empresa ON funcionario.fk_empresa = empresa.id WHERE email = 'davi@cyberwise.com' AND senha = 'davi602079';  
	
    select * from empresa;	
    select * from funcionario;
    select * from maquina;
    select * from monitoramento;
    select * from cargos;
    select * from parametros;
    select * from alertas;
    -- select alertas.id as id_alertas, alertas.criticidade as criticidade_alerta, maquina.modelo as modelo_maquina, maquina.numSerie as maquina_numSerie 
    -- from alertas join maquina on fk_maquina = maquina.id;
    
    -- drop database cyberwise;