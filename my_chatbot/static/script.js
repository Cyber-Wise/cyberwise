document.addEventListener('DOMContentLoaded', function() {
    var botaoEnviar = document.getElementById('botao-enviar');
    var inputUsuario = document.getElementById('input-usuario');
    var chatContainer = document.getElementById('chat-container');

    botaoEnviar.addEventListener('click', function() {
        var inputValue = inputUsuario.value.trim();
        if (inputValue !== '') {
            sendMessage(inputValue);
            inputUsuario.value = ''; 
        }
    });

    function sendMessage(inputUsuario) {
        displayMessage(inputUsuario, 'Você');

        var request = new XMLHttpRequest();
        request.open('POST', '/get_response', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                var response = JSON.parse(request.responseText);
                var chatbotResponse = response.response;

                setTimeout(function(){
                    displayMessage(chatbotResponse, 'Cyber');
                }, 1000);
            }
        };
        request.send('input_usuario=' + encodeURIComponent(inputUsuario));
    }

    function displayMessage(message, sender) {
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        var messageElement = document.createElement('div');
        messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
        messageContainer.appendChild(messageElement);

        chatContainer.appendChild(messageContainer);
    }
});
