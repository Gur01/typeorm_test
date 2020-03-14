import express, { Router, Response, Request } from 'express';
import { Users } from '../entity';
import { getRepository } from 'typeorm';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const userRepository = getRepository(Users);
    const allUsers = await userRepository.find();
    console.log(allUsers);
    res.send('Hello');
});

router.post('/', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    const userRepository = getRepository(Users);
    try {
        const user = await userRepository.save({ name, email, password });
        res.json(user);
    } catch (e) {
        console.log(e);
    }
});

export default router;
