"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCellsBySector = exports.getCells = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
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
