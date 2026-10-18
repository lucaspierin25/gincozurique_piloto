# Geoportal Ginco Zurique

WebGIS estático (HTML + CSS + JS puro, sem build) do loteamento Ginco Zurique, Cuiabá/MT.
Mapa com Leaflet; dados vetoriais pré-convertidos em `data/*.js` (variáveis globais `GEO_*`).

## Sobre o usuário
- Lucas, leigo em programação e design. Explicar em português simples, sem jargão.
- Trabalha em dois computadores (casa e serviço), sincronizando pelo GitHub.
- Prefere fazer tudo pelo Claude Code, sem precisar abrir sites de terceiros.

## Fluxo de trabalho automático (SEMPRE seguir)
- **Começo:** o hook `SessionStart` em `.claude/settings.json` já roda `git pull` sozinho. Se a mensagem dele disser que
  NÃO conseguiu puxar, avisar o Lucas antes de editar (pode haver mudança do outro computador).
- **Fim de cada pedido:** depois de editar e conferir no painel do navegador, fazer **commit + push** para `main`
  sem esperar ele pedir, com mensagem em português descrevendo a mudança. Avisar no final:
  "Enviado para o GitHub — o site atualiza em ~1 minuto."
- **Exceção:** se ele disser "não publica ainda", "é só teste" ou similar, fazer só o commit local (sem push) até ele liberar.
- **Contexto:** toda decisão nova (cor, posição, regra, preferência) entra na seção "Decisões já tomadas" deste arquivo,
  no mesmo commit. É assim que o outro computador fica sabendo.
- Nunca editar nos dois computadores ao mesmo tempo. Nunca usar `git push --force`.
- A pasta de casa fica dentro do Google Drive, que cria `desktop.ini` dentro de `.git` e quebra o Git; o hook já apaga
  esses arquivos. Se um comando git falhar com "bad object ... desktop.ini", rodar `find .git -name desktop.ini -delete`.

## Os dois computadores
- **Casa:** `D:\Drive Lucas\1 Serviços\Webgis PILOTO`.
- **Serviço:** cópia própria baixada do GitHub numa pasta FORA da nuvem (ex.: `C:\Projetos\gincozurique_piloto`).
  Ignorar a cópia que a nuvem sincroniza lá.

## Como rodar e ver
- Servidor local: `.claude/launch.json` → `python -m http.server 5517` (painel do navegador do Claude Code).
- Depois de editar, recarregar o painel e conferir; testar também em tamanho de celular (375px).
- Ao mudar CSS/JS, atualizar o `?v=AAAA.MM.DD` nos links do `index.html` (evita cache antigo).

## Publicação
- GitHub: https://github.com/lucaspierin25/gincozurique_piloto (branch `main`).
- Site no ar: https://gincozuriquepiloto.vercel.app (Vercel, plano Hobby, projeto `gincozurique_piloto`).
- Vercel publica automaticamente a cada envio (push) para a branch `main`. `.vercelignore` tira do site o que não é necessário.
- Git está em `C:\Program Files\Git\cmd\git.exe` (o login do GitHub fica salvo no Git Credential Manager).

## Estrutura
- `index.html` — layout (mapa em tela cheia + painéis flutuantes).
- `css/style.css` — todo o visual; tokens de cor/fonte no `:root`; regras de celular no fim.
- `js/app.js` — lógica (objeto `WebGIS`): mapa, camadas, busca, filtros, medição, tabela.
- `js/layers_config.js` — cores padrão, títulos e popups de cada camada.
- `design-system/geoportal/MASTER.md` — padrão visual (skill UI UX Pro Max). Seguir nas mudanças.
- `shp/`, `shp geojason/`, `scripts/prepare_data.py` — dados de origem e conversão.

## Decisões já tomadas (não desfazer sem pedir)
- Ordem das camadas (base → topo): APP, Cursos d'água, Quadras, Lotes, **Implantação no topo, em branco**.
- Enquadramento inicial no computador: `homeZoom: 16`, `homeOffset: { x: 0.025, y: 0.15 }` (desconta o painel à esquerda).
- No celular: painel começa recolhido; enquadramento via `fitBounds` abaixo do painel.
- Mapa de fundo padrão: **Satélite Google**. Ordem do seletor: Satélite Google, Híbrido Google, Ruas Google, Ruas OSM, Claro (Carto), Satélite Esri.
  - Os mapas Google usam endereço não oficial (contraria os termos do Google); para uso público, considerar a API oficial.
- Cor "selecionado"/filtro = dourado `#E0A800`; cor principal = azul `#0077B6`; fonte IBM Plex Sans/Mono.
- Rótulos de quadra usam `getLabelPoint` (ponto interno), por causa da Quadra 08 curva.
- Números em formato brasileiro (vírgula decimal).
