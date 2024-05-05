CREATE DATABASE IF NOT EXISTS chatterbot_database;

USE chatterbot_database;

CREATE TABLE IF NOT EXISTS conversation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pergunta TEXT,
    resposta TEXT,
    data_inicio timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    );


select* from conversation;
