from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import (
    conexao_banco_de_dados, carregar_base_de_conhecimento_do_banco, 
    find_best_match, get_answer_for_question, salvar_base_de_conhecimento_no_banco, salvar_conversa
)

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def get_response():
    print("Entrou na rota /get_response 1")
    if request.content_type == 'application/json':
        user_input = request.json.get('mensagem')
    elif request.content_type == 'application/x-www-form-urlencoded':
        user_input = request.form.get('input_usuario')
    else:
        return jsonify({"response": "Content-Type não suportado"}), 400

    print("Entrou na rota /get_response 2 ---", user_input)

    conexao = conexao_banco_de_dados()
    if not conexao:
        print("Erro ao conectar ao banco de dados")
        return jsonify({"response": "Erro ao conectar ao banco de dados"}), 500

    print("Conexão com banco de dados estabelecida")
    
    knowledge_base = carregar_base_de_conhecimento_do_banco(conexao)
    print("Base de conhecimento carregada:", knowledge_base)

    questions = [q["question"] for q in knowledge_base["questions"]]
    best_match = find_best_match(user_input, questions)
    print("Melhor correspondência encontrada:", best_match)

    if best_match:
        answer = get_answer_for_question(best_match, knowledge_base)
    else:
        answer = "Poderia me fornecer mais informações"

    print("Resposta do chatbot:", answer)

    salvar_conversa(conexao, user_input, answer)
    conexao.close()

    return jsonify({"response": answer})



@app.route('/train', methods=['POST'])
def train():
    try:
        user_input = request.json.get('mensagem')
        new_answer = request.json.get('new_answer')
        print("Treinamento recebido:", user_input, new_answer)
    except Exception as e:
        print(f"Erro ao obter JSON: {e}")
        return jsonify({"response": "Erro ao processar a solicitação JSON"}), 400

    conexao = conexao_banco_de_dados()
    if not conexao:
        print("Erro ao conectar ao banco de dados")
        return jsonify({"response": "Erro ao conectar ao banco de dados"}), 500

    print("Conexão com banco de dados estabelecida para treinamento")
    
    knowledge_base = carregar_base_de_conhecimento_do_banco(conexao)
    print("Base de conhecimento antes do treinamento:", knowledge_base)

    knowledge_base["questions"].append({"question": user_input, "answer": new_answer})
    salvar_base_de_conhecimento_no_banco(conexao, {"questions": [{"question": user_input, "answer": new_answer}]})
    print("Nova base de conhecimento:", knowledge_base)

    conexao.close()
    return jsonify({"response": "Obrigado! Eu aprendi uma nova resposta :)"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)  
