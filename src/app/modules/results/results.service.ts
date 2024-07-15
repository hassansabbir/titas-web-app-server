import { ResultsModel } from './results.model';

const getResultsFromDB = async () => {
  const result = await ResultsModel.find({}, { __v: 0 }).sort({ year: -1 });
  return result;
};

export const ResultsServices = {
  getResultsFromDB,
};
