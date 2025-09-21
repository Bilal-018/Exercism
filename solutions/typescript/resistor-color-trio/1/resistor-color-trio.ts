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

export function decodedResistorValue(colors: string[]): string {

  let num: number= COLORS.indexOf(colors[0])*10 + COLORS.indexOf(colors[1]);
  let  res: number= num*Math.pow(10, COLORS.indexOf(colors[2]));

  if (res < 1000){
    return `${res} ohms`;
  }
  else if(res < 1000000){
    return `${res/1000} kiloohms`;
  }
  else if(res < 1000000000){
    return `${res/1000000} megaohms`;
  }
  else if(res < 1000000000000){
    return `${res/1000000000} gigaohms`;
  }
    return '0 ohms';
}
