import axios from 'axios';

export default axios.create({
  baseURL: 'https://mern-food-delivery-app.herokuapp.com/api',
});

//"start": "node ./backend/server.js",
//"start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"