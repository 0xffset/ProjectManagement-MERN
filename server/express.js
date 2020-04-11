import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import  compresseion  from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';



const app = express();

//Routers
import userRoutes from './routes/user.routers';
app.use('/', userRoutes)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compresseion());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(Template())
})
export default app;
