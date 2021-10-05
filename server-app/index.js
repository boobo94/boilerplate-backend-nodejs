/* eslint-disable import/first */
require('dotenv').config();

import express from 'express';
import cors from 'cors';
// import morgan from 'morgan';
import router from './routers';
import { InitDB } from './database';

const app = express();

app.use(cors());
// app.use(morgan('common'));

app.use(express.json({ limit: '2mb' }));

// initialize router
app.use('/', router);

// initialize database
InitDB();

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`Server is up and running on port ${process.env.PORT}`));
