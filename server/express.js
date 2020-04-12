import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import  compression  from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';
import userRoutes from './routes/user.routers';
import userAuth from './routes/auth.routes';


const app = express();






app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError') {
        res.status(401).json({
            error: `${err.name} ${err.message}`
        })
    }
})
//Routers
app.use('/', userRoutes)
app.use('/', userAuth)
app.get('/', (req, res) => {
    res.status(200).send(Template())
})

export default app;
