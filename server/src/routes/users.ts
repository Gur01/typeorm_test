import express, { Router, Response, Request } from 'express';
import { Users } from '../entity';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth';
import { json } from 'express';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const userRepository = getRepository(Users);

    try {
        const allUsers = await userRepository.find();

        res.json(allUsers);
    } catch (error) {
        console.log(error);
    }
});

// router.get('/user/:id', async (req: Request, res: Response) => {
//     const userRepository = getRepository(Users);
//     const id = Number(req.params.id);

//     try {
//         const user = await userRepository.findOne({ id });
//         res.json(user);
//     } catch (error) {
//         console.log(error);
//     }
// });

// interface NewRequest extends Request {
//     user: { id: number };
//     iat: number;
// }

router.get('/user/profile', auth, async (req: any, res: Response) => {
    const userId = req.user.id;
    const userRepository = getRepository(Users);

    try {
        const user = await userRepository.findOne({
            select: ['name', 'email'],
            where: { id: userId },
        });
        console.log(user);

        res.json(user);
    } catch (error) {
        console.log(error);
    }
});

router.post('/user/register', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
        res.status(400).send();
    }

    const userRepository = getRepository(Users);

    try {
        const user = await userRepository.findOne({ email });

        if (user) {
            res.status(400).json({ type: 'error', message: 'User with this email already exists' });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userRepository.save({ name, email, password: hashedPassword });

        const token = jwt.sign(
            { user: { id: newUser.id } },
            process.env.ACCESS_TOKEN_SECRET as string,
        );

        res.json(token);
    } catch (error) {
        res.status(500).send();
        console.log(error);
    }
});

router.post('/user/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !email) {
        res.status(401).json('Unauthorized');
        return;
    }
    //TODO add error handling

    const userRepository = getRepository(Users);

    try {
        const user = await userRepository.findOne({ email });

        if (!user) {
            res.status(401).json('Unauthorized');
        } else {
            const checking = await bcrypt.compare(password, user.password);

            if (checking) {
                const token = jwt.sign(
                    { user: { id: user.id } },
                    process.env.ACCESS_TOKEN_SECRET as string,
                );

                res.json(token);
            } else {
                res.status(401).json('Invalid username or password');
            }
        }
    } catch (error) {
        console.log(error);
    }
});

export default router;
