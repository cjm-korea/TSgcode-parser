"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parser {
    constructor() {
        this.gcode = '';
        this.lines = [];
        this.parsedGcode = [];
    }
    lineSeperator() {
        this.lines = this.gcode.split('\n');
        this.findSyntax();
    }
    findSyntax() {
        this.lines.map(line => {
            let x = line.indexOf('X');
            let y = line.indexOf('Y');
            let z = line.indexOf('Z');
            var syntaxString = ['X', 'Y', 'Z'];
            var syntax = [x, y, z];
            for (let i = 0; i < syntax.length; i++) {
                // if syntax is exist get value
                if (syntax[i] !== -1 && syntax[i + 1] !== -1) {
                    // push ['Axis Code', AxisPos] in parsedGcode
                    this.parsedGcode.push([syntaxString[i], line.substring(syntax[i] + 1, syntax[i + 1])]);
                }
                else if (syntax[i] !== -1 && syntax[i + 1] === -1) {
                    this.parsedGcode.push([syntaxString[i], line.substring(syntax[i] + 1, line.length)]);
                }
            }
        });
    }
}
exports.default = Parser;
