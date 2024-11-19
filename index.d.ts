// file location: /index.d.ts

declare module 'rwanda-geo-structure' {
  export function getProvinces(): string[];
  export function getDistrictsByProvince(province: string): string[];
  export function getSectorsByDistrict(province: string, district: string): string[];
  export function getCellsBySector(province: string, district: string, sector: string): string[];
  export function getVillagesByCell(province: string, district: string, sector: string, cell: string): string[];
  export function getCountry(): string;
  export function getDistricts(): string[];
  export function getSectors(): string[];
  export function getCells(): string[];
  export function getVillages(): string[];
  export function getRandomLocation(): {
    province: string;
    district: string;
    sector: string;
    cell: string;
    village: string;
  };
  export function countLocations(): {
    provinces: number;
    districts: number;
    sectors: number;
    cells: number;
    villages: number;
  };

  export interface RwandaData {
    rwanda: {
      [province: string]: Province;
    };
  }

  export interface Province {
    [district: string]: District;
  }

  export interface District {
    [sector: string]: Sector;
  }

  export interface Sector {
    [cell: string]: string[];
  }
}