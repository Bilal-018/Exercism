export function isPangram(str: string): boolean {
  const lettersOnly: RegExpMatchArray | null = str.toLocaleLowerCase().match (/[a-z]/g);
  
  if (!lettersOnly) {
    return false;
  }

  const uniqueLetters: Set<string> = new Set(lettersOnly);
  return uniqueLetters.size === 26;
}
