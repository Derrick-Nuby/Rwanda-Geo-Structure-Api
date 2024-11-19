"use strict";
// file location src/getDistricts.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistrictsByProvince = exports.getDistricts = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
var getDistricts = function () {
    return Object.values(data.rwanda).flatMap(function (province) { return Object.keys(province); });
};
exports.getDistricts = getDistricts;
var getDistrictsByProvince = function (province) {
    return Object.keys(data.rwanda[province] || {});
};
exports.getDistrictsByProvince = getDistrictsByProvince;
