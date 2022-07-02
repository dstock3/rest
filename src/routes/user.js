import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

// Notice how we don't need to define the /users URI (path) but only the subpaths, because we did this already in the mounting process of the route in the Express application (see src/index.js file). 

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;