CREATE DATABASE IF NOT EXISTS chatterbot_database;

USE chatterbot_database;


CREATE TABLE IF NOT EXISTS  knowledge_base (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    answer TEXT
);

-- Inserir perguntas e respostas na tabela de base de conhecimento

INSERT INTO knowledge_base (question, answer) VALUES 
('Qual é a sua missão?', 'Nossa missão é fornecer soluções inovadoras para os desafios enfrentados pelos nossos clientes.'),
('Como posso entrar em contato com o suporte técnico?', 'Você pode entrar em contato com nosso suporte técnico ligando para o número XXX-XXXX ou enviando um e-mail para suporte@exemplo.com.'),
('Quais são os benefícios do seu produto/serviço?', 'Alguns dos benefícios incluem aumento da eficiência, redução de custos e melhor experiência do usuário.'),
('Como faço para fazer um pedido?', 'Você pode fazer um pedido diretamente em nosso site ou entrar em contato conosco para obter assistência.'),
('Quanto tempo leva para receber minha encomenda?', 'O tempo de entrega depende do seu local e do método de envio escolhido. Normalmente, leva de X a Y dias úteis.'),
('Vocês oferecem garantia para os produtos?', 'Sim, todos os nossos produtos vêm com uma garantia de um ano contra defeitos de fabricação.'),
('Como posso cancelar minha assinatura?', 'Para cancelar sua assinatura, entre em sua conta em nosso site e siga as instruções de cancelamento.'),
('Vocês aceitam devoluções?', 'Sim, aceitamos devoluções dentro de um período de 30 dias após a compra. Consulte nossa política de devolução para obter mais detalhes.');


-- drop table conversa;
CREATE TABLE conversa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrada_usuario TEXT NOT NULL,
    resposta TEXT NOT NULL,
    data_conversa TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM knowledge_base;

SELECT * FROM conversa;
-- truncate table conversa;
-- truncate table knowledge_base;


SELECT * FROM conversa where resposta = "Poderia me fornecer mais informações";
-- drop database chatterbot_database; 
