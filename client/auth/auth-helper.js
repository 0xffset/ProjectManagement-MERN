

const authenticate = (jwt, ch) => {
    if(typeof window !== 'undefined') {
        sessionStorage.setItem('jwt', JSON.stringify(jwt));
        ch()
        
    }
}

const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if(sessionStorage.getItem('jwt'))
    {   
        return JSON.parse(sessionStorage.getItem('jwt'))
    }
    else {
        return false
    }

}

const signout = () => {
        return sessionStorage.removeItem('jwt')
}

export  {
    authenticate,
    isAuthenticated,
    signout
}
