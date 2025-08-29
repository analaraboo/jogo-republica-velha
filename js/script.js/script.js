function mostrarCampos() {
  const num = parseInt(document.getElementById("numEquipes").value);
  const container = document.getElementById("camposEquipes");
  container.innerHTML = "";

  for (let i = 1; i <= num; i++) {
    const label = document.createElement("label");
    label.textContent = `Nome da Equipe ${i}:`;
    const input = document.createElement("input");
    input.type = "text";
    input.id = `equipe${i}`;
    input.required = true;
    container.appendChild(label);
    container.appendChild(input);
  }
}

function iniciarJogo() {
  const num = parseInt(document.getElementById("numEquipes").value);
  const nomes = [];

  for (let i = 1; i <= num; i++) {
    const nome = document.getElementById(`equipe${i}`).value.trim();
    if (!nome) {
      alert(`Por favor, insira o nome da Equipe ${i}`);
      return;
    }
    nomes.push(nome);
  }

  // Aqui você pode redirecionar para a próxima etapa do jogo
  console.log("Equipes:", nomes);
  alert("Jogo iniciado com as equipes: " + nomes.join(", "));
}

