import express, { Response, Request, NextFunction } from 'express';
import morgan from 'morgan';
// import createError from 'http-errors';
import dotenv from "dotenv";
import router from './routes';
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

//router
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router.users);

// logger info
app.use(morgan('dev'));

// catch 404 and forward to error handler
// app.use(function(req: Request, res: Response, next:NextFunction) {
//     // next(createError(404));
//   });

export default app;