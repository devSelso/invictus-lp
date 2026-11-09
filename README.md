# Site do Invictus

Site do servidor de Minecraft Invictus, feito em [Astro](https://astro.build). Gera páginas estáticas: qualquer hospedagem serve (Vercel, Netlify, Cloudflare Pages).

## Rodar no computador

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera o site pronto em dist/
```

## O que mudar e onde

| Quero mudar | Arquivo |
| --- | --- |
| IP, data de lançamento, Instagram, TikTok, Discord | `src/data/servidor.ts` (objeto `servidor`) |
| Fim da pré-venda (tirar a faixa e os botões do direct) | `src/data/servidor.ts`: `preLancamento: false` |
| Preço do VIP, mensagem do direct, bônus da pré-venda | `src/data/servidor.ts` (objeto `vip`) |
| Tabela de chances do VIP | `src/data/servidor.ts` (`chancesOvo`, `chanceGaiola`) |
| Regras | `src/pages/regras.astro` |
| Vantagens do VIP | `src/pages/vip.astro` |
| Página inicial | `src/pages/index.astro` |
| Passo a passo | `src/pages/como-entrar.astro` |
| Cores e fontes | `src/styles/global.css` |

Os bônus da pré-venda aparecem como "anúncio em breve" enquanto `bonusPreVenda` estiver vazio. Para mostrar, preencha a lista, por exemplo `['7 dias extras de VIP', 'Tag Fundador']`.

## Publicar uma novidade

Crie um arquivo em `src/content/novidades/`, por exemplo `2026-11-16-servidor-aberto.md`:

```md
---
titulo: O Invictus está aberto
data: 2026-11-16T00:00:00-03:00
tipo: lancamento        # lancamento, novo, mudanca, correcao ou evento
etiqueta: Abertura      # opcional: texto do selo
resumo: Uma frase que aparece no card da página inicial.
---

Texto da novidade em Markdown.
```

A página inicial mostra as 3 mais recentes e `/novidades/` mostra todas, com filtro por tipo.

## Publicar na Vercel ou na Netlify

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel ou na Netlify, importe o repositório. Elas reconhecem o Astro sozinhas: comando `npm run build`, pasta `dist`.
3. Cada push na branch principal publica o site de novo.
