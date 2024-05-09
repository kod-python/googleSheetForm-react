import React from "react";

const LinkButton = ({ url, label }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return <button onClick={handleClick}>{label}</button>;
};

function App() {
  return (
    <div className="App">
      <LinkButton url="" label="Click" />
      
    </div>
  );
}

export default App;
