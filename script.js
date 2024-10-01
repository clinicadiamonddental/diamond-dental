document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode enviar os dados para um servidor ou API
    document.getElementById('form-message').innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;

    // Limpa o formulário
    document.getElementById('contact-form').reset();
});
