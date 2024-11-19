// file location src/getDistricts.ts

import { countLocations } from "../countLocations";
import { getCells, getCellsBySector } from "../getCells";
import { getCountry } from "../getCountry";
import { getDistricts, getDistrictsByProvince } from "../getDistricts";
import { getProvinces } from "../getProvinces";
import { getRandomLocation } from "../getRandomLocation";
import { getSectors, getSectorsByDistrict } from "../getSectors";
import { getVillages, getVillagesByCell } from "../getVillages";

console.log("Country:", getCountry());
console.log("Provinces:", getProvinces());
console.log("Districts:", getDistricts());
console.log("Districts in Province 'East':", getDistrictsByProvince('East'));
console.log("Sectors:", getSectors());
console.log("Sectors in District 'Bugesera':", getSectorsByDistrict('East', 'Bugesera'));
console.log("Cells:", getCells());
console.log("Cells in Sector 'Gashora':", getCellsBySector('East', 'Bugesera', 'Gashora'));
console.log("Villages:", getVillages());
console.log("Villages in Cell 'Biryogo':", getVillagesByCell('East', 'Bugesera', 'Gashora', 'Biryogo'));
console.log("Random Location:", getRandomLocation());

const counts = countLocations();
console.log("Counts:", counts);