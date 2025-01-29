import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { obterImagemParaFeriado } from "./utils/feriados";
import "./style/FeriadoList.css";
const FeriadosList = ({ feriados }) => {
  // Função para determinar o número de cards por slide baseado na largura da tela
  const getCardsPerSlide = (width) => {
    if (width >= 1200) {
      return 4;
    } else if (width >= 992) {
      return 3;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(
    getCardsPerSlide(window.innerWidth)
  );

  // Função para dividir os feriados em chunks
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  // Atualizando o número de cards por slide ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Limpa o event listener
  }, []);

  const feriadosChunks = chunkArray(feriados, cardsPerSlide);

  return (
    <Container className="all-feriados my-5 position-relative">
      <p className="text-center mb-4">
        Todos os feriados deste ano <strong> (yyyy-mm-dd) </strong>:
      </p>

      <Carousel
        indicators={false}
        interval={null}
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon custom-prev"
          />
        }
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon custom-next"
          />
        }
      >
        {feriadosChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center g-4">
              {chunk.map((feriado, idx) => {
                const { imagem, link } = obterImagemParaFeriado(feriado.name);

                return (
                  <Col
                    key={idx}
                    xs={12} // 1 card em mobile
                    sm={6} // 2 cards em telas ≥576px
                    md={4} // 3 cards em telas ≥768px
                    lg={3} // 4 cards em telas ≥992px
                    xl={3} // 4 cards em telas ≥1200px
                    className="mb-4"
                  >
                    <div className="card h-100 shadow-sm">
                      <img
                        className="card-img-top"
                        src={imagem}
                        alt={`Imagem do feriado ${feriado.name}`}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fs-6">{feriado.name}</h5>
                        <p className="card-text">
                          Feriado em: <strong>{feriado.date}</strong>
                        </p>
                        <div className="mt-auto">
                          <a
                            href={link}
                            className="btn btn-primary w-100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ver detalhes
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default FeriadosList;
