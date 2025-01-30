import { TEXT_ID_LIST, WORD_LIST, INT_LIST, COLOR_LIST } from './seed';
import { toFormat } from '@jood/helpdesk-date';
import { randomRangeInt } from '@jood/helpdesk-number';

export function randomizeFromSeeds<T = unknown>(seeds: T[], min = 1, max = 1) {
  const len = getRange(min, max);
  const arr = [];
  const seedLen = seeds.length - 1;
  for (let i = 0; i < len; i++) {
    const index = getRange(0, seedLen);
    arr.push(seeds[index]);
  }
  return arr;
}

export function getRange(min: number, max: number) {
  return randomRangeInt(min, max);
}

export function getRandomOneBy<T = unknown>(seeds: T[]) {
  return randomizeFromSeeds<T>(seeds, 1, 1)[0];
}

export function getRandomTextId() {
  return randomizeFromSeeds(TEXT_ID_LIST, 1, 1)[0];
}

export function getRandomWord() {
  return randomizeFromSeeds(WORD_LIST, 1, 1)[0];
}

export function getRandomWords(min = 1, max = 1) {
  return randomizeFromSeeds(WORD_LIST, min, max);
}

export function getRandomText(min = 1, max = 1) {
  return getRandomWords(min, max).join(' ');
}

export function getRandomColor() {
  return randomizeFromSeeds(COLOR_LIST, 1, 1)[0];
}

export function getRandomColors(min = 1, max = 1) {
  return randomizeFromSeeds(COLOR_LIST, min, max);
}

export function getRandomId() {
  return Date.now() + Math.round(Math.random() * 999999);
}

export function getRandomInt(min = 1, max = 1) {
  return getRange(min, max);
}

export function getRandomInts(min = 1, max = 1) {
  return randomizeFromSeeds(INT_LIST, min, max);
}

export function getRandomBoolean() {
  return Math.random() <= 0.5;
}

export function getRandomDateAt(min = 1546300800000, max = 0) {
  return getRange(min, max || Date.now());
}

export function getRandomDateYMD(min = 1546300800000, max = 0) {
  return toFormat(getRandomDateAt(), { format: 'YYYY-MM-DD' });
}
