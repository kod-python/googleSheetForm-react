import React from "react";
import "./App.css"

const LinkButton = ({ url, label }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return <button onClick={handleClick} className="btn">{label}</button>;
};

function App() {
  return (
    <div className="App">
      <LinkButton url="https://github.com/kod-python" label="Login" />
      
    </div>
  );
}

export default App;
