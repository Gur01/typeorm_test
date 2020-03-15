import express, { Router, Response, Request } from 'express';
import { List } from '../entity';
import { getRepository } from 'typeorm';
3;

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const userRepository = getRepository(List);
});

router.get('/:id', async (req: Request, res: Response) => {
    const userRepository = getRepository(List);
});

router.post('/', async (req: Request, res: Response) => {
    const { userId, list } = req.body;
    const userRepository = getRepository(List);
    try {
        const saveList = await userRepository.save({ userId, list });
        res.json(saveList);
    } catch (error) {
        console.log(error);
    }
});

export default router;
