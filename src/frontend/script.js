document.getElementById('pessoaForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (!validarCampos(nome, cpf, telefone)) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/pessoas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, cpf, telefone }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Pessoa cadastrada com sucesso!');
            limparFormulario();
            carregarPessoas();
        } else {
            alert('Erro ao cadastrar pessoa: ' + result.error);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});

function validarCampos(nome, cpf, telefone) {
    if (!nome || !cpf || !telefone) return false;
    const cpfValido = /^\d{11}$/.test(cpf); // Validação simples para CPF com 11 dígitos
    return cpfValido;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('telefone').value = '';
}

async function carregarPessoas() {
    try {
        const response = await fetch('http://localhost:3000/pessoas');
        const pessoas = await response.json();
        const listaPessoas = document.getElementById('listaPessoas');
        listaPessoas.innerHTML = '';

        pessoas.forEach(pessoa => {
            const li = document.createElement('li');
            li.textContent = `${pessoa.nome} - CPF: ${pessoa.cpf} - Telefone: ${pessoa.telefone}`;
            listaPessoas.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
    }
}

carregarPessoas();