import { Router } from 'express';
import { linkUserWithInterest } from '../controllers/insertController.js';
import { getResponse } from '../controllers/gptPrompt.js';

const router = Router();

router.post('/linkUserWithInterest', linkUserWithInterest);
router.get('/getResponse', getResponse);

export default router;