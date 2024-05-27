CREATE DATABASE IF NOT EXISTS chatterbot_database;

USE chatterbot_database;


CREATE TABLE IF NOT EXISTS  knowledge_base (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    answer TEXT
);


drop table conversa;
CREATE TABLE conversa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrada_usuario TEXT NOT NULL,
    resposta TEXT NOT NULL,
    data_conversa TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM knowledge_base;

SELECT * FROM conversa;



SELECT * FROM conversa where resposta = "Poderia me fornecer mais informações";

