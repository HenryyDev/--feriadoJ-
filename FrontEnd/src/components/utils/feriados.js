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

// Adicionando links junto com as imagens
export const obterImagemParaFeriado = (nome) => {
  const imagens = {
    "Confraternização mundial": {
      imagem: confraternizacaomundiImg,
      link: "https://pt.wikipedia.org/wiki/1_de_janeiro",
    },
    Carnaval: {
      imagem: carnavalImg,
      link: "https://pt.wikipedia.org/wiki/Carnaval",
    },
    "Sexta-feira Santa": {
      imagem: sextaSantaImg,
      link: "https://pt.wikipedia.org/wiki/Sexta-feira_Santa",
    },
    Páscoa: {
      imagem: pascoaImg,
      link: "https://pt.wikipedia.org/wiki/P%C3%A1scoa",
    },
    Tiradentes: {
      imagem: tiradentesImg,
      link: "https://pt.wikipedia.org/wiki/Dia_da_Inconfid%C3%AAncia",
    },
    "Dia do trabalho": {
      imagem: trabalhoImg,
      link: "https://pt.wikipedia.org/wiki/Dia_do_Trabalhador",
    },
    "Corpus Christi": {
      imagem: corpushristiImg,
      link: "https://pt.wikipedia.org/wiki/Corpus_Christi",
    },
    "Independência do Brasil": {
      imagem: independenciaImg,
      link: "https://pt.wikipedia.org/wiki/Dia_da_Independ%C3%AAncia_(Brasil)",
    },
    "Nossa Senhora Aparecida": {
      imagem: aparecidaImg,
      link: "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Concei%C3%A7%C3%A3o_Aparecida",
    },
    Finados: {
      imagem: finadosImg,
      link: "https://pt.wikipedia.org/wiki/Dia_dos_Fi%C3%A9is_Defuntos",
    },
    "Proclamação da República": {
      imagem: proclamacaoImg,
      link: "https://pt.wikipedia.org/wiki/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_do_Brasil#:~:text=Situa%C3%A7%C3%A3o%20pol%C3%ADtica%20do%20Brasil%20em%201889,-O%20governo%20imperial&text=As%20propostas%20do%20Visconde%20de,1889%2C%20a%20Rep%C3%BAblica%20era%20proclamada.",
    },
    "Dia da consciência negra": {
      imagem: concienciaNegraImg,
      link: "https://pt.wikipedia.org/wiki/Dia_Nacional_de_Zumbi_e_da_Consci%C3%AAncia_Negra#:~:text=O%20Dia%20Nacional%20de%20Zumbi,21%20de%20dezembro%20de%202023.",
    },
    Natal: { imagem: natalImg, link: "https://pt.wikipedia.org/wiki/Natal" },
  };

  return imagens[nome];
};
