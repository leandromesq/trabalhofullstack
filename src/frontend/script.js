document.getElementById('pessoaForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;

  const response = await fetch('http://localhost:3000/pessoas', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, cpf, telefone }),
  });

  const result = await response.json();
  if (response.ok) {
      alert('Pessoa cadastrada com sucesso!');
      carregarPessoas();
  } else {
      alert('Erro ao cadastrar pessoa: ' + result.error);
  }
});

async function carregarPessoas() {
  const response = await fetch('http://localhost:3000/pessoas');
  const pessoas = await response.json();
  const listaPessoas = document.getElementById('listaPessoas');
  listaPessoas.innerHTML = '';
  pessoas.forEach(pessoa => {
      const li = document.createElement('li');
      li.textContent = `${pessoa.nome} - ${pessoa.cpf} - ${pessoa.telefone}`;
      listaPessoas.appendChild(li);
  });
}

// Carregar a lista de pessoas ao carregar a página
carregarPessoas();