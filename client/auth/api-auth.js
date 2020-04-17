 import axios from 'axios';
 
 const createNewUser = (user) => {
  return  axios.post(`/api/users?name=${user.name}&email=${user.email}&password=${user.password }`)
        .then((res) => {
            return res
        })
        .catch((err) => console.log(err) )
}


const SignIn = () => {
    return fetch('/auth/signin/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    })
    .then((res) =>{
        return res.json();

    }).catch((err) => console.log(err));
}

const SignOut = () => {
    return fetch('/auth/signout/', {
    }).then((res) =>{
        return res.json();

    }).catch((err) => console.log(err));
}

export {
    createNewUser
}