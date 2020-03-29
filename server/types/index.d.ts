declare module 'express' {
    interface Request {
        user: { token: string };
        iat: number;
    }
}
