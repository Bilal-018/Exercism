export function score(x: number, y: number): number {
  let pos: number = x*x + y*y;

  if (pos <= 1){
    return 10;
  } else if (pos > 1 && pos <= 25){
    return 5;
  } else if (pos > 25 && pos <= 100){
    return 1;
  }

  return 0;
}
