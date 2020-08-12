import express from 'express';
import { getClientGoods, createClient, getAllClients, getClientById, deleteClientById, updateClientById }  from "../controllers/client.controller";
const clientRouter = express.Router();

clientRouter.get('/', getAllClients);
clientRouter.get('/:clientId', getClientById);
clientRouter.post('/', createClient);
clientRouter.delete('/:clientId', deleteClientById);
clientRouter.patch('/:clientId', updateClientById);
clientRouter.get('/tasks/:clientId', getClientGoods);

export default clientRouter;

