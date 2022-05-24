"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tellMyTime = void 0;
var moment_1 = __importDefault(require("moment"));
function tellMyTime() {
    return (0, moment_1.default)().format('MMMM Do YYYY, h:mm:ss a');
}
exports.tellMyTime = tellMyTime;
