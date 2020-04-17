 import axios from 'axios';
 
 const createNewUser = (user) => {
  return  axios.post(`/api/users?name=${user.name}&email=${user.email}&password=${user.password }`)
        .then((res) => {
            return res
        })
        .catch((err) => {return err} )
}


const signin = (user) => {
    return  axios.post(`/auth/signin/?email=${user.email}&password=${user.password}`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {return err})
}

const SignOut = () => {
    return fetch('/auth/signout/', {
    }).then((res) =>{
        return res.json();

    }).catch((err) => console.log(err));
}

export {
    createNewUser,
    signin
}