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

    if(!name && !email && !password) {
        res.status(400).send();
    }

    const userRepository = getRepository(Users);

    try {
        const user = await userRepository.findOne({email});

        if(!user) {
            res.status(400).send('User with this email already exists');
        } 

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(salt, hashedPassword);
    
        const userRepository = getRepository(Users);
        await userRepository.save({ name, email, password: hashedPassword });
        res.json(hashedPassword);
    } catch (error) {
        res.status(500).send();
        console.log(error);
    }

});

router.post('/login', async(req: Request, res: Response) => {
    const {email, password} = req.body;

    if(!email || !email) {
        res.status(500).send('wrong credentials');
    }

    const userRepository = getRepository(Users);

    try {
        const user = await userRepository.findOne({email});

        if(!user) {

            res.status(400).send('wrong credentials');

        } else {

            const checking = await bcrypt.compare(password, user.password);

            if(checking) {
                res.status(200).send('success')
            } else {
                res.status(400).send('not allowed')
            }
        }

    } catch (error) {
        console.log(error);
        
    }


})

export default router;
