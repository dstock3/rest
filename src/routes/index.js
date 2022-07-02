import session from './session';
import user from './user';
import message from './message';

// Here we import all routes from their dedicated files and export them as an object. Afterward, they are available in the src/index.js file.

export default {
  session,
  user,
  message,
};