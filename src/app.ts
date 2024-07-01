import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use(UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TGAHS! 🤡🤡');
});

export default app;
