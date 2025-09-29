export class Matrix {
  private mtrx: number[][];

  constructor(str: string) {
    this.mtrx = str.split('\n').map((line: string) => {
      return line.trim().split(' ').map(Number);
    });
  }

  get rows(): number[][] {
    return this.mtrx;
  }

  get columns(): number[][] {
    if (!this.mtrx || this.mtrx.length === 0) {
      return [];
    }

    const numCols = this.mtrx[0].length;

    const columns: number[][] = [];

    for (let j = 0; j < numCols; j++) {
      const column: number[] = [];
      for (let i = 0; i < this.mtrx.length; i++) {
        column.push(this.mtrx[i][j]);
      }
      columns.push(column);
    }
    return columns;
  }
}
