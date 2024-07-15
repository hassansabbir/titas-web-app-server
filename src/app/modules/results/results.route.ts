import express from 'express';
import { ResultsControllers } from './results.controller';

const router = express.Router();

router.get('/results', ResultsControllers.getResults);

export const ResultsRoutes = router;
