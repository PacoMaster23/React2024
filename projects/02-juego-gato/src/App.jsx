import { useState } from 'react'
import conffeti from "canvas-confetti"

import { Square } from './components/Square'
import { TURNS } from './constans'

import { checkEndGame, CheckWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState (null)

  
  const resetgame = () =>{
    setBoard (Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  const updateBoard = (index) => {
    // no se actualiza esta posicion
    // si ya tiene algo
    if (board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

// cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = CheckWinnerFrom(newBoard)
    if (newWinner){
      conffeti()
      setWinner (newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (

    <main className='board'>
      <h1>GATO</h1>
      <button onClick={resetgame}> reset game</button>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>


      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}

        </Square>

      </section>

        <WinnerModal resetGame={resetgame}winner={winner}/>
    </main>


  )
}

export default App
