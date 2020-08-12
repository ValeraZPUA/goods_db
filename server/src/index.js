import express from 'express';
import cors from 'cors';
import router from './routers/index';
const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App listening on ${PORT} port!`))