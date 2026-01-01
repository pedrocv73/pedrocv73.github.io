document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLang = button.getAttribute("data-lang");

      // Esconde todos os blocos
      document.querySelectorAll(".pt, .en").forEach(el => {
        el.style.display = "none";
      });

      // Mostra apenas os da língua selecionada
      document.querySelectorAll("." + selectedLang).forEach(el => {
        el.style.display = "block";
      });
    });
  });
});
