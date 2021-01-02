export function kFormatter(num: any) {
  const formatted: any = (Math.abs(num) / 1000).toFixed(1) + 'k';
  return Math.abs(num) > 999 ? formatted : Math.sign(num) * Math.abs(num);
}

export const getRandomNumber = (positions: number, float = false) => {
  let number = '';
  let point = -1;

  if (float) {
    point = Math.floor(Math.random() * positions) + 1;
  }

  for (let i = 0; i < positions; i++) {
    if (i === point) {
      number += '.';
    }
    number += Math.floor(Math.random() * 10);
  }

  return number;
};

export const __DEV__ = process.env.NODE_ENV === 'development';
