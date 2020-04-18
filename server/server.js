import config from './../config/config';
import mongoose from 'mongoose';
import app from './express';
import { Template } from 'webpack';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
     useNewUrlParser: true ,
     useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);




app.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`Server running on port ${config.port}`);


})