import User from '../models/users.model';
import _ from 'loadsh';
//import erroHandler from './erro.controller';

const create = (req, res, next) => {
    const user = new User(req.body);
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