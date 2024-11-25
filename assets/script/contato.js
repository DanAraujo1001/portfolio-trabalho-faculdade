// Selecionando os elementos do formulário
const form = document.querySelector('.formulario-container');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('numeroTelefone');
const mensagemInput = document.querySelector('textarea[name="mensagem"]');
const enviarButton = document.querySelector('button[type="button"]');

// Função para validar o formulário
function validarFormulario() {
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    // Verificando se todos os campos foram preenchidos
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return false;
    }

    // Verificando o número de telefone
    const telefonePadrao = telefoneInput.placeholder.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
    const numeroLimpo = telefone.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos do input
    if (numeroLimpo.length !== telefonePadrao.length) {
        alert(`O número de telefone deve ter ${telefonePadrao.length} dígitos.`);
        return false;
    }

    return true;
}

// Adicionando evento ao botão Enviar
enviarButton.addEventListener('click', () => {
    if (validarFormulario()) {
        alert('Mensagem enviada com sucesso!');
        form.reset(); // Limpa o formulário
    }
});