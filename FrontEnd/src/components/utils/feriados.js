import confraternizacaomundiImg from "../../assets/dia 1.png";
import carnavalImg from "../../assets/carnaval.png";
import sextaSantaImg from "../../assets/sexta santa.jpg";
import pascoaImg from "../../assets/pascoa.jpg";
import tiradentesImg from "../../assets/tiradentes.webp";
import trabalhoImg from "../../assets/trabalho.jpg";
import corpushristiImg from "../../assets/corpus christi.jpg";
import independenciaImg from "../../assets/independencia.jpg";
import aparecidaImg from "../../assets/aparecida.webp";
import finadosImg from "../../assets/finados.jpeg";
import proclamacaoImg from "../../assets/proclamacao.png";
import concienciaNegraImg from "../../assets/conciencia negra.jpg";
import natalImg from "../../assets/natal.jpg";

export const obterImagemParaFeriado = (nome) => {
  const imagens = {
    "Confraternização mundial": confraternizacaomundiImg,
    Carnaval: carnavalImg,
    "Sexta-feira Santa": sextaSantaImg,
    Páscoa: pascoaImg,
    Tiradentes: tiradentesImg,
    "Dia do trabalho": trabalhoImg,
    "Corpus Christi": corpushristiImg,
    "Independência do Brasil": independenciaImg,
    "Nossa Senhora Aparecida": aparecidaImg,
    Finados: finadosImg,
    "Proclamação da República": proclamacaoImg,
    "Dia da consciência negra": concienciaNegraImg,
    Natal: natalImg,
  };

  return imagens[nome];
};
