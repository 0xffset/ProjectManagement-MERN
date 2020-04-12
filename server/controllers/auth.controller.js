import User from '../models/users.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from '../../config/config';

const signin = (req, res) => {
    User.findOne({
        "email" : req.query.email
    }, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                err: "User not found"
            })
        }
            if(!user.authenticate(req.query.password)) {
                res.status('401').send({
                    error: "Email and password not found."
                })
            }

            const token = jwt.sign({
                _id: user._id
            }, config.jwSecret)

            res.cookie("t", token, {
                expire: new Date() + 9999
            })

            return res.json({
                token, 
                user: {_id: user._id, name: user.name, email: user.email}
            })
        
    })
}

const signout = (req, res) => {
    res.clearCookie("t")
    return res.status('200').json({
        message: "Signed out"
    })    
}

const signinRequired = expressJwt({
    secret: config.jwSecret,
    userProperty: 'auth'
})
const isAuthorizate = (req, res, next) => {
    const obj = {
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        _id: req.query._id,
        auth: req.query.auth
}
    if(!(obj)) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    }
    next()
}

export default {signin, signout, signinRequired, isAuthorizate}