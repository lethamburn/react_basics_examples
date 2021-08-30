import React, { useEffect } from "react";

function Effect() {
  useEffect(function () {
    console.log("Rendered");
  });

  return <p>This is how useEffect works!</p>;
}

export default Effect;
