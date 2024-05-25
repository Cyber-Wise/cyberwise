-- Criar o banco de dados
CREATE DATABASE cyberwise;
GO

USE cyberwise;
GO

CREATE TABLE empresa (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
    telefone CHAR(11),
    cnpj CHAR(14)
);
GO

CREATE TABLE cargos(
	id INT PRIMARY KEY IDENTITY(1,1),
    cargo VARCHAR(50)
);
GO

INSERT INTO cargos (cargo) VALUES
('Administrador'),
('Gerente'),
('Funcionário');
GO

CREATE TABLE funcionario(
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_empresa INT,
    fk_cargo INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    FOREIGN KEY (fk_cargo) REFERENCES cargos(id)
);
GO

CREATE TABLE fotoPerfil(
id_usuario INT PRIMARY KEY,
fotoBase64 VARBINARY(MAX),
metadata VARCHAR(100)
-- fk_funcionario INT,
-- FOREIGN KEY (fk_funcionario) REFERENCES funcionario(id)
);
GO

CREATE TABLE parametros(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(30),
alertaCPU VARCHAR(20),
criticoCPU VARCHAR(20),
alertaDISCO VARCHAR(20),
criticoDISCO VARCHAR(20),
alertaRAM VARCHAR(20),
criticoRAM VARCHAR(20),
 fk_empresa INT,
FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);
GO

SELECT * FROM parametros;
GO

CREATE TABLE maquina(
	id INT PRIMARY KEY IDENTITY(1,1),
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
GO

CREATE TABLE monitoramento(
	cpuEmUso FLOAT,
	ramEmUso FLOAT,
	tamanhoDisponivelDisco FLOAT,
    gbEnviados DECIMAL(18, 2),
    gbRecebidos DECIMAL(18, 2),
    pacotesEnviados DECIMAL(18, 2),
    pacotesRecebidos DECIMAL(18, 2),
    fk_maquina INT,
	data_hora DATETIME,
    FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);
GO

SELECT * FROM monitoramento;
GO

CREATE TABLE alertas(
id INT PRIMARY KEY IDENTITY(1,1),
criticidade VARCHAR(20),
data_hora DATETIME,
componente VARCHAR(30),
fk_maquina INT,		
FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);
GO

SELECT * FROM empresa;
SELECT * FROM funcionario;
SELECT * FROM maquina;
SELECT * FROM monitoramento;
SELECT * FROM cargos;
SELECT * FROM parametros;
SELECT * FROM alertas;

-- SELECT funcionario.id, funcionario.nome, funcionario.fk_empresa, empresa.nome AS nome_empresa 
-- FROM funcionario 
-- JOIN empresa ON funcionario.fk_empresa = empresa.id 
-- WHERE email = 'davi@cyberwise.com' AND senha = 'davi602079';

-- SELECT alertas.id AS id_alertas, alertas.criticidade AS criticidade_alerta, 
-- maquina.modelo AS modelo_maquina, maquina.NumeroSerieProcessador AS maquina_numSerie 
-- FROM alertas 
-- JOIN maquina ON alertas.fk_maquina = maquina.id;

-- DROP DATABASE cyberwise;
