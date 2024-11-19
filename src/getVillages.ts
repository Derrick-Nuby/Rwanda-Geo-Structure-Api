import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const getVillages = (): string[] => {
  return Object.values(data.rwanda).flatMap(province =>
    Object.values(province).flatMap(district =>
      Object.values(district).flatMap(sector =>
        Object.values(sector).flatMap(cell => cell)
      )
    )
  );
};

export const getVillagesByCell = (province: string, district: string, sector: string, cell: string): string[] => {
  return data.rwanda[province]?.[district]?.[sector]?.[cell] || [];
};