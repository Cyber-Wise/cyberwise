from utils import conexao_banco_de_dados, carregar_base_de_conhecimento_do_banco, find_best_match, get_answer_for_question, salvar_base_de_conhecimento_no_banco

def chat_bot():
    conexao = conexao_banco_de_dados()
    if conexao:
        # Carregar a base de conhecimento do banco de dados
        knowledge_base = carregar_base_de_conhecimento_do_banco(conexao)

        while True:
            user_input = input('Você: ')

            if user_input.lower() == 'sair':
                break

            # Encontrar a melhor correspondência para a pergunta do usuário
            best_match = find_best_match(user_input, [q["question"] for q in knowledge_base["questions"]])

            if best_match:
                # Obter a resposta correspondente
                answer = get_answer_for_question(best_match, knowledge_base)
                print(f'Bot: {answer}')
            else:
                print('Bot: Eu não sei a resposta, poderia me ensinar')
                new_answer = input('Digite a resposta ou "pular" para pular: ')

                if new_answer.lower() != 'pular':
                    # Adicionar a nova pergunta e resposta à base de conhecimento local e no banco de dados
                    knowledge_base["questions"].append({"question": user_input, "answer": new_answer})
                    salvar_base_de_conhecimento_no_banco(conexao, {"questions": [{"question": user_input, "answer": new_answer}]})
                    print('Bot: Obrigado! Eu aprendi uma nova resposta :)')

        conexao.close()

if __name__ == '__main__':
    chat_bot()
