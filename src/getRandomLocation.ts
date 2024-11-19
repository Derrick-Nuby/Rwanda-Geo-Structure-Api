// file location src/getRandomLocation.ts

import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const getRandomLocation = () => {
  const provinces = Object.keys(data.rwanda);
  const province = provinces[Math.floor(Math.random() * provinces.length)];

  const districts = Object.keys(data.rwanda[province]);
  const district = districts[Math.floor(Math.random() * districts.length)];

  const sectors = Object.keys(data.rwanda[province][district]);
  const sector = sectors[Math.floor(Math.random() * sectors.length)];

  const cells = Object.keys(data.rwanda[province][district][sector]);
  const cell = cells[Math.floor(Math.random() * cells.length)];

  const villages = data.rwanda[province][district][sector][cell];
  const village = villages[Math.floor(Math.random() * villages.length)];

  return {
    province,
    district,
    sector,
    cell,
    village
  };
};