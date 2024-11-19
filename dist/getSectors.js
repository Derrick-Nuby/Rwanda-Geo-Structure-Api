"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectorsByDistrict = exports.getSectors = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
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
