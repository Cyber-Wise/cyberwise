from flask import Flask, render_template, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from spacy.cli import download
import spacy

app = Flask(__name__)

def check_spacy_model_installed(model_name):
    try:
        spacy.load(model_name)
        return True
    except OSError:
        return False


if not check_spacy_model_installed("en_core_web_sm"):
    download("en_core_web_sm")

class ENGSM:
    ISO_639_1 = 'en_core_web_sm'

chatbot = ChatBot("Cyber", tagger_language=ENGSM)
chatbot.storage.drop()

conversa = [
    "oie",
    "fala meu parceiro",
    "qual o melhor grupo?",
    "Obvio que o grupo 8",
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
    user_input = request.form['user_input']
    resposta_chatbot = str(chatbot.get_response(user_input))
    return jsonify({'response': resposta_chatbot})

if __name__ == '__main__':
    app.run(debug=True)
