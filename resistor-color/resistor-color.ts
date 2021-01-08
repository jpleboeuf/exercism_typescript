const CV: {[color: string]: number} = {
  'black':   0,
  'brown':   1,
  'red':     2,
  'orange':  3,
  'yellow':  4,
  'green':   5,
  'blue':    6,
  'violet' : 7,
  'grey':    8,
  'white':   9,
};

export function colorCode(color: string): number {
  return CV[color];
}

export const COLORS: Array<string> = Object.keys(CV);
