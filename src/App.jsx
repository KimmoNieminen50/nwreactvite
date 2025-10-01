import React, {useState} from 'react'
import './App.css'
import Laskuri from './laskuri.jsx'
import Viesti from './viesti.jsx'
import Posts from './posts.jsx'

const App = () => {

  //App komponentin tila
  const [showLaskuri, setShowLaskuri] = useState(false)

  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className="App">

      <h1>Hello from React!</h1>

      <Posts />

      {showLaskuri && <Laskuri huomio={huomio} />}
      
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="This is app component"/>

    </div>
  )
}

export default App
