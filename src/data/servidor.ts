// Dados do servidor usados no site todo. Mude aqui e o site inteiro acompanha.

export const servidor = {
  nome: 'Invictus',
  versao: '1.8',
  // IP do servidor. null = ainda não divulgado: o site esconde o IP e manda para o Discord.
  ip: 'jogar.redeinvictus.com.br' as string | null,
  // Data e hora de abertura (horário de Brasília).
  lancamento: '2026-11-16T00:00:00-03:00',
  lancamentoTexto: '16 de novembro',
  lancamentoCurto: '16/11',
  // Enquanto for true, o site mostra "fase de testes" e a pré-venda do VIP.
  preLancamento: true,
  instagram: 'rede.invictus',
  tiktok: 'rede.invictus',
  discord: 'https://discord.gg/Huf73KyKzu',
};

export const links = {
  discord: servidor.discord,
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
  // O pacote da ativação fica em src/data/pacote-vip.ts.
  // Promoção de data especial (Natal, Dia das Crianças...). Ligada, o VIP também sorteia ovo e gaiola,
  // e o site mostra a tabela de chances e o simulador. Desligada no lançamento.
  promocao: { ativa: false, nome: '' },
};

// Tabela de chances do ovo na ativação do VIP. Igual a vip.premio-ovo no config.yml do ServidorCore
// (raridade pelo rendimento da gaiola, decidida em 2026-11-11). Cores iguais às do jogo.
export const chancesOvo = [
  { nome: 'Sem ovo', chance: 50, cor: '#6B6B73', ovos: [] as string[], detalhe: 'Fica só a chance da gaiola' },
  { nome: 'Comum', chance: 30, cor: '#FFFFFF', ovos: ['aranha', 'aranha da caverna', 'galinha', 'porco', 'ovelha'] },
  { nome: 'Incomum', chance: 14, cor: '#55FF55', ovos: ['vaca', 'bruxa', 'esqueleto', 'zumbi'] },
  { nome: 'Raro', chance: 5, cor: '#55FFFF', ovos: ['pigman', 'enderman', 'creeper', 'cubo de magma'] },
  { nome: 'Épico', chance: 1, cor: '#FF55FF', ovos: ['lula', 'blaze', 'slime'] },
];
export const chanceGaiola = 5;
export const chancesProvisorias = true;
