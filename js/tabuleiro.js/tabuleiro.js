const equipes = ["Equipe 1", "Equipe 2"]; // Exemplo fixo, pode vir do localStorage
const posicoes = Array(equipes.length).fill(0);

function criarTabuleiro() {
  const container = document.getElementById("casasContainer");
  for (let i = 1; i <= 20; i++) {
    const casa = document.createElement("div");
    casa.className = "casa";
    casa.id = `casa${i}`;
    casa.textContent = i;
    container.appendChild(casa);
  }

  const eqContainer = document.getElementById("equipesContainer");
  equipes.forEach((nome, i) => {
    const div = document.createElement("div");
    div.id = `equipe${i}`;
    div.textContent = `${nome} - Posição: 0`;
    eqContainer.appendChild(div);
  });
}

function moverEquipe(index, casas) {
  posicoes[index] += casas;
  if (posicoes[index] > 20) posicoes[index] = 20;

  document.getElementById(`equipe${index}`).textContent =
    `${equipes[index]} - Posição: ${posicoes[index]}`;

  if (posicoes[index] === 20) {
    alert(`${equipes[index]} venceu o jogo!`);
  }
}

window.onload = criarTabuleiro;

