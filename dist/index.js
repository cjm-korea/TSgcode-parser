"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Paser_1 = __importDefault(require("./Paser"));
var parser = new Paser_1.default();
parser.gcode = `X-167.Y-100.12 
X-167.Y-110.51 
X-167.Y-120.9
X-167.Y-131.29 
X-167.Y-141.68 
X-167.Y-152.07 
X-167.Y-162.46 
X-167.Y-172.85 
X-167.Y-183.24 
X-167.Y-193.63 
X-107.Y-193.63 
X-107.Y-183.24 
X-107.Y-172.85 
X-107.Y-162.46 `;
// parser.gcode = `X-167.Y-100.12 `
parser.lineSeperator();
