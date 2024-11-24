// validando formulário


    function enviar() {
        // Capturar os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const ajuda = document.getElementById('ajuda').value.trim();

        // Validação dos campos
        if (!nome || !email || !telefone || !ajuda) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Exibir mensagem de agradecimento
        const mensagem = document.getElementById('mensagem');
        mensagem.textContent = 'Obrigado por nos contatar!';
        mensagem.style.display = 'block';

        // Limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('ajuda').value = '';
    }

