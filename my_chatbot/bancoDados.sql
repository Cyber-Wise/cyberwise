CREATE DATABASE IF NOT EXISTS chatterbot_database;

USE chatterbot_database;


CREATE TABLE IF NOT EXISTS  knowledge_base (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    answer TEXT
);

-- Inserir perguntas e respostas na tabela de base de conhecimento

INSERT INTO knowledge_base (question, answer) VALUES 
('Qual o Seu nome', 'Meu nome é chat CyberWise, estou aqui para tirar as suas dúvidas'), 

('Como você se chama', 'Meu nome é chat CyberWise, estou aqui para tirar as suas dúvidas'), 

('Quem é você', 'Meu nome é chat CyberWise, estou aqui para tirar as suas dúvidas'), 

('Como eu faço para usar o site', 'Para navegar pelo site você pode selecionar a sessão de Home e conhecer um pouco mais sobre a empresa e o serviço que oferecemos. Em seguida pode se cadastrar na sessão de ‘Cadastro’ e em seguida realizar o seu login.'), 

('como mexe no site', 'Para navegar pelo site você pode selecionar a sessão de Home e conhecer um pouco mais sobre a empresa e o serviço que oferecemos. Em seguida pode se cadastrar na sessão de ‘Cadastro’ e em seguida realizar o seu login.'), 

('não sei usar o site', 'Para navegar pelo site você pode selecionar a sessão de Home e conhecer um pouco mais sobre a empresa e o serviço que oferecemos. Em seguida pode se cadastrar na sessão de ‘Cadastro’ e em seguida realizar o seu login.'), 

('Como eu faço para usar o perfil', 'Na sessão de perfil o usuário administrador poderá ‘Adicionar Funcionários’, ‘Gerenciar Máquinas’, ‘Gerenciar Parâmetros’, além de conseguir editar as informações da sua conta.'), 

('como mexe no perfil', 'Na sessão de perfil o usuário administrador poderá ‘Adicionar Funcionários’, ‘Gerenciar Máquinas’, ‘Gerenciar Parâmetros’, além de conseguir editar as informações da sua conta.'), 

('como usa o perfil', 'Na sessão de perfil o usuário administrador poderá ‘Adicionar Funcionários’, ‘Gerenciar Máquinas’, ‘Gerenciar Parâmetros’, além de conseguir editar as informações da sua conta.'), 

('não sei usar o perfil', 'Na sessão de perfil o usuário administrador poderá ‘Adicionar Funcionários’, ‘Gerenciar Máquinas’, ‘Gerenciar Parâmetros’, além de conseguir editar as informações da sua conta.'), 

('Como funciona o gerenciamento de maquinas', 'O gerenciamento de máquinas é usado para administrar as máquinas, que você quer monitorar, no nosso sistema. Clicando em ‘Gerenciar máquinas’ você poderá cadastrar máquinas, pesquisar as máquinas cadastradas, e editá-las.'), 

('não entendi o gerenciamento de maquinas', 'O gerenciamento de máquinas é usado para administrar as máquinas, que você quer monitorar, no nosso sistema. Clicando em ‘Gerenciar máquinas’ você poderá cadastrar máquinas, pesquisar as máquinas cadastradas, e editá-las.'), 

('como gerenciar maquinas', 'O gerenciamento de máquinas é usado para administrar as máquinas, que você quer monitorar, no nosso sistema. Clicando em ‘Gerenciar máquinas’ você poderá cadastrar máquinas, pesquisar as máquinas cadastradas, e editá-las.'), 

('Como funciona o gerenciamento de funcionários', 'O gerenciamento de funcionários é usado para cadastrar os funcionários, no nosso sistema. Clicando em ‘Gerenciar funcionários’ você poderá cadastrá-los, pesquisar os funcionários cadastrados, e editá-los.'), 

('não entendi o gerenciamento de funcionários', 'O gerenciamento de funcionários é usado para cadastrar os funcionários, no nosso sistema. Clicando em ‘Gerenciar funcionários’ você poderá cadastrá-los, pesquisar os funcionários cadastrados, e editá-los.'), 

('como gerenciar funcionários', 'O gerenciamento de funcionários é usado para cadastrar os funcionários, no nosso sistema. Clicando em ‘Gerenciar funcionários’ você poderá cadastrá-los, pesquisar os funcionários cadastrados, e editá-los.'), 

('Como funciona o gerenciamento de parâmetros', 'Como padrão, ao criar o seu perfil na nossa plataforma, nós já estabelecemos um valor de parâmetro padrão para os seus componentes. Se você quiser criar um modelo de parâmetro personalizado para colocar nas suas máquinas, basta ir até o seu perfil e selecionar ‘Gerenciar parâmetros’, lá você poderá adicionar um parâmetro, pesquisar por algum já existente, ou editá-lo caso tenha necessidade.'), 

('não entendi o gerenciamento de parâmetros', 'Como padrão, ao criar o seu perfil na nossa plataforma, nós já estabelecemos um valor de parâmetro padrão para os seus componentes. Se você quiser criar um modelo de parâmetro personalizado para colocar nas suas máquinas, basta ir até o seu perfil e selecionar ‘Gerenciar parâmetros’, lá você poderá adicionar um parâmetro, pesquisar por algum já existente, ou editá-lo caso tenha necessidade.'), 

('como gerenciar parâmetros', 'Como padrão, ao criar o seu perfil na nossa plataforma, nós já estabelecemos um valor de parâmetro padrão para os seus componentes. Se você quiser criar um modelo de parâmetro personalizado para colocar nas suas máquinas, basta ir até o seu perfil e selecionar ‘Gerenciar parâmetros’, lá você poderá adicionar um parâmetro, pesquisar por algum já existente, ou editá-lo caso tenha necessidade.'); 


-- drop table conversa;
CREATE TABLE conversa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrada_usuario TEXT NOT NULL,
    resposta TEXT NOT NULL,
    data_conversa TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM knowledge_base;

SELECT * FROM conversa;
truncate table conversa;
-- truncate table knowledge_base;


SELECT * FROM conversa where resposta = "Poderia me fornecer mais informações";

-- drop database chatterbot_database;