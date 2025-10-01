import './App.css'
import React, {useState} from 'react'

//Propsi otetaan vastaan suoraan nimellä huomio
const Laskuri = ({huomio}) => {
  
  //Komponentin tilan määrittely
  const [luku, setLuku] = useState(0)
  return (
    <>
      <h3>{luku}</h3>
      <button onClick={() => setLuku(luku + 1) }>Plus</button>
      <button onClick={() => setLuku(luku - 1) }>Minus</button>
      <button onClick={() => setLuku(0) }>Reset</button>
      <button onClick={huomio}>Huomio</button>
    </>
  )
}

export default Laskuri