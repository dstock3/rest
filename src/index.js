import 'dotenv/config';
import models from './models';
import routes from './routes';
import express from 'express';

const app = express();

//This extracts the entire body portion of an incoming request stream and makes it accessible on req.body. Now the body with the message's text is accessible in the request whether it is send by a regular POST request or a POST request from a HTML form. Both options should work, because all data should be received and send as JSON payload now.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Each modular route receives a URI which in REST is our resource

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

//Every one of our modular routes from Express Router is mounted to our Express application with a dedicated URI in the src/index.js file now. The modular routes in the src/routes folder only take care of their sub paths and their implementation details while the mounting in the src/index.js file takes care of the main path and the mounted modular route that is used there. 


// This is a simple version of a middleware that determines a pseudo authenticated user that is sending the request. We pass the models in our custom application-level middleware to all routes via a dedicated context object.
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

//You can imagine how such middleware could be used later to intercept each incoming request to determine from the incoming HTTP headers whether the request comes from an authenticated user or not

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);