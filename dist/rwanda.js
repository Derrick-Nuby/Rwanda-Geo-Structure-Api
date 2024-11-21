"use strict";
// file location: src/data/Rwanda.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLocations = exports.getRandomLocation = exports.getVillagesByCell = exports.getVillages = exports.getCellsBySector = exports.getCells = exports.getSectorsByDistrict = exports.getSectors = exports.getDistrictsByProvince = exports.getDistricts = exports.getProvinces = exports.getCountry = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
// data import
var data = Rwanda_json_1.default;
// functions
var getCountry = function () {
    return 'Rwanda';
};
exports.getCountry = getCountry;
var getProvinces = function () {
    return Object.keys(data.rwanda);
};
exports.getProvinces = getProvinces;
var getDistricts = function () {
    return Object.values(data.rwanda).flatMap(function (province) { return Object.keys(province); });
};
exports.getDistricts = getDistricts;
var getDistrictsByProvince = function (province) {
    return Object.keys(data.rwanda[province] || {});
};
exports.getDistrictsByProvince = getDistrictsByProvince;
var getSectors = function () {
    return Object.values(data.rwanda).flatMap(function (province) {
        return Object.values(province).flatMap(function (district) { return Object.keys(district); });
    });
};
exports.getSectors = getSectors;
var getSectorsByDistrict = function (province, district) {
    var _a;
    return Object.keys(((_a = data.rwanda[province]) === null || _a === void 0 ? void 0 : _a[district]) || {});
};
exports.getSectorsByDistrict = getSectorsByDistrict;
var getCells = function () {
    return Object.values(data.rwanda).flatMap(function (province) {
        return Object.values(province).flatMap(function (district) {
            return Object.values(district).flatMap(function (sector) { return Object.keys(sector); });
        });
    });
};
exports.getCells = getCells;
var getCellsBySector = function (province, district, sector) {
    var _a, _b;
    return Object.keys(((_b = (_a = data.rwanda[province]) === null || _a === void 0 ? void 0 : _a[district]) === null || _b === void 0 ? void 0 : _b[sector]) || {});
};
exports.getCellsBySector = getCellsBySector;
var getVillages = function () {
    return Object.values(data.rwanda).flatMap(function (province) {
        return Object.values(province).flatMap(function (district) {
            return Object.values(district).flatMap(function (sector) {
                return Object.values(sector).flatMap(function (cell) { return cell; });
            });
        });
    });
};
exports.getVillages = getVillages;
var getVillagesByCell = function (province, district, sector, cell) {
    var _a, _b, _c;
    return ((_c = (_b = (_a = data.rwanda[province]) === null || _a === void 0 ? void 0 : _a[district]) === null || _b === void 0 ? void 0 : _b[sector]) === null || _c === void 0 ? void 0 : _c[cell]) || [];
};
exports.getVillagesByCell = getVillagesByCell;
var getRandomLocation = function () {
    var provinces = Object.keys(data.rwanda);
    var province = provinces[Math.floor(Math.random() * provinces.length)];
    var districts = Object.keys(data.rwanda[province]);
    var district = districts[Math.floor(Math.random() * districts.length)];
    var sectors = Object.keys(data.rwanda[province][district]);
    var sector = sectors[Math.floor(Math.random() * sectors.length)];
    var cells = Object.keys(data.rwanda[province][district][sector]);
    var cell = cells[Math.floor(Math.random() * cells.length)];
    var villages = data.rwanda[province][district][sector][cell];
    var village = villages[Math.floor(Math.random() * villages.length)];
    return {
        province: province,
        district: district,
        sector: sector,
        cell: cell,
        village: village
    };
};
exports.getRandomLocation = getRandomLocation;
var countLocations = function () {
    var provinces = Object.keys(data.rwanda).length;
    var districts = 0;
    var sectors = 0;
    var cells = 0;
    var villages = 0;
    Object.values(data.rwanda).forEach(function (province) {
        districts += Object.keys(province).length;
        Object.values(province).forEach(function (district) {
            sectors += Object.keys(district).length;
            Object.values(district).forEach(function (sector) {
                cells += Object.keys(sector).length;
                Object.values(sector).forEach(function (cell) {
                    villages += cell.length;
                });
            });
        });
    });
    return { provinces: provinces, districts: districts, sectors: sectors, cells: cells, villages: villages };
};
exports.countLocations = countLocations;
