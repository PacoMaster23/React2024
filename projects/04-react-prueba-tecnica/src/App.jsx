import { useEffect, useState } from "react"
import './App.css'
const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'


const CAT_PREFIX_IMAGE_URL ='https://cataas.com'


export function App () {
    const [fact,setFact] = useState ()
    const [imageUrl, setImageUrl] = useState()

    // recuperar la ctia al cargar la pagina
     useEffect (() =>{
        fetch (CAT_ENDOPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
        const {fact} = data 
        setFact(fact)
        

        
        })
       },[])

       useEffect (() =>{
        if (!fact)return

        const firstThreeWords
         = fact.split(' ', 3).join(' ')
        console.log(firstThreeWords) 

        fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&
         json=true`)

            .then(res =>res.json( ))
            .then(response => {
                const {url} = response
                setImageUrl(url)
            })
       }, [fact])
    
    return(

        <main>
        <h1>App de Gatitos</h1>
        
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`image extracted using the 
            first three words for ${fact}`}/>}
        </main>
    )
}