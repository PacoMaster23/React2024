import { useEffect, useState } from "react"

function App() {

  const [enable, setEnable] = useState(false)
  useEffect(() => {
    console.log('efecto')
  })

  return (
    <>      <h1>HOLA DESDE REACT</h1>
      <button >{enable ? 'Activar' :'Desactivar'}</button>


    </>

  )
}

export default App
