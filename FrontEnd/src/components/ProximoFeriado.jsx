const ProximoFeriado = ({ proximoFeriado }) => {
  return (
    <div className="info">
      <p>O próximo Feriado&nbsp;</p>
      {proximoFeriado ? (
        <p>
          <strong>{proximoFeriado.name}</strong>&nbsp;será em{" "}
          <strong>
            {new Date(proximoFeriado.date + "T00:00:00").toLocaleDateString(
              "pt-BR"
            )}
          </strong>
        </p>
      ) : (
        <p>Não há feriados para este ano.</p>
      )}
    </div>
  );
};

export default ProximoFeriado;
