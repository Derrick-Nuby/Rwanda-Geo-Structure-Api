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