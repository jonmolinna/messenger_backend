import express from "express";
import cors from 'cors';
import mongoose from "mongoose";

import { PORT, MONGO_URI } from './config.js';
import routes from './router/router.js';

// App Config
const app = express();
const port = PORT

// Middleware
app.use(cors());
app.use(express.json());

// DB Config
const mongo_uri = MONGO_URI;
mongoose.connect(mongo_uri);

mongoose.connection.once('open', () => {
    console.log('DB Connected');
});

// Rutas
app.get('/', (req, res) => res.status(200).json({ msg: "I am from Backend " }));
app.use('/api', routes);


// Listen
app.listen(port, () => console.log('http://localhost:', port));