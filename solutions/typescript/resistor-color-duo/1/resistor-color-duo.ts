const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
]

export function decodedValue(colors: string[]) {
  let num: number = COLORS.indexOf(colors[0]);
  let num2: number = COLORS.indexOf(colors[1]);

  if (num === 0){
    return num2;
  }

  return num*10 + num2;
}
