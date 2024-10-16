import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.use(express.static('client/dist'));


// TODO: Implement middleware for parsing JSON and urlencoded form data

    app.use((_req, _res, next) => {
        if (_req.headers['content-type'] === 'application/json') {
            app.use(express.json());
        }
        else {
            app.use(express.urlencoded());
        }

    });
    app.use();

// TODO: Implement middleware to connect the routes
app.use(routes);


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
