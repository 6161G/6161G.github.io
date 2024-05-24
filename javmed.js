document.getElementById('send-btn').addEventListener('click', function() {
    var input = document.getElementById('chat-input');
    var message = input.value;
    
    if (message.trim() !== '') {
        var chatMessages = document.querySelector('.chat-messages');

        // Crear un nuevo elemento de mensaje del usuario
        var userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);

        // Respuesta simulada del especialista
        var specialistMessage = document.createElement('div');
        specialistMessage.className = 'message specialist';
        specialistMessage.textContent = 'Gracias por tu mensaje. Un especialista te responderá en breve.';
        chatMessages.appendChild(specialistMessage);

        // Limpiar el campo de entrada
        input.value = '';

        // Desplazar el chat hacia abajo
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
