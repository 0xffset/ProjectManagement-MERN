import User from '../models/users.model';
import _ from 'loadsh';



const create = (req, res, next) => {
    const objUser = {
        name: req.query.name,
        email: req.query.email,
        password: req.query.password
    }
    const user = new User(objUser);
   
    console.log(objUser)
    user.save((err, result) => {
        if(err) {
            return res.status(400).json({
             err
            })
         }
        res.status(200).json({
            message: "Successfully signed up"
        })
    })
}
const update = (req, res, next) => {
    const objUser = {
        
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        updated: Date.now()
    }
    const user = new User(objUser);
    user = _.extend(user, req.body);
    user.save((err) => {
        return res.status(400).json({
            err
        })
    })
    user.password = undefined;
    user.hashed_password = undefined;
    res.json(user); 
}

export default {create, update}