import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/user.route';
import { ResultsRoutes } from './app/modules/results/results.route';

const app: Application = express();

//parsers

app.use(express.json());
app.use(cors());

app.use('/api', UserRoutes);
app.use('/api', ResultsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TGAHS! 🤡🤡');
});

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'API Not found',
  });
});
export default app;
