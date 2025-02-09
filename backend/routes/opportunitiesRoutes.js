import { Router } from 'express';
import { getByLocation, getFromDate, getByOrganizationName, getBySearch, getByUser } from '../controllers/opportunitiesController.js';
import { get } from 'http';
// import { getByLocation, getByOrganizationName} from '../controllers/opportunitiesController.js';

const router = Router();

// Define routes
router.get('/getByLocation', getByLocation);
router.get('/getFromDate', getFromDate);
router.get('/getByOrg', getByOrganizationName);
router.get('/getBySearch', getBySearch);
router.get('/getByUser', getByUser);



export default router;
