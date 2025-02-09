import { Router } from 'express';
import { getByLocation, getFromDate, getByOrganizationName, getBySearch } from '../controllers/opportunitiesController.js';
// import { getByLocation, getByOrganizationName} from '../controllers/opportunitiesController.js';

const router = Router();

// Define routes
router.get('/getByLocation', getByLocation);
router.get('/getFromDate', getFromDate);
router.get('/getByOrg', getByOrganizationName);
router.get('/getBySearch', getBySearch);


export default router;
