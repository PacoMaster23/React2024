import  './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
    


export function App() {

    return (
        
        <section className='App'>
       <TwitterFollowCard   userName='FRANCISCO' >
        paco
</TwitterFollowCard>

<TwitterFollowCard   userName='Pedro' >
        Chiqutin
</TwitterFollowCard>
<TwitterFollowCard   userName='Angel' >
        Manito
</TwitterFollowCard>
        </section>


    )
}