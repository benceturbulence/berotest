import React from 'react'
import './App.css'
import Header from './Header'

export default function App() {

  const [optionNum, setOptionNum] = React.useState(100)
  const [isStarted, setIsStarted] = React.useState(false)
  const [chosenOption, setChosenOption] = React.useState('')

  function toggleChange(event) {
    setOptionNum(event.target.value)
  }

  function startRoll() {
    setIsStarted(true)
  }

  function reset() {
    setIsStarted(false)
  }

  function StartUI() {
    return (
      <div className='grid'>
        <div className="container">
          <h1>Introduzca el numero de <span className="accent">opciones</span>!</h1>
          <input
            type="number"
            name="optionNum"
            onChange={toggleChange}
            value={optionNum}
          />
          <button className='btn' onClick={startRoll}>Start</button>
        </div>
      </div>
    )
  }

  function generateNumber() {
    let number = Math.ceil(Math.random() * optionNum)
    setChosenOption(number)
  }

  function RollUI() {
    return (
      <div className="grid">
        <div className="container">
          <h3>🤔No sabes la <span className="accent">respuesta</span>? 🙄</h3>
          <h4>⬇Clickéa al botón!⬇</h4>
          <h2>🧐Creéme, la siguiente <span className="accent">opción</span> es la correcta 🤓 < br/>{chosenOption}</h2>
          <button className="btn" onClick={generateNumber}>Dame la respuesta</button>
          <button className="btn reset" onClick={reset}>Reset</button>
        </div>
      </div>
    )
  }

  return (
    <main>
      <Header />
      {!isStarted ?
        <StartUI /> :
        <RollUI />}
    </main>
  )
}
