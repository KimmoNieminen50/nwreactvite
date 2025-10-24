import axios from 'axios'

const baseUrl = "https://localhost:7176/api/Customers"

//Use customerservice.getAll() to fetch all customers
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//Use customerservice.create to create a new customer
const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)
    
}
//Use customerservice.remove(id) to delete a customer by id
const remove = id => {
    return axios.delete(baseUrl + "/" + id) 
}

//Use customerservice.edit to edit a customer
const edit = cust => {
    const id = cust.customerId
    return axios.put(`${baseUrl}/${id}`, cust)
}

export default { getAll, create, remove, edit }

