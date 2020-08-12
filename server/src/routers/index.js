import express from 'express';
import clientRouter from './client.router.js';
import goodRouter from './good.router.js';
import errorHandler from "../middlewares/errorHandler";
const router = express.Router();

router.use('/client', clientRouter)
router.use('/good', goodRouter)
router.use(errorHandler)

export default router;


