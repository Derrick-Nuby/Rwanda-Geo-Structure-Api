# Rwanda Geo Structure

[![npm version](https://badge.fury.io/js/rwanda-geo-structure.svg)](https://badge.fury.io/js/rwanda-geo-structure)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/rwanda-geo-structure.svg)](https://www.npmjs.com/package/rwanda-geo-structure)
[![GitHub issues](https://img.shields.io/github/issues/Derrick-Nuby/rwanda-geo-structure.svg)](https://github.com/Derrick-Nuby/rwanda-geo-structure/issues)
[![GitHub stars](https://img.shields.io/github/stars/Derrick-Nuby/rwanda-geo-structure.svg)](https://github.com/Derrick-Nuby/rwanda-geo-structure/stargazers)
[![Build Status](https://travis-ci.org/Derrick-Nuby/rwanda-geo-structure.svg?branch=main)](https://travis-ci.org/Derrick-Nuby/rwanda-geo-structure)
[![Coverage Status](https://coveralls.io/repos/github/Derrick-Nuby/rwanda-geo-structure/badge.svg?branch=main)](https://coveralls.io/github/Derrick-Nuby/rwanda-geo-structure?branch=main)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/Derrick-Nuby/rwanda-geo-structure/maintainability)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Rwanda Geo Structure is a comprehensive JavaScript package that provides easy access to Rwanda's administrative divisions. It allows developers to retrieve and work with data about provinces, districts, sectors, cells, and villages in Rwanda, streamlining the process of collecting and managing location-based data for applications focused on Rwanda.

## Table of Contents

- [Installation](#installation)
- [API Reference](#api-reference)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Rwanda Geo Structure package, run the following command in your project directory:

```bash
npm install rwanda-geo-structure
```

or if you're using Yarn:

```bash
yarn add rwanda-geo-structure
```

## API Reference

### `getCountry()`

Returns the country name.

- **Returns**: `string` - Always returns "Rwanda"

### `getProvinces()`

Retrieves all provinces in Rwanda.

- **Returns**: `string[]` - An array of province names

### `getDistricts()`

Retrieves all districts in Rwanda.

- **Returns**: `string[]` - An array of district names

### `getDistrictsByProvince(province: string)`

Retrieves all districts within a specified province.

- **Parameters**:

- `province: string` - The name of the province

- **Returns**: `string[]` - An array of district names within the specified province

### `getSectors()`

Retrieves all sectors in Rwanda.

- **Returns**: `string[]` - An array of sector names

### `getSectorsByDistrict(province: string, district: string)`

Retrieves all sectors within a specified district.

- **Parameters**:

- `province: string` - The name of the province
- `district: string` - The name of the district

- **Returns**: `string[]` - An array of sector names within the specified district

### `getCells()`

Retrieves all cells in Rwanda.

- **Returns**: `string[]` - An array of cell names

### `getCellsBySector(province: string, district: string, sector: string)`

Retrieves all cells within a specified sector.

- **Parameters**:

- `province: string` - The name of the province
- `district: string` - The name of the district
- `sector: string` - The name of the sector

- **Returns**: `string[]` - An array of cell names within the specified sector

### `getVillages()`

Retrieves all villages in Rwanda.

- **Returns**: `string[]` - An array of village names

### `getVillagesByCell(province: string, district: string, sector: string, cell: string)`

Retrieves all villages within a specified cell.

- **Parameters**:

- `province: string` - The name of the province
- `district: string` - The name of the district
- `sector: string` - The name of the sector
- `cell: string` - The name of the cell

- **Returns**: `string[]` - An array of village names within the specified cell

### `getRandomLocation()`

Generates a random location in Rwanda, including province, district, sector, cell, and village.

- **Returns**: `Object` - An object containing randomly selected location data

```typescript
{
  province: string;
  district: string;
  sector: string;
  cell: string;
  village: string;
}
```

### `countLocations()`

Counts the number of administrative divisions at each level in Rwanda.

- **Returns**: `Object` - An object containing the count of each administrative division

```typescript
{
  provinces: number;
  districts: number;
  sectors: number;
  cells: number;
  villages: number;
}
```

## Usage Examples

Here are some examples of how to use the Rwanda Geo Structure package in your projects:

### Getting all provinces

```javascript
import { getProvinces } from "rwanda-geo-structure";

const provinces = getProvinces();
console.log(provinces);
// Output: ['Eastern Province', 'Kigali City', 'Northern Province', 'Southern Province', 'Western Province']
```

### Getting districts in a specific province

```javascript
import { getDistrictsByProvince } from "rwanda-geo-structure";

const districts = getDistrictsByProvince("Kigali City");
console.log(districts);
// Output: ['Gasabo', 'Kicukiro', 'Nyarugenge']
```

### Getting sectors in a specific district

```javascript
import { getSectorsByDistrict } from "rwanda-geo-structure";

const sectors = getSectorsByDistrict("Kigali City", "Gasabo");
console.log(sectors);
// Output: ['Bumbogo', 'Gatsata', 'Gikomero', 'Gisozi', 'Jabana', 'Jali', 'Kacyiru', 'Kimihurura', 'Kimironko', 'Kinyinya', 'Ndera', 'Nduba', 'Remera', 'Rusororo', 'Rutunga']
```

### Getting a random location

```javascript
import { getRandomLocation } from "rwanda-geo-structure";

const randomLocation = getRandomLocation();
console.log(randomLocation);
// Output:
// {
//   province: 'Southern Province',
//   district: 'Huye',
//   sector: 'Ngoma',
//   cell: 'Butare',
//   village: 'Akabuye'
// }
```

### Counting all administrative divisions

```javascript
import { countLocations } from "rwanda-geo-structure";

const counts = countLocations();
console.log(counts);
// Output:
// {
//   provinces: 5,
//   districts: 30,
//   sectors: 416,
//   cells: 2148,
//   villages: 14837
// }
```

## Authors

- [@Derrick-Nuby](https://www.github.com/Derrick-Nuby)

## Contributing

Contributions to the Rwanda Geo Structure package are welcome! Here are some ways you can contribute:

1. Report bugs or request features by opening an issue.
2. Submit pull requests to fix bugs or add new features.
3. Improve documentation or add usage examples.

Please ensure that your code adheres to the existing style and that all tests pass before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information or support, please open an issue on the GitHub repository.
