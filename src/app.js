import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';

import { Consultas } from './controllers/consultas.js';



const app = express();
app.use(cors());
app.use(bodyParser.json());



app.use('/consultas',Consultas)

app.use('/', (req, res) => {
  res.send('Wasappppppp!!!');
})

export default app;