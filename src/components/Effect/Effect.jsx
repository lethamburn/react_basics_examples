import React, { useEffect } from "react";

function Effect() {
  useEffect(function () {
    console.log("Renderizado");
  });

  return <p>Así funciona useEffect</p>;
}

export default Effect;
