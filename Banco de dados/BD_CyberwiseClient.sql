CREATE DATABASE CyberwiseClient;

USE CyberwiseClient;

CREATE TABLE historicoLocal(
idMaquina INT,
criticidade VARCHAR(20),
data_hora DATETIME,
componente VARCHAR(30)
);

SELECT * FROM historicoLocal;

-- DROP DATABASE CyberwiseClient;