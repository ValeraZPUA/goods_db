import express from 'express';
import { createGood } from "../controllers/goods.controller";
const goodRouter = express.Router();

goodRouter.post('/', createGood)

export default goodRouter;