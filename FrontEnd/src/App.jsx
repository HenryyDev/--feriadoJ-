import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarioFeriados from "./components/CalendarioFeriados";
import FadeInWrapper from "./components/FadeInWrapper";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p className="loading-text">Carregando...</p>
        </div>
      ) : (
        <FadeInWrapper>
          <CalendarioFeriados />
        </FadeInWrapper>
      )}
    </div>
  );
}

export default App;
