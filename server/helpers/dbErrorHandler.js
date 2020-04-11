const errMessage = (err) => {
    let message = '';
    if(err.code) {
        switch (err.code) {
            case 11000:
            case 10001:
                message = getUniqueErrorMessage(err)    
                break;
        
            default:
                message = 'Something is wrong';
                break;
        }
    } else {
        for (let errN in err.erros) {
            if(err.errors[errN].message) {
                message = err.message
            }
        }
        return message;
    }
}

export default {errMessage}

const  getUniqueErrorMessage = (err) => {
    let output;
    try {
        let name = 
        err.message.substring(err.message.lastIndexOf('.$') + 2,
        err.message.lastIndexOf('_1'));
        output = name.charAt(0).toUpperCase() + name.slice(1) +
        'already exists';
    } catch (error) {
        output = 'Unique field already exists';
    }
    return output;
}