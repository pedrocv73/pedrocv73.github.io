// ============================================
// SISTEMA DE IDIOMAS — VERSÃO MODULAR
// Funciona em qualquer página, com qualquer
// elemento marcado como .pt ou .en
// ============================================

// 1. Ativar PT por defeito ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  ativarIdioma("pt");
});


// 2. Função central de alternância
function ativarIdioma(lang) {

  // Remover active de tudo
  document.querySelectorAll('.pt, .en').forEach(el => {
    el.classList.remove('active');
  });

  // Ativar apenas o idioma escolhido
  document.querySelectorAll('.' + lang).forEach(el => {
    el.classList.add('active');
  });
}


// 3. Botões de troca de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang; // "pt" ou "en"
    ativarIdioma(lang);
  });
});
