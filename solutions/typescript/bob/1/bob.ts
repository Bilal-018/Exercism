const isOnlyWhitespace = (str: string): boolean => /^\s*$/.test(str);

export function hey(message: string): string { 
  const isWhiteSpace: boolean = isOnlyWhitespace(message);
  const isQuestion: boolean = message.trim().endsWith('?');
  const hasUpperCaseLetters: boolean = /[A-Z]/.test(message);
  const isUpperCase: boolean = message === message.toLocaleUpperCase() && hasUpperCaseLetters;

  return isWhiteSpace ? 'Fine. Be that way!':
          !(isQuestion || isUpperCase) ? 'Whatever.':
            (isQuestion && isUpperCase) ? "Calm down, I know what I'm doing!":
              isUpperCase ? 'Whoa, chill out!':
               'Sure.';
}
