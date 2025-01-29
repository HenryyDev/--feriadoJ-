import { useState, useEffect } from "react";
import "./style/FadeInWrapper.css";
const FadeInWrapper = ({ children, delay = 300 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`fade-in ${visible ? "visible" : ""}`}>{children}</div>
  );
};

export default FadeInWrapper;
