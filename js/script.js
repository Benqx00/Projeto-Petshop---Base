// scripts petshop

document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    } else {
        alert("Mensagem enviada com sucesso");
    }

    this.reset();
});


const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

