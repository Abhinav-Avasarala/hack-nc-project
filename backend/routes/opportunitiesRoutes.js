import { Router } from 'express';

import { getByLocation, getFromDate, getByOrganizationName } from '../controllers/opportunitiesController.js';

const router = Router();

router.get('getlocation', getByLocation);
router.get('getdate', getFromDate);
router.get('getbyorg', getByOrganizationName);

