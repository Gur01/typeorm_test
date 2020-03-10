import express, { Router, Response, Request } from 'express';
const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('hhhhhello');
});
router.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    
});

export default router;