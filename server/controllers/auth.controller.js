import User from '../models/users.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from '../../config/config';
import crypto from 'crypto';

const signin = (req, res) => {
    User.findOne({
        "email" : req.query.email
    }, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
           
            if(encryptPassword(req.query.password) == user.hashed_password) {
               const token = jwt.sign({
                    _id: user._id
                }, config.jwSecret)
    
                res.cookie("t", token, {
                    expire: new Date() + 9999
                })
    
                return res.json({
                    token, 
                    user: {_id: user._id, name: user.name, github_name: user.github_name,email: user.email}
                })
            }
            else {
               return res.status(400).json({
                    error: "Email and password not found"
                })  

            }
          
            
        
    })
}

const signout = (req, res) => {
    res.clearCookie("t")
    return res.status('200').json({
        message: "Signed out"
    })    
}
const encryptPassword = (password) => {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', makeSalt())
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  }

 const makeSalt = () => {
    return Math.round((124251967912859124.1234)) + ''
  }

const signinRequired = expressJwt({
    secret: config.jwSecret,
    
});
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