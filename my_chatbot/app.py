from flask import Flask, request, jsonify, render_template
from utils import conexao_banco_de_dados, carregar_base_de_conhecimento_do_banco, find_best_match, get_answer_for_question, salvar_base_de_conhecimento_no_banco, salvar_conversa

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form['input_usuario']
    conexao = conexao_banco_de_dados()
    if conexao:
        knowledge_base = carregar_base_de_conhecimento_do_banco(conexao)
        best_match = find_best_match(user_input, [q["question"] for q in knowledge_base["questions"]])

        if best_match:
            answer = get_answer_for_question(best_match, knowledge_base)
        else:
            answer = "Poderia me fornecer mais informações"

        salvar_conversa(conexao, user_input, answer)
        conexao.close()
    else:
        answer = "Erro ao conectar ao banco de dados"
    
    return jsonify({"response": answer})

@app.route('/train', methods=['POST'])
def train():
    user_input = request.form['input_usuario']
    new_answer = request.form['new_answer']

    conexao = conexao_banco_de_dados()
    if conexao:
        knowledge_base = carregar_base_de_conhecimento_do_banco(conexao)
        knowledge_base["questions"].append({"question": user_input, "answer": new_answer})
        salvar_base_de_conhecimento_no_banco(conexao, {"questions": [{"question": user_input, "answer": new_answer}]})
        conexao.close()
        return jsonify({"response": "Obrigado! Eu aprendi uma nova resposta :)"})
    else:
        return jsonify({"response": "Erro ao conectar ao banco de dados"})

if __name__ == '__main__':
    app.run(debug=True)
