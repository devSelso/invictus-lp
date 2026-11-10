// Pacote da ativação do VIP normal, igual ao vip.pacote do config.yml do ServidorCore
// (decidido pelo dono em 2026-11-09). Mudou lá, muda aqui.

export type Icone =
  | 'capacete' | 'peitoral' | 'calca' | 'botas'
  | 'espada' | 'picareta' | 'machado' | 'pa'
  | 'maca' | 'pocao' | 'bloco';

export interface ItemMc {
  icone: Icone;
  nome: string;
  qtd?: number;
  encantamentos?: string[];
  encantado?: boolean;
  raro?: boolean; // nome em lilás, como item épico no jogo
  cores?: Record<string, string>;
  detalhe?: string;
}

const P4 = ['Proteção IV', 'Inquebrável III'];
const FERRAMENTA = ['Eficiência V', 'Inquebrável III', 'Fortuna III'];

const bloco = (nome: string, a: string, b: string, h: string): ItemMc => ({ icone: 'bloco', nome, qtd: 64, cores: { a, b, h } });
const pocao = (nome: string, p: string, P: string, detalhe?: string): ItemMc => ({ icone: 'pocao', nome, qtd: 64, cores: { p, P }, detalhe });

export const armadura: ItemMc[] = [
  { icone: 'capacete', nome: 'Capacete de diamante', encantamentos: P4, encantado: true },
  { icone: 'peitoral', nome: 'Peitoral de diamante', encantamentos: P4, encantado: true },
  { icone: 'calca', nome: 'Calça de diamante', encantamentos: P4, encantado: true },
  { icone: 'botas', nome: 'Botas de diamante', encantamentos: P4, encantado: true },
];

const venenoA = pocao('Poção de veneno arremessável', '#4e9331', '#2f5c1d', 'Granada de veneno');
const danoA = pocao('Poção de dano II arremessável', '#8b1a1a', '#4d0b0b', 'Granada de dano');
const forca = pocao('Poção de força II', '#b3302b', '#6e1714');
const velocidade = pocao('Poção de velocidade II', '#7cafc6', '#4a7486');
const regen2 = pocao('Poção de regeneração II', '#cd5cab', '#8a3572');
const regen = pocao('Poção de regeneração', '#e38bc8', '#a85a91');

// 27 espaços do inventário (3 linhas de 9). null = espaço vazio.
export const inventario: (ItemMc | null)[] = [
  bloco('Bloco de diamante', '#5fe3e0', '#2fa3a0', '#b8fffb'),
  bloco('Bloco de ouro', '#f8d548', '#c99512', '#fff5b0'),
  bloco('Bloco de esmeralda', '#3fd77a', '#178c45', '#a8ffc8'),
  bloco('Bloco de quartzo', '#ece6dc', '#bdb4a6', '#ffffff'),
  bloco('Prismarinho', '#63a59a', '#3b7369', '#9fd8cd'),
  bloco('Prismarinho escuro', '#335b4c', '#1d3a2f', '#5c8c78'),
  bloco('Tijolos de prismarinho', '#6cb1a3', '#3f7c70', '#a6e0d4'),
  bloco('Lanterna do mar', '#d4ece6', '#93c2b8', '#ffffff'),
  null,
  venenoA, venenoA, danoA, danoA, forca, forca, velocidade, velocidade, regen2,
  regen2, regen, regen, null, null, null, null, null, null,
];

// Barra de atalhos (9 espaços).
export const atalhos: (ItemMc | null)[] = [
  { icone: 'espada', nome: 'Espada de diamante', encantamentos: ['Afiação V', 'Inquebrável III', 'Aspecto Flamejante II'], encantado: true },
  { icone: 'picareta', nome: 'Picareta de diamante', encantamentos: FERRAMENTA, encantado: true },
  { icone: 'machado', nome: 'Machado de diamante', encantamentos: FERRAMENTA, encantado: true },
  { icone: 'pa', nome: 'Pá de diamante', encantamentos: FERRAMENTA, encantado: true },
  { icone: 'maca', nome: 'Maçã dourada encantada', qtd: 4, encantado: true, raro: true },
  null, null, null, null,
];

// O que vem além dos itens.
export const extras = {
  niveisXp: 30,
  coins: '10.000',
  xpSkills: '25.000',
};
