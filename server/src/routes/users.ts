import express, { Router, Response, Request } from 'express';
import {Users} from '../entity'
import {getRepository} from "typeorm";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {

    const userRepository = getRepository(Users);
    const allUsers = await userRepository.find();
    console.log(allUsers);
    // res.send(users);
});
router.post('/', (req: Request, res: Response) => {
    const {name, email, password} = req.body;
        
        console.log(name,req );
    
});

export default router;