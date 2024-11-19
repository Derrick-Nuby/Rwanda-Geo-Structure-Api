// file location: src/getCells.ts

import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const getCells = (): string[] => {
  return Object.values(data.rwanda).flatMap(province =>
    Object.values(province).flatMap(district =>
      Object.values(district).flatMap(sector => Object.keys(sector))
    )
  );
};

export const getCellsBySector = (province: string, district: string, sector: string): string[] => {
  return Object.keys(data.rwanda[province]?.[district]?.[sector] || {});
};