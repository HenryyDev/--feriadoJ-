import { useEffect, useState } from "react";

const ContagemRegressiva = ({ proximoFeriado }) => {
  const [contagemRegressiva, setContagemRegressiva] = useState(null);

  useEffect(() => {
    if (!proximoFeriado) return;

    const intervalo = setInterval(() => {
      const agora = new Date();
      const dataFeriado = new Date(proximoFeriado.date + "T00:00:00");

      if (isNaN(dataFeriado.getTime())) {
        clearInterval(intervalo);
        return;
      }

      const diferenca = dataFeriado - agora;

      if (diferenca <= 0) {
        clearInterval(intervalo);
        setContagemRegressiva(null);
        return;
      }

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setContagemRegressiva({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [proximoFeriado]);

  return (
    <div className="contagem-regressiva">
      {contagemRegressiva && (
        <div>
          <p>
            Faltam:{" "}
            <strong>
              {contagemRegressiva.dias} dias, {contagemRegressiva.horas} horas,{" "}
              {contagemRegressiva.minutos} minutos e{" "}
              {contagemRegressiva.segundos} segundos.
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ContagemRegressiva;
