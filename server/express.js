import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import  compresseion  from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';
import userRoutes from './routes/user.routers';


const app = express();






app.use(cookieParser());
app.use(compresseion());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Routers
app.use('/', userRoutes)
app.get('/', (req, res) => {
    res.status(200).send(Template())
})

export default app;
