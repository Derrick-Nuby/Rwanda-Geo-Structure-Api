"use strict";
//  file location src/getVillages.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVillagesByCell = exports.getVillages = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
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
