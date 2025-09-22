export function toRna(DNA: string): string {
  const DtoR: { [key: string]: string }= {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
  let arr: string[]= DNA.split("");

  for (let i=0; i < arr.length; i++){
    if (!(arr[i] in DtoR)){
      throw new Error('Invalid input DNA.');
    }
    arr[i]= DtoR[arr[i]];
  }
  return arr.join('');
}
