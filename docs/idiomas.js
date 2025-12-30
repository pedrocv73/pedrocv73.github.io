document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".lang-btn");
  const ptElements = document.querySelectorAll(".pt");
  const enElements = document.querySelectorAll(".en");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");

      if (lang === "pt") {
        ptElements.forEach(el => el.style.display = "block");
        enElements.forEach(el => el.style.display = "none");
      } else {
        ptElements.forEach(el => el.style.display = "none");
        enElements.forEach(el => el.style.display = "block");
      }
    });
  });
});
