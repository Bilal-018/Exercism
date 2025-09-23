export function score(x: number, y: number): number {
  let pos: number = Math.sqrt(x*x + y*y);

  return pos > 10 ? 0 :
          pos > 5 ? 1 :
            pos > 1 ? 5 :
              10;
}
