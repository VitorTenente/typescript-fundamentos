export function multuplicaArgs(...args: number[]): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaArgs(...args: Array<string>): string {
  return args.reduce((acc, valor) => acc + valor);
}

const result = multuplicaArgs(1, 2, 3);
const concatenacao = concatenaArgs('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
