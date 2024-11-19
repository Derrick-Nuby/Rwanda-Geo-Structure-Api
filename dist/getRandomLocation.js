"use strict";
// file location src/getRandomLocation.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomLocation = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
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
