import express from 'express';
import cors from 'cors';
import router from './router';
import database from './models';
import { serverPort as port } from './environment';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(router);

try {
  database.connect();
  app.listen(port, () => console.log(`server: http://localhost:${port}`));
} catch (err) {
  console.error(err);
}
