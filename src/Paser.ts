export default class Parser {
  public gcode: string = '';
  private lines: Array<string> = [];
  private parsedGcode: Array<any> = [];


  lineSeperator() {
    this.lines = this.gcode.split('\n');
    this.findSyntax();
  }

  findSyntax() {
    this.lines.map(line => {
      let x: number = line.indexOf('X');
      let y: number = line.indexOf('Y');
      let z: number = line.indexOf('Z');

      var syntaxString = ['X', 'Y', 'Z'];
      var syntax = [x, y, z];

      for (let i = 0; i < syntax.length; i++) {
        // if syntax is exist get value
        if (syntax[i] !== -1 && syntax[i + 1] !== -1) {
          // push ['Axis Code', AxisPos] in parsedGcode
          this.parsedGcode.push([syntaxString[i], line.substring(syntax[i] + 1, syntax[i + 1])])
        } else if (syntax[i] !== -1 && syntax[i + 1] === -1) {
          this.parsedGcode.push([syntaxString[i], line.substring(syntax[i] + 1, line.length)])
        }
      }
    })
  }
}