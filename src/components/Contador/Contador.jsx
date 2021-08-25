import React, { useEffect, useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Total clicks = ${count}`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
};

export default Contador;