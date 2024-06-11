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
        request.open('POST', '/api/chat', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                var response = JSON.parse(request.responseText);
                var chatbotResponse = response.response;
    
                setTimeout(function(){
                    displayMessage(chatbotResponse, 'Cyber');
                }, 1000);
            } else if (request.readyState === XMLHttpRequest.DONE) {
                console.error('Erro na solicitação:', request.status, request.statusText);
            }
        };
        var data = 'input_usuario=' + encodeURIComponent(inputUsuario);
        request.send(data);
    }
    

    // function sendMessage(inputUsuario) {
    //     console.log('Sending message:', inputUsuario);
        
    //     // Exibir mensagem do usuário
    //     displayMessage(inputUsuario, 'Você');
    
    //     // Fazer a requisição usando fetch
    //     fetch('/api/chat', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             mensagem: inputUsuario
    //         })
    //     })
    //     .then(function(resposta) {
    //         if (resposta.ok) {
    //             resposta.json().then(json => {
    //                 console.log(json);
    //                 var chatbotResponse = json.response;
                    
    //                 // Exibir resposta do chatbot após 1 segundo
    //                 setTimeout(function(){
    //                     displayMessage(chatbotResponse, 'Cyber');
    //                 }, 1000);
    //             });
    //         } else {
    //             console.error('Erro na resposta:', resposta.status);
    //         }
    //     })
    //     .catch(function(error) {
    //         console.error('Erro na requisição:', error);
    //     });
    // }
    
    
    

    function displayMessage(message, sender) {
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        var messageElement = document.createElement('div');
        messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
        messageContainer.appendChild(messageElement);

        chatContainer.appendChild(messageContainer);
    }
});
