import express, { Router, Response, Request } from 'express';
import { Users } from '../entity';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

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

    try {
        const salt = String(bcrypt.genSalt());
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(salt, hashedPassword);

        const userRepository = getRepository(Users);
        const user = await userRepository.save({ name, email, hashedPassword });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
});

export default router;
