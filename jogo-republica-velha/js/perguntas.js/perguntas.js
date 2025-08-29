const perguntas = [
  {
    pergunta: "Qual foi o primeiro presidente da República Velha?",
    alternativas: ["Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek", "Floriano Peixoto"],
    correta: 0
  },
  {
    pergunta: "O que foi a política dos governadores?",
    alternativas: [
      "Aliança entre presidente e militares",
      "Sistema de apoio mútuo entre presidente e oligarquias estaduais",
      "Reforma agrária",
      "Movimento operário"
    ],
    correta: 1
  },
  // Adicione mais perguntas aqui
];

let perguntaAtual = null;

function sortearPergunta() {
  const index = Math.floor(Math.random() * perguntas.length);
  perguntaAtual = perguntas[index];

  const container = document.getElementById("perguntaContainer");
  container.innerHTML = `<p><strong>${perguntaAtual.pergunta}</strong></p>`;

  perguntaAtual.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(i);
    container.appendChild(btn);
  });
}

function verificarResposta(respostaIndex) {
  const container = document.getElementById("perguntaContainer");
  if (respostaIndex === perguntaAtual.correta) {
    container.innerHTML = "<p>✅ Resposta correta! Avance 2 casas.</p>";
    moverEquipe(0, 2); // Aqui você pode alternar entre equipes
  } else {
    container.innerHTML = "<p>❌ Resposta incorreta. Tente na próxima rodada.</p>";
  }
}

