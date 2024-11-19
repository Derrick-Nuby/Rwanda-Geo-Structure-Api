"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLocations = void 0;
// file location: src/countLocation.ts
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
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
