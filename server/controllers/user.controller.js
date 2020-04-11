import User from '../models/users.model';
import express from 'express';
const router = express.Router();
import _ from 'loadsh';
const userCtrl = {};
//import erroHandler from './erro.controller';

const create = (req, res, next) => {
    const user = new User(req.body);
    const {name} = req.body;
    console.log(name)
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