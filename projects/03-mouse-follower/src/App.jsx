import { useEffect, useState } from "react"


 const FollowMouse = ()=>{
  const [enabled, setEnabled] = useState(false)
  const [position,setPosition] = useState ({x:0, y:0})
// POINTER MOVE
  useEffect(() => {
    console.log('efectt' , {enabled})
  

  const handleMove = (event)  =>{
    const {clientX, clientY} = event
  console.log ('handleMove', {clientX, clientY})
  setPosition ({x:clientX, y:clientY})
  }

  if ( enabled){
  window.addEventListener ('pointermove', handleMove)

}
// cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      console.log('cleanup')
  window.removeEventListener('pointermove', handleMove)
}
}, [enabled])


useEffect (() =>{
  document.body.classList.toggle('no-cursor', enabled)

  return() =>{
    document.body.classList.remove('no-cursor')
  }
  
}, [enabled])


  return(
   <>

   <div style={{
        position: 'absolute',
        backgroundColor:  'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        border : '1px solid #fff',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
        }}>
          </div>
  
  
     <button onClick={()=> setEnabled(!enabled)} >
        {enabled ? 'Desctivar' :'Activar'} Seguir Puntero
        </button>

        
        </> 
  )
 }


 
function App() {  
  const [mounted, setMounted] = useState(true)
    return (
      <main>
   <FollowMouse/>
      </main>
  )

}

export default App
