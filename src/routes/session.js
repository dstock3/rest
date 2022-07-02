import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

// The session route in src/routes/session.js file only returns a pseudo authenticated user.

export default router;