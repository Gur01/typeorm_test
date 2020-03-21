import express, { Response, Request, NextFunction } from 'express';
import morgan from 'morgan';
// import createError from 'http-errors';
import dotenv from 'dotenv';
import router from './routes';
dotenv.config();
const app = express();

// middleware init
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
//router
app.use('/api/users', router.users);
app.use('/api/lists', router.lists);

// catch 404 and forward to error handler
// app.use(function(req: Request, res: Response, next:NextFunction) {
//     // next(createError(404));
//   });

export default app;
