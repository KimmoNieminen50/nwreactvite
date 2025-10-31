import '../App.css'
import React, {useState, useEffect} from 'react'
import customerservice from '../services/customerservice'
import CustomerEdit from './customeredit'

//Receive customer as a prop from customerlist
const CustomerDetails = ({customer, setMessage, setShowMessage, setIspositive, x, reload}) => {
  
//States
const [showDetails, setShowDetails] = useState(false)
const [editing, setEditing] = useState(false)

//Delete customer
const removeCustomer = () => {
  const answer = window.confirm("Are you sure you want to delete " + customer.companyName + " ?")
  if (answer === false) {
    return;
  }

    customerservice.remove(customer.customerId)
      .then(res => {
        if (res.status === 200 || res.status === 204) {
        setMessage(`Successfully removed customer ${customer.companyName}`)
        setIspositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)

        // Ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},4000)
        reload(!x)
        }
        
        }
        )
        .catch(error => {
            setMessage(error.message)
            setIspositive(false)
            setShowMessage(true)
            window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
    
            setTimeout(() => {
            setShowMessage(false)}, 4000)
            reload(!x)
          })

  }


  return (
    <>
    {!showDetails ?
      <h3 onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h3>
      : <button onClick={() => setShowDetails(!showDetails)}>Hide details</button>
    }
      
      {showDetails && (
        <div className="customerDetails">
        <h4>{customer.companyName}</h4>

        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => removeCustomer()}>Delete</button>
        { editing && <CustomerEdit custToEdit={customer} x={x} reload={reload} setMessage={setMessage} setShowMessage={setShowMessage} setIspositive={setIspositive} setEditing={setEditing} setShowDetails={setShowDetails} />}

        { !editing &&
        <table>
          <thead>
            <tr>
              <th>Contact Name</th>
              <th>Contact Title</th>
              <th>Address</th>
              <th>City</th>
              <th>Region</th>
              <th>Postal Code</th>
              <th>Country</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customer.contactName}</td>
              <td>{customer.contactTitle}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>{customer.region}</td>
              <td>{customer.postalCode}</td>
              <td>{customer.country}</td>
              <td>{customer.phone}</td>
            </tr>
          </tbody>
        </table>
        }
        </div>
      )
      }

    </>
  )
}

export default CustomerDetails