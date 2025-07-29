// Toggle do menu lateral (se houver botão de toggle)
const toggleBtn = document.getElementById('toggleBtn');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.toggle('translate-start');
  });
}

// Marcar link ativo na sidebar
document.querySelectorAll('.sidebar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Abrir e fechar modais
function openModal(id) {
  document.querySelectorAll('.modal-window').forEach(m => m.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}
function closeModal() {
  document.querySelectorAll('.modal-window').forEach(m => m.classList.remove('active'));
}

// Copiar e-mail/telefone
function copiarTexto(id) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto).then(() => {
    const msg = document.getElementById("copy-message");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
}

document.getElementById('search').addEventListener('input', () => {
  const termo = document.getElementById('search').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.card-custom');

  if (termo === '') {
    // Se a busca estiver vazia, mostra todos os cards e remove ordenação
    cards.forEach(card => {
      card.style.display = 'block';
      card.style.order = '';
    });
  } else {
    let ordem = 0;
    cards.forEach(card => {
      const texto = card.innerText.toLowerCase();

      if (texto.includes(termo)) {
        card.style.display = 'block';
        card.style.order = ordem++; // Reposiciona à esquerda
      } else {
        card.style.display = 'none';
        card.style.order = '';
      }
    });
  }

  // Filtrar lista de atribuições
  const atribuicoes = document.querySelectorAll('#visao details summary');
  atribuicoes.forEach(item => {
    const pai = item.closest('li');
    const texto = item.innerText.toLowerCase();
    pai.style.display = termo === '' || texto.includes(termo) ? 'list-item' : 'none';
  });

  // Não destacar modais visualmente, apenas lógica (se quiser usar futuramente)
  // Aqui mantemos a estrutura, mas sem bordas ou efeitos visuais
  const modais = document.querySelectorAll('.modal-window');
  modais.forEach(modal => {
    // Nenhuma alteração visual necessária
    modal.style.border = 'none';
    modal.style.boxShadow = 'block';
  });
});







