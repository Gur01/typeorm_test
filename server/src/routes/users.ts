import express, { Router, Response, Request } from 'express';
import { Users } from '../entity';
import { getRepository } from 'typeorm';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const userRepository = getRepository(Users);

    try {
        const allUsers = await userRepository.find();

        res.json(JSON.stringify(allUsers));
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const userRepository = getRepository(Users);
    const id = Number(req.params.id);

    try {
        const user = await userRepository.findOne({ id });
        res.json(JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const userRepository = getRepository(Users);
    try {
        const user = await userRepository.save({ name, email, password });
        res.json(user);
    } catch (e) {
        console.log(e);
    }
});

export default router;
