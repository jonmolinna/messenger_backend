import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import Pusher from 'pusher';

import { PORT, MONGO_URI, PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET } from './config.js';
import routes from './router/router.js';

// App Config
const app = express();
const port = PORT

const pusher = new Pusher({
    appId: PUSHER_APP_ID,
    key: PUSHER_KEY,
    secret: PUSHER_SECRET,
    cluster: "us2",
    useTLS: true
});

// Middleware
app.use(cors());
app.use(express.json());

// DB Config
const mongo_uri = MONGO_URI;
mongoose.connect(mongo_uri);

mongoose.connection.once('open', () => {
    console.log('DB Connected');

    const changeStream = mongoose.connection.collection('messages').watch();

    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            pusher.trigger('messages', 'newMessage', {
                'change': change
            })
        } else {
            console.log('Hay un error')
        }
    });
});

// Rutas
app.get('/', (req, res) => res.status(200).json({ msg: "I am from Backend " }));
app.use('/api', routes);


// Listen
app.listen(port, () => console.log('http://localhost:', port));