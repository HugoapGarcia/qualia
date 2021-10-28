import express from 'express';
import controller from '../controllers/v2/pin';
import { Api } from  '../controllers/v1';

const API = new Api();
const router = express.Router();

router.get('/ping', controller.serverHealthCheck);
router.get('/welcome', API.post);

export = router;