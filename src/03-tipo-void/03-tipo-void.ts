function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vitor',
  sobrenome: 'Brun',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vitor', 'Higor');
pessoa.exibirNome();

export { pessoa };
