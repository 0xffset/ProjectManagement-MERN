import User from '../models/users.model';
import _ from 'loadsh';



const create = (req, res, next) => {
    const objUser = {
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        github_name: req.query.githubname
    }
    const user = new User(objUser);
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
   
     User.findById(req.params.userIdEdit, (err, doc) => {
        if (err) {
             res.status(400).json({
                err
            })
        }
        doc.name = req.query.name;
        doc.email = req.query.email;
        doc.github_name = req.query.githubname;
        if( req.query.password !== 'undefined')  {
            doc.password = req.query.password
        }
        
        doc.updated  = objUser.updated;
        doc.save((err) => {
            if(err) {
                res.status(400).json({
                    err
                })
            }
            else {
                res.json({
                    message: "Updated successfully",
                    user: doc
                })
                return next();
            }
         })

    })       
}
const findUser = (req, res, id) => {
        User.find({_id: req.params.userId}).exec((err, user) => {
        if (err || !user) {
            return res.status('400').json({
                error: "User not found"
            })}

            else {
                return res.json({
                    User: user
                })
            }
    })
}
const readUser = (req, res) => {
    req.pofile.hashed_password = undefined;
    req.pofile.salt = undefined;
    return res.json(req.profile);
}

export default {create, update, readUser, findUser}