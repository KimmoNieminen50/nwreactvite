import React, {useState, useEffect} from 'react'
import './App.css'
import Laskuri from './laskuri.jsx'
import Viesti from './viesti.jsx'
import Posts from './posts.jsx'
import Customerlist from './customerlist.jsx'
import Message from './message.jsx'
//Navigointi ja Bootstrap importit
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {

  //Messageen liittyvät tilat
  const[message, setMessage] = useState("")
  const[isPositive, setIspositive] = useState(true)
  const[showMessage, setShowMessage] = useState(false)

  //App komponentin tilat
  const [showLaskuri, setShowLaskuri] = useState(false)
  const [showCustomerlist, setShowCustomerlist] = useState(false)
  const [showPosts, setShowPosts] = useState(false)

  const huomio = () => {
    alert("Huomio!")
  }

  return (

    <div>
      <Router>      
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href='/customers'>Customers</Nav.Link>
          <Nav.Link href='/users'>Users</Nav.Link>
          <Nav.Link href='/laskuri'>Counter</Nav.Link>
          <Nav.Link href='/posts'>Posts</Nav.Link>
            
        </Nav>
      </Navbar>

      {/* Message komponentti */}
      {showMessage &&
      <Message message={message} isPositive={isPositive}/>
      }

      <Routes>

        <Route path="/customers" element={<Customerlist setMessage={setMessage} setIspositive={setIspositive}
        setShowMessage={setShowMessage} />}>
        </Route>

        <Route path="/laskuri" element={<Laskuri otsikko={"Counter"} />}>
        </Route>

        <Route path="/posts" element={<Posts otsikko={"Posts"}/>}>
        </Route>

      </Routes>
    
      </Router>
    </div>
  )
}

export default App
