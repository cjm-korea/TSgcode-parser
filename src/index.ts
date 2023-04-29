import Parser from "./Paser";

var parser = new Parser();

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
X-107.Y-162.46 `
// parser.gcode = `X-167.Y-100.12 `

parser.lineSeperator();