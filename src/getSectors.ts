// file location src/getDistricts.ts

import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const getSectors = (): string[] => {
  return Object.values(data.rwanda).flatMap(province =>
    Object.values(province).flatMap(district => Object.keys(district))
  );
};

export const getSectorsByDistrict = (province: string, district: string): string[] => {
  return Object.keys(data.rwanda[province]?.[district] || {});
};