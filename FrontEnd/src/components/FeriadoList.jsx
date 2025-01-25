import { obterImagemParaFeriado } from "./utils/feriados";

const FeriadosList = ({ feriados }) => {
  return (
    <div className="all-feriados my-5">
      <p>
        Todos os feriados deste ano <strong> (yyyy-mm-dd) </strong>:
      </p>
      <div className="row">
        {feriados.map((feriado, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={obterImagemParaFeriado(feriado.name)}
                alt={`Imagem do feriado ${feriado.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{feriado.name}</h5>
                <p className="card-text">
                  Feriado em: <strong>{feriado.date}</strong>
                </p>
                <a href="#" className="btn btn-primary">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeriadosList;
