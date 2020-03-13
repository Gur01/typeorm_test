import express, { Router, Response, Request } from 'express';
import {Users} from '../entity'
import {getRepository} from "typeorm";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {

    const userRepository = getRepository(Users);
    const allUsers = await userRepository.find();
    console.log(allUsers);
    res.send("Hello");
});

router.post('/', (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    
    console.log(name,req.body );
    res.send("ok");
    
});

export default router;