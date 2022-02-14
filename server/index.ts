import express from 'express';
import cors from 'cors';
import router from './middleware/router';
import database from './models';
import { serverPort as port } from './environment';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

try {
  database.connect();
  app.listen(port, () => console.log(`server: http://localhost:${port}`));
} catch (err) {
  console.error(err);
}
