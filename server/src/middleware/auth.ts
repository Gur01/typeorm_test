import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return res.sendStatus(401);
    }
    jwt.verify(
        token as string,
        process.env.ACCESS_TOKEN_SECRET as string,
        (error: any, user: any) => {
            if (error) return res.sendStatus(403);
            req.user = user;
            next();
        },
    );
};

export default authenticate;
