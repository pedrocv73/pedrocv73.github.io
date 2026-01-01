document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLang = button.getAttribute("data-lang");

      // Esconde tudo
      document.querySelectorAll(".pt, .en").forEach(el => {
        el.style.display = "none";
      });

      // Mostra a língua selecionada
      document.querySelectorAll("." + selectedLang).forEach(el => {
        // Se for UL, mantém flex
        if (el.tagName === "UL") {
          el.style.display = "flex";
        } else {
          el.style.display = "block";
        }
      });
    });
  });
});
