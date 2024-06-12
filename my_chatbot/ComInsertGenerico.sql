-- Criar banco de dados se não existir
IF DB_ID('chatterbot_database') IS NULL
BEGIN
    CREATE DATABASE chatterbot_database;
END
GO

-- Usar o banco de dados chatterbot_database
USE chatterbot_database;
GO

-- Criar tabela de base de conhecimento se não existir
IF OBJECT_ID('knowledge_base', 'U') IS NULL
BEGIN
    CREATE TABLE knowledge_base (
        id INT IDENTITY(1,1) PRIMARY KEY,
        question TEXT,
        answer TEXT
    );
END
GO

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
GO

-- Criar tabela de conversa se não existir
IF OBJECT_ID('conversa', 'U') IS NULL
BEGIN
    CREATE TABLE conversa (
        id INT IDENTITY(1,1) PRIMARY KEY,
        entrada_usuario TEXT NOT NULL,
        resposta TEXT NOT NULL,
        data_conversa DATETIME DEFAULT CURRENT_TIMESTAMP
    );
END
GO

-- Selecionar todos os registros da tabela knowledge_base
SELECT * FROM knowledge_base;
GO

-- Selecionar todos os registros da tabela conversa
SELECT * FROM conversa;
GO

-- Limpar todos os registros da tabela conversa
-- TRUNCATE TABLE conversa;
-- GO

-- Limpar todos os registros da tabela knowledge_base
-- TRUNCATE TABLE knowledge_base;
-- GO

-- Selecionar registros da tabela conversa onde a resposta é igual a "Poderia me fornecer mais informações"
SELECT * FROM conversa WHERE resposta = 'Poderia me fornecer mais informações';
GO

-- Excluir o banco de dados chatterbot_database
-- DROP DATABASE chatterbot_database;
GO
