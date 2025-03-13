import { useState, useEffect } from 'react'
import './App.css'
import Plateau from './components/Plateau'

function App() {
  const [croix, setCroix] = useState(true)

  //Fait bugger tout ce qui en découle
  /*useEffect(() => {
    setCroix(!croix)
  }, [croix]);*/

  const [count, setCount] = useState(5)

  const [nom1, setNom1] = useState("Joueur 1")

  const [nom2, setNom2] = useState("Joueur 2")

  const [score1, setScore1] = useState(0)

  const [score2, setScore2] = useState(0)

  //Reset des scores (fonctionnel)
  const reset = () => {
    setScore1(0)
    setScore2(0)
    setCount(5)
  }

  //Nouvelle partie (counter fonctionnel)
  const recommencer = () => {
    setCount(5)
  }

  //Décrémente mais ne s'arrête pas
  useEffect(() => {
    const interval = setInterval(() => {
        setCount((currentCount) => {
            return currentCount - 1
        })
    }, 1000)
    return () => {
        clearInterval(interval)
    }
}, [])


  //Pas fonctionnel, je ne voulais pas utiliser de formulaire
  useEffect(() => {
    const changerNom1 = (newName) => {
      setNom1(newName.target.value);
    };
    return () => {
      console.log(nom1)
    };
  }, [nom1]);

  return (
    <div className="app">
      <h1>Morpion</h1>
      <div className="pseudos">
        <input
          type="text" value={nom1}
        />
        <p>Temps restant : {count}</p>
        <input
          type="text" value={nom2}
        />
      </div>

      <div className="boutons">
        <button onClick={reset}>Réinitialiser (remet à 0 les scores)</button>
        <button onClick={recommencer}>Recommencer (garde les scores)</button>
      </div>

      <p>C'est au tour de { croix ? nom1 : nom2}</p>

      <Plateau />

      <div className="scores">
        <p>Score de {nom1} : {score1}</p>
        <p>Score de {nom2} : {score2}</p>
      </div>
    </div>
  )
}

export default App
