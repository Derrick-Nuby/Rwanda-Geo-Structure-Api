import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const getProvinces = (): string[] => {
  return Object.keys(data.rwanda);
};