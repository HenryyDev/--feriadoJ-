import { useState, useEffect } from "react";
import axios from "axios";
import Calendario from "./Calendario";
import "react-calendar/dist/Calendar.css";
import ProximoFeriado from "./ProximoFeriado";
import ContagemRegressiva from "./ContagemRegressiva";
import FeriadosList from "./FeriadoList";
import logo from "../assets/feriados.png";
import "./CalendarioFeriados.css";

const CalendarioFeriados = () => {
  const [feriados, setFeriados] = useState([]);
  const [proximoFeriado, setProximoFeriado] = useState(null);
  const [contagemRegressiva, setContagemRegressiva] = useState(null);
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const anoAtual = new Date().getFullYear();

  useEffect(() => {
    const fetchFeriados = async () => {
      try {
        const response = await axios.get(
          `https://brasilapi.com.br/api/feriados/v1/${anoAtual}`
        );

        const feriadosArray = Array.isArray(response.data) ? response.data : [];
        setFeriados(feriadosArray);

        const hoje = new Date();
        const hojeString = hoje.toISOString().split("T")[0];
        const proximo = feriadosArray.find(
          (feriado) => feriado.date >= hojeString
        );
        setProximoFeriado(proximo || null);
      } catch (error) {
        console.error("Erro ao buscar os feriados:", error);
        setErro(true);
      } finally {
        setCarregando(false);
      }
    };

    fetchFeriados();
  }, [anoAtual]);

  return (
    <>
      <header className="mb-5 d-flex align-items-center">
        <img src={logo} alt="logo do site" />
        <p className="m-0 mx-2">É feriado já?</p>
      </header>
      <div className="container d-flex flex-column align-items-center">
        <h1>Calendário de Feriados Nacionais - {anoAtual}</h1>

        {carregando ? (
          <p>Carregando...</p>
        ) : erro ? (
          <p style={{ color: "red" }}>Não foi possível carregar os feriados.</p>
        ) : (
          <>
            <ProximoFeriado proximoFeriado={proximoFeriado} />
            <ContagemRegressiva proximoFeriado={proximoFeriado} />
            <Calendario
              feriados={feriados}
              proximoFeriado={proximoFeriado}
              anoAtual={anoAtual}
            />
            <FeriadosList feriados={feriados} />
          </>
        )}
      </div>
    </>
  );
};

export default CalendarioFeriados;
