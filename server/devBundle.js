import config from '../config/config';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './../webpack.config.client';
const complite = (app) => {
    if(config.env === "development") {
        const compliter = webpack(webpackConfig);
        const middleware = webpackDevMiddleware(compliter, {
            publicPath: webpackConfig.output.publicPath
        })
        app.use(middleware);
        app.use(webpackHotMiddleware(compliter));
    }
}

export default {complite}