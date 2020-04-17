

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

const signout = (ch) => {
    if (typeof window == 'undefined') {
        sessionStorage.removeItem('jwt')
        ch()
        Signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan UTC; path=/;"
        })
    }
    
}

export  {
    isAuthenticated
}
