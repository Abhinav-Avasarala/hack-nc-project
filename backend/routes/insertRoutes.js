import { Router } from 'express';
import { linkUserWithInterest } from '../controllers/insertController.js';

const router = Router();

router.post('/linkUserWithInterest', linkUserWithInterest);

export default router;