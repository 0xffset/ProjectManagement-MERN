import axios from 'axios';

const fetchDataUser = (idUser) => {
    return axios.get(`/api/users/${idUser}`)
        .then((res) => {
            return res.data
        })
}

export {
    fetchDataUser
}