import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';
import models from './models';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

app.use((req, res, next) => {
    req.me = users[1];
    next();
});

app.get('/session', (req, res) => {
    return res.send(users[req.me.id]);
});
  
app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});
  
app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
      userId: req.me.id,
    };
  
    messages[id] = message;
  
    return res.send(message);
});

app.delete('/messages/:messageId', (req, res) => {
    const {
      [req.params.messageId]: message,
      ...otherMessages
    } = messages;
  
    messages = otherMessages;
  
    return res.send(message);
});
  
  
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);