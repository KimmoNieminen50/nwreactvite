import '../App.css'
import React, {useState, useEffect} from 'react'
import userservice from '../services/userservice.js'
import Useradd from './useradd.jsx'

const Userlist = ({setMessage, setShowMessage, setIspositive}) => {
  
  //Komponentin tilan määrittely
  const [users, setUsers] = useState([])
  const [show, setShow] = useState(false)
  const [adding, setAdding] = useState(false)
  const [x, reload] = useState(false) //Apumuuttuja: kun reload kutsutaan, x muuttuu true/false ja useEffect laukaisee datan uudelleenlatauksen, koska x on siinä toisena riippuvuutena
  const [search, setSearch] = useState("")

  useEffect(() => {
    userservice.getAll()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error.message))
  },[x]) 

  return (
    <>
      <h1>Users</h1>

      <Useradd x={x} reload={reload} setMessage={setMessage} setShowMessage={setShowMessage} setIspositive={setIspositive}/>
      <hr/>

      <input type="text" style={{ width: "400px", height: "30px", fontSize: "20px", padding: "8px" }} placeholder="Search by name" value={search} onChange={({target}) => setSearch(target.value)}></input>
      <hr/>

      <table id="userTable">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Accesslevel</th>
          </tr>
        </thead>
      
        <tbody>
          {users && users.map(u => {
            const lowerCaseName = u.lastname.toLowerCase()
              if (lowerCaseName.indexOf(search) > -1) {
                return(
                <tr key={u.userId}>
                  <td>{u.firstname}</td>
                  <td>{u.lastname}</td>
                  <td>{u.email}</td>
                  <td>{u.accesslevelId}</td>
                </tr>
                          
                )
              }
          }
          )
          }
        </tbody>
      </table>
    </>
  )
}

export default Userlist