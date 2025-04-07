
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const etapas = [
  {
    titulo: "Organização Financeira",
    descricao: "Entenda quanto você ganha, quanto gasta e onde pode melhorar.",
    desafio: "Registre seus gastos por 7 dias.",
  },
  {
    titulo: "Combate às Dívidas",
    descricao: "Conheça suas dívidas, priorize pagamentos e escolha uma estratégia (bola de neve ou avalanche).",
    desafio: "Liste todas as suas dívidas e seus juros.",
  },
  {
    titulo: "Fundo de Emergência",
    descricao: "Comece a montar uma reserva para imprevistos, o ideal é ter de 3 a 6 meses dos seus custos fixos.",
    desafio: "Abra uma conta separada e deposite pelo menos R$100.",
  },
  {
    titulo: "Primeiros Investimentos",
    descricao: "Aprenda sobre renda fixa, tesouro direto e investimentos simples.",
    desafio: "Simule um investimento de R$500 por 12 meses.",
  },
  {
    titulo: "Multiplicação e Liberdade",
    descricao: "Comece a investir de forma contínua e diversificada, com foco em liberdade financeira.",
    desafio: "Crie um plano mensal de aportes.",
  },
];

function App() {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const avancar = () => {
    if (etapaAtual < etapas.length - 1) setEtapaAtual(etapaAtual + 1);
  };

  const voltar = () => {
    if (etapaAtual > 0) setEtapaAtual(etapaAtual - 1);
  };

  const progresso = ((etapaAtual + 1) / etapas.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">🌟 Mapa da Jornada Financeira</h1>
      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div className="bg-green-500 h-3 rounded-full" style={{ width: progresso + '%' }}></div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Etapa {etapaAtual + 1}: {etapas[etapaAtual].titulo}</h2>
        <p>{etapas[etapaAtual].descricao}</p>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="font-medium">🎯 Desafio:</p>
          <p>{etapas[etapaAtual].desafio}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={voltar} disabled={etapaAtual === 0} className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50">⬅️ Voltar</button>
        <button onClick={avancar} disabled={etapaAtual === etapas.length - 1} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">Avançar ➡️</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
