import { Schema, model } from 'mongoose';
import { TResults } from './results.interface';

const resultsSchema = new Schema<TResults>(
  {
    key: { type: String, required: [true, 'key is required'] },
    board: { type: String, required: [true, 'board is required'] },
    year: { type: Number, required: [true, 'year is required'] },
    appeared: { type: Number, required: [true, 'appeared is required'] },
    passed: { type: Number, required: [true, 'passed is required'] },
    failed: { type: Number, required: [true, 'failed is required'] },
    aPlus: { type: Number, required: [true, 'aPlus is required'] },
    passRate: { type: Number, required: [true, 'passRate is required'] },
    boardRank: { type: Number, required: [true, 'boardRank is required'] },
    nationalRank: {
      type: Number,
      required: [true, 'nationalRank is required'],
    },
    districtRank: {
      type: Number,
      required: [true, 'districtRank is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const ResultsModel = model<TResults>('Results', resultsSchema);
