// import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

type User = {
    user: { id: number };
    iat: number;
};

// interface NewRequest extends Request {
//     user: { id: number };
//     iat: number;
// }

const authenticate = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
        return res.sendStatus(401);
    }
    try {
        const decoded = jwt.verify(
            token as string,
            process.env.ACCESS_TOKEN_SECRET as string,
        ) as User;

        req.user = decoded.user;
    } catch (error) {
        console.error(error);
        return res.sendStatus(403).json({ type: 'error', message: 'Not authorised' });
    }
    next();
};

export default authenticate;
