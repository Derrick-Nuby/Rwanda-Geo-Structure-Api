import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const getDistricts = (): string[] => {
  return Object.values(data.rwanda).flatMap(province => Object.keys(province));
};

export const getDistrictsByProvince = (province: string): string[] => {
  return Object.keys(data.rwanda[province] || {});
};