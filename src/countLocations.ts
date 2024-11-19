import rwandaData from './Rwanda.json';
import { RwandaData } from './types';

const data: RwandaData = rwandaData;

export const countLocations = () => {
  const provinces = Object.keys(data.rwanda).length;

  let districts = 0;
  let sectors = 0;
  let cells = 0;
  let villages = 0;

  Object.values(data.rwanda).forEach(province => {
    districts += Object.keys(province).length;
    Object.values(province).forEach(district => {
      sectors += Object.keys(district).length;
      Object.values(district).forEach(sector => {
        cells += Object.keys(sector).length;
        Object.values(sector).forEach(cell => {
          villages += cell.length;
        });
      });
    });
  });

  return { provinces, districts, sectors, cells, villages };
};