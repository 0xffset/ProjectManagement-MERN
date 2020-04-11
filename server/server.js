import config from './../config/config';
import moongose from 'mongoose';
import app from './express';
import { Template } from 'webpack';

moongose.Promise = global.Promise;
moongose.connect(config.mongoUri);
moongose.connection.on('err', () => {
    throw new Error(`Error to connect ${config.mongoUri}`);
})


app.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`Server runnig on port ${config.port}`);
})