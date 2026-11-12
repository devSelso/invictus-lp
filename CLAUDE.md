# Site do Invictus: como trabalhar

O dono é o Selso, que fala português do Brasil (muitas vezes por voz). Respostas curtas; tudo o que fica salvo em
prosa normal. Instruções do Astro em `AGENTS.md`.

## Ao começar
1. Ler o `README.md` (como rodar, o que mudar e onde, e o "Ecossistema Invictus").
2. As regras, preços e vantagens vêm do repositório do servidor: `../servidor-minecraft/docs/site/regras-do-servidor.md`
   (regras para o site) e `../servidor-minecraft/docs/ESTADO.md` (o que existe hoje). Nunca inventar regra, preço ou
   vantagem; o que estiver "provisório" ou "a definir" lá não aparece como certo aqui.

## Ao mudar algo
- Dados centrais (endereço, lançamento, redes, preço do VIP, bônus da pré-venda, chances) em `src/data/servidor.ts`.
- Regra nova no servidor: atualizar `src/pages/regras.astro` e publicar uma novidade em `src/content/novidades/`.
- Commit e push só quando o dono pedir ou aprovar.
