import { Request, Response } from 'express';
import { ResultsServices } from './results.service';

const getResults = async (req: Request, res: Response) => {
  try {
    const results = await ResultsServices.getResultsFromDB();
    res.status(200).json({
      success: true,
      message: 'Results Fetched Successfully',
      data: results,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const ResultsControllers = {
  getResults,
};
