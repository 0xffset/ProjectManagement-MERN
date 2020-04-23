import axios from 'axios';

const fetchDataUser = (idUser) => {
    return axios.get(`/api/users/${idUser}`)
        .then((res) => {
            return res.data
        })
}

const updateUser = (obj) => {
    return axios.post(`/api/edit/user/${obj.id}?name=${obj.name}&email=${obj.email}&password=${obj.password}`)
        .then(res => {
            return res.data
        })
}

export {
    fetchDataUser,
    updateUser
}