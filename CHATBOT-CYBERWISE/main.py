from flask import Flask, render_template, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from spacy.cli import download
import spacy

def check_biblioteca_flask(flask):
    try:
        __import__(flask)
        return True
    except ImportError:
        return False
    
def check_biblioteca_chat(chatterbot):
    try:
        __import__(chatterbot)
        return True
    except ImportError:
        return False
    
def check_biblioteca_spacy(spacy):
    try:
        __import__(spacy)
        return True
    except ImportError:
        return False

def check_spacy_model_instalado(model_name):
    try:
        spacy.load(model_name)
        return True
    except OSError:
        return False

if not check_spacy_model_instalado("pt_core_news_sm"):
    spacy.cli.download("pt_core_news_sm")

class PTB:
    ISO_639_1 = 'pt_core_news_sm'

chatbot = ChatBot("Cyber", tagger_language=PTB)


app = Flask(__name__)


chatbot.storage.drop()

conversa = [
    "oie",
    "Olá , como posso ajuda-lo?",
    "qual o melhor grupo?",
    "Grupo 8",
    "qual a melhor empresa",
    "Com certeza a CYBERWISEEEEEEE !!!!!!!!!!!",
]

trainer = ListTrainer(chatbot)
trainer.train(conversa)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/get_response', methods=['POST'])
def get_response():
    input_usuario = request.form['input_usuario']
    resposta_chatbot = str(chatbot.get_response(input_usuario))
    return jsonify({'response': resposta_chatbot})

if __name__ == '__main__':
    app.run(debug=True)
