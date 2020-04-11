import User from '../models/users.model';
import _ from 'loadsh';

import errHelpers from '../helpers/dbErrorHandler';

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
const update = (req, res, next) => {}

export default {create, update}