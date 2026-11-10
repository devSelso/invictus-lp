// Dados do servidor usados no site todo. Mude aqui e o site inteiro acompanha.

export const servidor = {
  nome: 'Invictus',
  versao: '1.8.8',
  ip: '91.197.6.134:21201',
  // Data e hora de abertura (horário de Brasília).
  lancamento: '2026-11-16T00:00:00-03:00',
  lancamentoTexto: '16 de novembro',
  lancamentoCurto: '16/11',
  // Enquanto for true, o site mostra "fase de testes" e a pré-venda do VIP.
  preLancamento: true,
  instagram: 'rede.invictus',
  tiktok: 'rede.invictus',
  discord: null as string | null, // link do Discord quando existir
};

export const links = {
  instagram: `https://www.instagram.com/${servidor.instagram}`,
  tiktok: `https://www.tiktok.com/@${servidor.tiktok}`,
  direct: `https://ig.me/m/${servidor.instagram}`,
};

export const vip = {
  preco: 'R$ 30',
  periodo: 'por 30 dias',
  precoProvisorio: true, // mostra o selo "valor inicial"
  mensagemDirect: 'Quero ter acesso ao VIP antecipado',
  // Bônus exclusivos da pré-venda. Lista vazia = "anúncio em breve".
  bonusPreVenda: [] as string[],
  // O que vem em toda ativação. Lista vazia = a seção do pacote some do site.
  // Em definição (2026-11-09): quando o pacote for decidido no servidor, preencher aqui.
  // Formato: { valor: '4', item: 'Armadura de diamante', detalhe: 'Proteção IV e Inquebrável III.' }
  pacote: [] as { valor: string; item: string; detalhe: string }[],
  // Promoção de data especial (Natal, Dia das Crianças...). Ligada, o VIP também sorteia ovo e gaiola,
  // e o site mostra a tabela de chances e o simulador. Desligada no lançamento.
  promocao: { ativa: false, nome: '' },
};

// Tabela de chances do ovo na ativação do VIP (valores iniciais).
export const chancesOvo = [
  { nome: 'Sem ovo', chance: 50, cor: '#6B6B73', ovos: [] as string[], detalhe: 'Fica só a chance da gaiola' },
  { nome: 'Comum', chance: 30, cor: '#FFFFFF', ovos: ['galinha', 'porco', 'vaca', 'ovelha'] },
  { nome: 'Incomum', chance: 14, cor: '#FFFF55', ovos: ['zumbi', 'esqueleto', 'aranha', 'aranha da caverna'] },
  { nome: 'Raro', chance: 5, cor: '#55FFFF', ovos: ['creeper', 'slime', 'enderman', 'bruxa'] },
  { nome: 'Épico', chance: 1, cor: '#FF55FF', ovos: ['blaze', 'cubo de magma'], detalhe: 'Blaze (0,7%), cubo de magma (0,3%)', pesos: [0.7, 0.3] },
];
export const chanceGaiola = 5;
export const chancesProvisorias = true;
