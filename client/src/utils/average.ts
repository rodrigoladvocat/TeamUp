export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;        
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}