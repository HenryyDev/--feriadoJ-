import { obterImagemParaFeriado } from "./utils/feriados";

const FeriadosList = ({ feriados }) => {
  return (
    <div className="all-feriados my-5">
      <p>
        Todos os feriados deste ano <strong> (yyyy-mm-dd) </strong>:
      </p>
      <div className="row">
        {feriados.map((feriado, index) => {
          // Obtendo a imagem e o link para o feriado
          const { imagem, link } = obterImagemParaFeriado(feriado.name);

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={imagem}
                  alt={`Imagem do feriado ${feriado.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{feriado.name}</h5>
                  <p className="card-text">
                    Feriado em: <strong>{feriado.date}</strong>
                  </p>
                  <a href={link} className="btn btn-primary" target="_blank">
                    Ver detalhes
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeriadosList;
