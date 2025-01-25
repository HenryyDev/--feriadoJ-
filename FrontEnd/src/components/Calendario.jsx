import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendario = ({ feriados, proximoFeriado, anoAtual }) => {
  // Função que formata as datas para comparar no formato 'yyyy-mm-dd'
  const formatarDataParaString = (data) => {
    return data.split("T")[0]; // Retorna no formato 'yyyy-mm-dd'
  };

  // Função para marcar todos os feriados no calendário
  const marcarFeriados = ({ date }) => {
    const dataFormatada = formatarDataParaString(date.toISOString()); // Formata a data do calendário para 'yyyy-mm-dd'

    // Comparar todas as datas de feriados com a data do calendário
    const feriadoEncontrado = feriados.find(
      (feriado) => formatarDataParaString(feriado.date) === dataFormatada
    );

    if (feriadoEncontrado) {
      return "feriado"; // Aplica a classe 'feriado' para todos os feriados
    }

    return null; // Não aplica o estilo para outras datas
  };

  return (
    <div className="wrap">
      <Calendar
        value={
          proximoFeriado
            ? new Date(proximoFeriado.date + "T00:00:00") // Garante a data sem impacto de fuso horário
            : new Date()
        } // Marca o próximo feriado como a data selecionada
        tileClassName={marcarFeriados}
        minDate={new Date(`${anoAtual}-01-01`)} // Impede navegação para meses antes de janeiro do ano atual
        maxDate={new Date(`${anoAtual}-12-31`)} // Impede navegação para meses depois de dezembro do ano atual
        showNeighboringMonth={false} // Não mostra os dias dos meses vizinhos
        navigationLabel={({ date }) =>
          `${date.toLocaleString("default", {
            month: "long",
          })} ${anoAtual}`
        } // Bloqueia mudança de ano
        prev2Label={null} // Desabilita o botão de navegação para o ano anterior
        next2Label={null} // Desabilita o botão de navegação para o ano seguinte
      />
    </div>
  );
};

export default Calendario;
