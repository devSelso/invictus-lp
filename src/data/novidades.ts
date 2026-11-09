import { getCollection } from 'astro:content';

export const nomesTipo = {
  lancamento: 'Lançamento',
  novo: 'Novo',
  mudanca: 'Mudança',
  correcao: 'Correção',
  evento: 'Evento',
} as const;

export async function novidadesOrdenadas() {
  const todas = await getCollection('novidades');
  return todas.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export function formatarData(data: Date) {
  return data
    .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'America/Sao_Paulo' })
    .replace(/\./g, '')
    .replace(/ de /g, ' ');
}
