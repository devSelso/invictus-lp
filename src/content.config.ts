import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada novidade é um arquivo .md em src/content/novidades/.
const novidades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/novidades' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    tipo: z.enum(['lancamento', 'novo', 'mudanca', 'correcao', 'evento']),
    etiqueta: z.string().optional(), // texto do selo; sem ele, usa o nome do tipo
    resumo: z.string(),
  }),
});

export const collections = { novidades };
