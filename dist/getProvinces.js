"use strict";
// file location src/getProvinces.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinces = void 0;
var Rwanda_json_1 = __importDefault(require("./Rwanda.json"));
var data = Rwanda_json_1.default;
var getProvinces = function () {
    return Object.keys(data.rwanda);
};
exports.getProvinces = getProvinces;
