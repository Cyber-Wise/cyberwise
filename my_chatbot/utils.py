import json
from difflib import get_close_matches
import mysql.connector

def conexao_banco_de_dados():
    try:
        conexao = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="melancia",
            database="chatterbot_database"
        )
        return conexao
    except mysql.connector.Error as err:
        print(f"Erro ao conectar ao banco de dados: {err}")
        return None

def carregar_base_de_conhecimento_do_banco(conexao) -> dict:
    try:
        cursor = conexao.cursor(dictionary=True)
        cursor.execute("SELECT question, answer FROM knowledge_base")
        resultado = cursor.fetchall()
        cursor.close()
        return {"questions": resultado}
    except mysql.connector.Error as err:
        print(f"Erro ao carregar a base de conhecimento do banco de dados: {err}")
        return {"questions": []}

def salvar_base_de_conhecimento_no_banco(conexao, dado):
    try:
        cursor = conexao.cursor()
        for q in dado["questions"]:
            question = q["question"]
            answer = q["answer"]
            cursor.execute("INSERT INTO knowledge_base (question, answer) VALUES (%s, %s)", (question, answer))
        conexao.commit()
        cursor.close()
        print("Base de conhecimento salva no banco de dados com sucesso!")
    except mysql.connector.Error as err:
        print(f"Erro ao salvar base de conhecimento no banco de dados: {err}")

def find_best_match(user_question: str, questions: list[str]) -> str | None:
    matches: list = get_close_matches(user_question, questions, n=1, cutoff=0.6)
    return matches[0] if matches else None

def get_answer_for_question(question: str, knowledge_base: dict) -> str | None:
    for q in knowledge_base["questions"]:
        if q["question"] == question:
            return q["answer"]
        

def salvar_conversa(conexao, entrada_usuario, resposta):
    try:
        cursor = conexao.cursor()
        cursor.execute("INSERT INTO conversa (entrada_usuario, resposta) VALUES (%s, %s)", (entrada_usuario, resposta))
        conexao.commit()
        cursor.close()
        print("Conversa salva no banco de dados com sucesso!")
    except mysql.connector.Error as err:
        print(f"Erro ao salvar conversa no banco de dados: {err}")
