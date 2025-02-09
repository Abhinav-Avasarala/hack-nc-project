import { Router } from 'express';
import { getByLocation, getOrgBySearch, getByOrganizationName, getAllOrgs, getBySearch, getByUser, getAllEvents, getOrgById } from '../controllers/opportunitiesController.js';
import { get } from 'http';
// import { getByLocation, getByOrganizationName} from '../controllers/opportunitiesController.js';

const router = Router();

// Define routes
router.get('/getByLocation', getByLocation);
//router.get('/getFromDate', getFromDate);
router.get('/getByOrg', getByOrganizationName);
router.get('/getBySearch', getBySearch);
router.get('/getByUser', getByUser);
router.get('/getAllEvents', getAllEvents);
router.get('/getAllOrgs', getAllOrgs);
router.get('/getOrgById', getOrgById);
router.get('/getOrgBySearch', getOrgBySearch);



export default router;
