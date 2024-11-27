// Reinicia a animação ao clicar no texto
document.getElementById("hello-world")
 .addEventListener("click", () => {
  const helloWorld = document
   .getElementById("hello-world");
  helloWorld.style.animation = "none";
  setTimeout(() => {
   helloWorld.style.animation =
    "fadeInOut 6s infinite, textGlow 2s infinite alternate";
  }, 50);
 });
