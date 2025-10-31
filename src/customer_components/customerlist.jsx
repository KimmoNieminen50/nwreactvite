import '../App.css'
import React, {useState, useEffect} from 'react'
import customerservice from '../services/customerservice'
import CustomerDetails from './customerdetails'
import Customeradd from './customeradd'

const Customerlist = ({setMessage, setShowMessage, setIspositive}) => {
  
  //Komponentin tilan määrittely
  const [customers, setCustomers] = useState([])
  const [show, setShow] = useState(false)
  const [adding, setAdding] = useState(false)
  const [x, reload] = useState(false) //Apumuuttuja: kun reload kutsutaan, x muuttuu true/false ja useEffect laukaisee datan uudelleenlatauksen, koska x on siinä toisena riippuvuutena
  const [search, setSearch] = useState("")

  useEffect(() => {
    customerservice.getAll()
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error.message))
  },[x]) 

  return (
    <>
      <h1>Customers</h1>

      <Customeradd x={x} reload={reload} setMessage={setMessage} setShowMessage={setShowMessage} setIspositive={setIspositive}/>
      <hr/>

      <input type="text" style={{ width: "400px", height: "30px", fontSize: "20px", padding: "8px" }} placeholder="Search by company name" value={search} onChange={({target}) => setSearch(target.value)}></input>
      <hr/>

      {
        //Ensimmäinen customers tarkistaa, että customers ei ole null tai undefined
        customers && customers.map(c => {
          if (c.companyName.toLowerCase().includes(search.toLowerCase())){
            return(
           <CustomerDetails key={c.customerId} customer={c} x={x} reload={reload} setMessage={setMessage} setShowMessage={setShowMessage} setIspositive={setIspositive} />
          )}
          return null
        })
      } 
    </>
  )
}

export default Customerlist