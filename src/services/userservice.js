import axios from 'axios'

const baseUrl = "https://localhost:7176/api/Users"

//Use userservice.getAll() to fetch all users
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//Use userservice.create to create a new user
const create = newUser => {
    return axios.post(baseUrl, newUser)
    
}
//Use userservice.remove(id) to delete a user by id
const remove = id => {
    return axios.delete(`${baseUrl}/${id}`) 
}

//Use userservice.edit to edit a user
const edit = user => {
    const id = user.userId
    return axios.put(`${baseUrl}/${id}`, cust)
}

export default { getAll, create, remove, edit }

