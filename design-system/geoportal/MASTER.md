# Sistema visual — Geoportal Residencial Zurique

Baseado na skill **UI UX Pro Max** (nextlevelbuilder/ui-ux-pro-max-skill), combinando os perfis
"Real Estate/Property" (vidro + minimalismo, azul de confiança) e "Government / Public Service"
(acessível, alto contraste, linguagem simples).

## Estilo
- **Minimalismo suíço** nos painéis: hierarquia clara, sem decoração, um único acento de cor.
- **Vidro discreto** só nos elementos sobre o mapa (blur 16px, fundo branco 90%, borda clara).
- Mapa em tela cheia; tudo o mais flutua por cima.

## Cores
| Papel | Claro | Escuro | Uso |
|---|---|---|---|
| Primária | `#0077B6` | `#3AA0D8` | botões, abas, lotes |
| Seleção / destaque | `#E0A800` | `#E0A800` | lote clicado, filtro ativo |
| Texto | `#0B1726` | `#EEF2F7` | |
| Texto secundário | `#556274` (6,1:1) | `#A3AFBF` | |
| Perigo | `#C2410C` | | medição, apagar |

Camadas: Lotes `#0077B6`, Quadras `#1E3A5F`, APP `#2F855A`, Cursos d'água `#38BDF8`, Implantação `#FFFFFF`.

**Evitar:** roxo/rosa em gradiente ("estética de IA"), emojis como ícones, cor sozinha para indicar estado.

## Tipografia
- **IBM Plex Sans** — textos (séria, confiável, boa para dados).
- **IBM Plex Mono** — números, áreas e coordenadas (algarismos alinhados).
- Rótulos de seção: 11px, caixa-alta, espaçamento 0,08em.

## Regras de interação e acessibilidade
- Contraste mínimo 4,5:1 nos dois temas.
- Foco visível (anel azul de 3px) para navegação por teclado.
- Botões de ícone sempre com `aria-label`; ícones decorativos com `aria-hidden`.
- Alvos de toque de 44px no celular; nada depende só de "passar o mouse".
- Respeitar `prefers-reduced-motion`.
- Testar em 375, 768, 1024 e 1440px, claro e escuro.
