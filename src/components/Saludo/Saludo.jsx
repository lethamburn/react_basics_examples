import React from "react";

const Saludo = (props) => {
  const { nombre } = props;
  return (
    <div>
      <p>Hola {nombre}!</p>
    </div>
  );
};

export default Saludo;
