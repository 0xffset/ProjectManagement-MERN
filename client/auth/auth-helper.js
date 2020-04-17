

authenticate = (jwt, ch) => {
    if(typeof window !== 'undefined') {
        sessionStorage.setItem('jwt', JSON.stringify(jwt));
        ch()
    }
}

isAuthenticated = () => {
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

Signout = (ch) => {
    if (typeof window == 'undefined') {
        sessionStorage.removeItem('jwt')
        ch()
        Signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan UTC; path=/;"
        })
    }
    
}

export {isAuthenticated}
