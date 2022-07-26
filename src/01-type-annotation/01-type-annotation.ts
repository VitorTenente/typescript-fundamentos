/* eslint-disable */

const nome: string = 'Willian';
let idade: number = 0b1010; // 10, 1.60, -5.55, 0xf00d, 0b1010
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['a', 'b'];
let arrayDeString2: string[] = ['a', 'b'];


// objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 26,
    nome: 'Vitor',
    adulto: true
}

console.log(pessoa.nome)

// funções
function soma(x: number, y:number): number {
    return x + y
}

const result = soma(2, 2)

const soma2: (x: number, y:number) => number = (x, y) => x + y;