const objetoA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'valor a',
  chaveB: 'valor b',
};

const objetoB: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor a',
  chaveB: 'valor b',
};

objetoA.chaveA = 'outro valor';
objetoA.chaveC = 'valor c';

objetoB.chaveA = 'outro valor';
objetoB.chaveD = 'valor chave d';
objetoB.chaveE = 'valor e';
objetoB.chaveE = 1231;
