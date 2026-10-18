# GEOPORTAL PILOTO | WebGIS Interativo Profissional
### Empreendimento Residencial Zurique • Cuiabá / Mato Grosso

Um Geoportal completo, moderno e de alta performance desenvolvido para visualização cadastral, análise espacial e consulta de dados territoriais.

---

## 🗺️ Camadas Espaciais Incluídas

O Geoportal integra todas as camadas presentes na pasta `shp geojason/`:

1. **Lotes Urbanos (`lotes_geo.geojson`)**:
   - 294 lotes residenciais vetorizados.
   - Cálculo individual de **área em m²** e **perímetro em metros**.
   - Identificação completa por Quadra e Lote (`Quadra 01 - Lote 01` até `Quadra 11 - Lote 30`).
   - Opção de exibir/ocultar os números dos lotes diretamente sobre o mapa.

2. **Quadras (`quadras_geo.geojson`)**:
   - 11 quadras urbanas (01 a 11).
   - Área calculada em m² e hectares.
   - Rótulos visuais destacados com identificador de cada quadra.

3. **Área de Preservação Permanente - APP (`app_geo.geojson`)**:
   - Delimitação da área de proteção ambiental legal com **22,15 hectares** (221.508 m²).
   - Estilização em verde esmeralda com contorno tracejado e preenchimento translúcido.

4. **Cursos d'Água e Drenagem (`curso_dagua_geo.geojson`)**:
   - 9 trechos da rede hidrográfica natural com cálculo da extensão em metros.

5. **Implantação Urbanística CAD (`Implantacao_geo.geojson`)**:
   - Mais de 11.900 segmentos e 52.000 vértices de traçado executivo (eixos de vias, meio-fio, chanfros e alinhamentos de infraestrutura).
   - Renderização acelerada via Canvas no Leaflet para navegação ultra-fluida sem travamentos.

---

## 🛰️ Os 3 Mapas de Fundo (Basemaps)

Seletor com miniaturas visuais no canto superior direito para alternar instantaneamente entre:

1. **🛰️ Satélite de Alta Resolução (Esri World Imagery)**:
   - Ortofoto de satélite óptica com alto nível de detalhe da vegetação e relevo.
2. **🗺️ OpenStreetMap Padrão**:
   - Base cartográfica colaborativa com malha viária, rodovias e referências urbanas.
3. **🌐 CartoDB Positron (Mapa Claro / Engenharia)**:
   - Cartografia neutra e minimalista em tons claros, ideal para sobreposição técnica e impressão de projetos cadastrais.

---

## ⚡ Principais Funcionalidades do Sistema

- **🔍 Busca Inteligente com Autocomplete**:
  - Barra de pesquisa no cabeçalho. Digite o número do lote (ex: `Lote 12`, `05`, `Quadra 03`) para localizar, dar zoom automático e acionar destaque pulsante com popup informativo.
- **📊 Tabela de Atributos Interativa (Bottom Drawer)**:
  - Painel deslizante inferior no estilo QGIS / ArcGIS Pro.
  - Alterne entre as camadas de Lotes, Quadras, APP e Hidrografia.
  - Filtro em tempo real na tabela e botão **Exportar CSV** (compatível com Excel no Windows, com codificação UTF-8 e delimitador `;`).
  - Ao clicar em qualquer linha da tabela, o mapa centraliza imediatamente na feição correspondente.
- **🎯 Filtros Espaciais por Quadra**:
  - Filtre os 294 lotes por quadra específica (Quadra 01 a 11) com cálculo instantâneo da quantidade de lotes, área total e área média da seleção.
- **📐 Ferramentas de Medição Cartográfica**:
  - Medição de distância linear contínua (metros e quilômetros).
  - Medição de área poligonal dinâmica (m² e hectares).
- **📍 Coordenadas em Tempo Real no Rodapé**:
  - **WGS84:** Latitude e Longitude geodésicas em graus decimais (5 casas decimais).
  - **UTM Zona 21 Sul:** Coordenadas métricas rigorosas projetadas (E e N) conforme SIRGAS 2000.
  - Nível de zoom atual e escala gráfica métrica.
- **🖨️ Exportação de Mapa (PNG)**:
  - Botão no cabeçalho para gerar uma captura de alta definição da visão atual do mapa.
- **🌓 Modo Escuro / Modo Claro**:
  - Interface com suporte completo a tema dark mode profissional.
- **📁 Carregamento Dinâmico de Novos GeoJSONs**:
  - Permite arrastar e soltar ou fazer upload de qualquer outro arquivo GeoJSON adicional para sobrepor na sessão.

---

## 🚀 Como Executar o Geoportal

Você tem **3 formas práticas** de usar:

### Opção 1: Duplo-clique no executável (Mais Fácil)
Basta dar dois cliques no arquivo:
```
iniciar_webgis.bat
```
Ele iniciará automaticamente o servidor local e abrirá o Geoportal no seu navegador padrão.

### Opção 2: Via Terminal / Python
Execute no PowerShell ou Prompt de Comando:
```powershell
python server.py
```
O servidor será aberto em `http://127.0.0.1:8080/index.html`.

### Opção 3: Abertura Direta do Arquivo HTML
Basta dar duplo-clique diretamente no arquivo `index.html`. Graças aos módulos pré-carregados na pasta `data/`, o sistema funcionará mesmo sem servidor web ativo e sem restrições de CORS.

---

## 📁 Estrutura de Diretórios

```
Webgis PILOTO/
├── index.html                   # Interface principal do Geoportal
├── iniciar_webgis.bat           # Inicializador rápido para Windows
├── server.py                    # Servidor local Python com auto-launch
├── README.md                    # Documentação do projeto
├── css/
│   └── style.css                # Estilos modernos, responsivos e dark/light
├── js/
│   ├── app.js                   # Lógica da aplicação, Leaflet, medição e eventos
│   └── layers_config.js         # Configurações cartográficas, estilos e popups
├── data/                        # Dados espaciais otimizados com métricas
│   ├── lotes_data.js
│   ├── quadras_data.js
│   ├── app_data.js
│   ├── curso_dagua_data.js
│   ├── implantacao_data.js
│   └── manifest.json
├── lib/                         # Bibliotecas JS/CSS para funcionamento offline
│   ├── leaflet.js / leaflet.css
│   ├── turf.min.js
│   ├── html2canvas.min.js
│   └── fontawesome/
└── shp geojason/                # Seus arquivos GeoJSON originais preservados
    ├── app_geo.geojson
    ├── curso_dagua_geo.geojson
    ├── Implantacao_geo.geojson
    ├── lotes_geo.geojson
    └── quadras_geo.geojson
```
