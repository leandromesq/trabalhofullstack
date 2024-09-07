document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pessoaForm');
    const pessoaList = document.getElementById('pessoaList');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nome = document.getElementById('nome').value;
      const cpf = document.getElementById('cpf').value;
      const telefone = document.getElementById('telefone').value;
  
      try {
        await fetch('http://localhost:3000/api/pessoas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nome, cpf, telefone })
        });
        await loadPessoas();
      } catch (error) {
        console.error('Erro ao cadastrar pessoa:', error);
      }
    });
  
    const loadPessoas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/pessoas');
        const pessoas = await response.json();
        pessoaList.innerHTML = pessoas.map(p => `<li class="list-group-item">${p.nome} - ${p.cpf} - ${p.telefone}</li>`).join('');
      } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
      }
    };
  
    loadPessoas();
  });