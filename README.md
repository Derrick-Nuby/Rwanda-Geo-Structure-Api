# Rwanda Geo Structure

[![npm version](https://badge.fury.io/js/rwanda-geo-structure.svg)](https://badge.fury.io/js/rwanda-geo-structure)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/rwanda-geo-structure.svg)](https://www.npmjs.com/package/rwanda-geo-structure)
[![GitHub issues](https://img.shields.io/github/issues/Derrick-Nuby/rwanda-geo-structure.svg)](https://github.com/Derrick-Nuby/rwanda-geo-structure/issues)
[![GitHub stars](https://img.shields.io/github/stars/Derrick-Nuby/rwanda-geo-structure.svg)](https://github.com/Derrick-Nuby/rwanda-geo-structure/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://derrick.rw/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/derrick-nuby/)

Rwanda Geo Structure is a comprehensive JavaScript package that provides easy access to Rwanda's administrative divisions. It allows developers to retrieve and work with data about provinces, districts, sectors, cells, and villages in Rwanda, streamlining the process of collecting and managing location-based data for applications focused on Rwanda.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Available Functions](#available-functions)
- [contributing](#contributing)
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

## Usage

Import the functions you need:

```javascript
import { getProvinces, getDistrictsByProvince } from "rwanda-geo-structure";
```

## Documentation

For detailed usage instructions, examples, and API reference, please visit our comprehensive documentation:

[Rwanda Geo Structure Documentation](https://derrick-nuby.github.io/Rwanda-Geo-Structure/)

## Available Functions

Here's a summary of the available functions in the rwanda-geo-structure package:

- [getCountry()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getcountry): Returns the country name (always "Rwanda").
- [getProvinces()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getprovinces): Retrieves all provinces in Rwanda.
- [getDistricts()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getdistricts): Retrieves all districts in Rwanda.
- [getDistrictsByProvince(province)](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getdistrictsbyprovinces): Retrieves all districts within a specified province.
- [getSectors()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getsectors): Retrieves all sectors in Rwanda.
- [getSectorsByDistrict(province, district)](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getsectorsbydistrict): Retrieves all sectors within a specified district.
- [getCells()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getcells): Retrieves all cells in Rwanda.
- [getCellsBySector(province, district, sector)](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getcellsbysector): Retrieves all cells within a specified sector.
- [getVillages()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getvillages): Retrieves all villages in Rwanda.
- [getVillagesByCell(province, district, sector, cell)](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getvillagesbycell): Retrieves all villages within a specified cell.
- [getRandomLocation()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#getrandomlocation): Generates a random location in Rwanda.
- [countLocations()](https://derrick-nuby.github.io/Rwanda-Geo-Structure/#countlocations): Counts the number of administrative divisions at each level in Rwanda.

For detailed explanations, parameters, return values, and usage examples, please refer to our [documentation](https://derrick-nuby.github.io/Rwanda-Geo-Structure/).

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
