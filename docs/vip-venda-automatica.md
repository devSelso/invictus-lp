# Venda automática do VIP (plano, 2026-11-14)

Combinado com o dono na conversa do servidor em 2026-11-14. **Ainda não começou a ser programado.** Desenvolver e
testar só local; o site no ar não muda até tudo estar testado. Foco do dono: escalabilidade, arquitetura de qualidade
(SOLID) e segurança (códigos e dados de pagamento não podem vazar).

## O que é

O jogador compra o VIP no site e recebe um **código** sozinho, sem ninguém da equipe online. A **ativação continua no
jogo**, como hoje: `/ativarvip <código>` (e o mercado de VIP com `/vendervip` e `/mercadovip` segue igual). Regras do VIP
em `../servidor-minecraft/docs/documento-mestre.md`, seção 8.

Caminho escolhido (B): **estoque de códigos no Supabase + pagamento pelo Mercado Pago + entrega pelo próprio site**.
Descartados: loja pronta (taxa, terceiro no meio) e entrega direto no jogo pelo nick (mais integração, nick errado
entrega para outro).

## Fluxo

1. Jogador clica em "Comprar VIP" no site e informa o e-mail.
2. O site cria o pedido e manda para o pagamento do Mercado Pago (Checkout Pro: Pix e cartão).
3. O Mercado Pago avisa o site (webhook) que o pagamento foi aprovado.
4. O site **confere o pagamento direto na API do Mercado Pago**, pega um código livre do estoque (de forma atômica),
   marca como vendido, mostra na página de sucesso (link protegido) e manda por e-mail.
5. O jogador entra no servidor e usa `/ativarvip <código>`.

## Peças e custos

| Peça | Serviço | Custo |
| --- | --- | --- |
| Pagamento | Mercado Pago, Checkout Pro (conta do dono, PF; precisa ativar a conta Negócio para as credenciais de produção) | Pix 0,99% por venda, na hora, sem mensalidade (consultado em 2026-11-14); cartão depende do prazo |
| Estoque e pedidos | Supabase (dois projetos: teste e produção) | Grátis |
| Rotas de servidor | Vercel (onde o site já está), com o adaptador `@astrojs/vercel` | Grátis |
| E-mail | Resend (ou parecido) | Grátis até um limite alto |

Hoje o site é Astro estático. As rotas novas ficam "sob demanda" (\`prerender = false\`); as páginas atuais continuam
estáticas.

## Arquitetura (camadas)

```
src/vip/
  dominio/       Pedido, CodigoVip e regras (estados: criado → pago → entregue)
  portas/        interfaces: GatewayPagamento, RepositorioPedidos, EstoqueCodigos, Mensageiro
  casos-de-uso/  IniciarCompra, ProcessarPagamento, ConsultarPedido
  adaptadores/   MercadoPago, Supabase, Resend (cada um implementa uma porta)
src/pages/api/vip/  comprar, webhook, pedido
src/pages/vip/      comprar, sucesso
```

- Regras do VIP não conhecem Mercado Pago nem Supabase: falam com interfaces (trocar fornecedor = trocar adaptador).
- Testes automáticos de domínio e casos de uso com o testador do próprio Node (`node:test`), sem pacote extra.
- Chamadas ao Mercado Pago, Supabase e Resend por `fetch` direto, sem bibliotecas deles (menos dependência, menos risco).

## Segurança (obrigatório)

1. Dados de cartão e banco nunca passam pelo site: o pagamento é na página do Mercado Pago.
2. Preço definido no servidor; o navegador não manda valor.
3. Webhook: conferir a assinatura do Mercado Pago **e** reconsultar o pagamento na API antes de entregar.
4. Um pagamento entrega um código, uma vez só: entrega atômica no banco (idempotência pelo id do pagamento; reserva
   do código com bloqueio de linha).
5. Códigos **criptografados** no Supabase (chave só na Vercel): vazamento do banco não revela códigos.
6. Tabelas sem nenhum acesso público (RLS fechado); só o servidor do site, com a chave secreta.
7. Chaves só no painel da Vercel e num `.env` local fora do Git; nunca no Git nem no chat.
8. Página de sucesso só com link de uso pessoal impossível de adivinhar; código também por e-mail.
9. Limite de tentativas na rota de compra.
10. Teste e produção separados (credenciais de teste do Mercado Pago; Supabase de teste e de produção).
11. Logs nunca mostram códigos nem e-mails completos.

## Estoque de códigos (parte do servidor)

Os códigos nascem no servidor do jogo, que é quem valida o `/ativarvip`. A fazer no repositório do servidor: um
comando só da loja (por exemplo `/vip gerar-loja 50`) que gera códigos marcados como "da loja" e um arquivo para
importar; um script local sobe esse arquivo, criptografado, para o Supabase. Os códigos da loja não se misturam com os
que a equipe dá à mão. Avisar quando o estoque estiver acabando.

## Decisões em aberto

- Aprovação do dono para esta arquitetura e para instalar o `@astrojs/vercel` (confirmar origem e tamanho antes).
- E-mail na primeira versão ou logo depois (a primeira pode entregar só na página de sucesso protegida).
- Data de abrir as vendas: a recomendação é **não** vender no lançamento (16/11) e liberar quando estiver testado
  (incluindo uma compra real de valor baixo).

## Ordem sugerida

1. Base: domínio, portas, casos de uso e testes (sem pagamento real).
2. Esquema do Supabase (arquivo SQL no repositório) e adaptador.
3. Adaptador do Mercado Pago em modo de teste; webhook; páginas de compra e sucesso.
4. Comando `gerar-loja` e importação no servidor do jogo.
5. E-mail.
6. Teste completo local, depois produção com compra real de valor baixo.
