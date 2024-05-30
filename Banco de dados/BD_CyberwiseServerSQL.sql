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

CREATE TABLE cargos (
    id INT PRIMARY KEY IDENTITY(1,1),
    cargo VARCHAR(50)
);
GO

INSERT INTO cargos (cargo) VALUES
('Administrador'),
('Gerente'),
('Funcionário');
GO

CREATE TABLE funcionario (
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

CREATE TABLE fotoPerfil (
   idFoto INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	id_usuario INT,
	fotoBase64 longblob,
	metadata varchar(100),
	 FOREIGN KEY (id_usuario) REFERENCES funcionario(id)
);
GO

CREATE TABLE parametros (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(30),
    alertaCPU DECIMAL(18,2),
    criticoCPU DECIMAL(18,2),
    alertaDISCO DECIMAL(18,2),
    criticoDISCO DECIMAL(18,2),
    alertaRAM DECIMAL(18,2),
    criticoRAM DECIMAL(18,2),
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);
GO

SELECT * FROM parametros;
GO

CREATE TABLE maquina (
    id INT PRIMARY KEY IDENTITY(1,1),
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
GO

CREATE TABLE monitoramento (
    status_maquina VARCHAR(10),
    cpuEmUso FLOAT,
    ramEmUso FLOAT,
    tamanhoEmUsoDisco FLOAT,
    gbEnviados DECIMAL(18,2),
    gbRecebidos DECIMAL(18,2),
    pacotesEnviados DECIMAL(18,2),
    pacotesRecebidos DECIMAL(18,2),
    fk_maquina INT,
    data_hora DATETIME,
    FOREIGN KEY (fk_maquina) REFERENCES maquina(id)
);
GO

SELECT * FROM monitoramento;
GO

CREATE TABLE alertas (
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
SELECT * FROM cargos;
SELECT * FROM parametros;
SELECT * FROM monitoramento;
SELECT * FROM alertas;
GO

INSERT INTO monitoramento (status_maquina, fk_maquina) VALUES ('Sla', 1);
GO

-- TRUNCATE TABLE monitoramento;
-- TRUNCATE TABLE alertas;


-- DROP DATABASE cyberwise;
GO
