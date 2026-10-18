/**
 * GEOPORTAL PILOTO | WEBGIS PROFISSIONAL
 * Mecanismo Cartográfico Avançado, Gerenciador de Camadas e Ferramentas Espaciais
 */

// Biblioteca Central de Ícones SVG Nativos
const SVG_ICONS = {
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  filter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  chart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  ruler: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 4 4"/><path d="m13 7 4 4"/><path d="m11 9 4 4"/><path d="m9 11 4 4"/><path d="m7 13 4 4"/><path d="m5 15 4 4"/><path d="m2 22 20-20"/></svg>`,
  table: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
  camera: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  expand: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>`,
  compress: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="10" x2="3" y1="14" y2="21"/></svg>`,
  info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  locate: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><circle cx="12" cy="12" r="7"/></svg>`,
  chevronUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  palette: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"/></svg>`,
  zoom: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>`,
  reset: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
  x: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
};

const WebGIS = {
  map: null,
  activeBasemap: 'satellite',
  basemaps: {},
  layers: {},
  labelsLayers: {},
  featuresIndex: {},
  currentFilterQuadra: null,
  currentTableLayer: 'lotes',
  layerOrder: ['app', 'curso_dagua', 'quadras', 'lotes', 'implantacao'], // ordem de renderização (base -> topo)
  measureMode: null,
  measurePoints: [],
  measureLayer: null,
  initialBounds: [[-15.55887, -56.09580], [-15.54231, -56.08340]],
  highlightLayer: null,

  // Inicialização
  init: async function() {
    console.log("Inicializando Geoportal WebGIS Pro...");
    this.initMap();
    this.initBasemaps();
    this.initPanes();
    this.initMeasureLayer();
    await this.loadAllLayers();
    this.initUI();
    this.renderLayersManager();
    this.initSearch();
    this.initCoordinatesTracker();
    this.updateStatsDashboard();
    this.renderAttributeTable('lotes');
    console.log("Geoportal pronto para navegação!");
  },

  // Inicialização do Mapa Leaflet
  initMap: function() {
    this.map = L.map('map', {
      center: [-15.55059, -56.08960],
      zoom: 16,
      minZoom: 13,
      maxZoom: 20,
      zoomControl: false
    });

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    L.control.scale({
      position: 'bottomleft',
      metric: true,
      imperial: false,
      maxWidth: 150
    }).addTo(this.map);

    this.map.fitBounds(this.initialBounds, { padding: [40, 40] });

    // Previne qualquer contorno/quadrado de foco ao clicar, arrastar ou usar botão direito
    this.map.getContainer().addEventListener('mousedown', function(e) {
      if (document.activeElement && document.activeElement.blur && document.activeElement !== document.body) {
        document.activeElement.blur();
      }
    });

    // Desativa menu de contexto padrão do navegador sobre o mapa
    this.map.on('contextmenu', function(e) {
      if (e.originalEvent) {
        e.originalEvent.preventDefault();
      }
    });
  },

  // Criação de Panes Específicos para controle estrito de Z-Index e Reordenação
  initPanes: function() {
    const panes = [
      { name: 'appPane', zIndex: 410 },
      { name: 'curso_daguaPane', zIndex: 420 },
      { name: 'quadrasPane', zIndex: 430 },
      { name: 'lotesPane', zIndex: 440 },
      { name: 'implantacaoPane', zIndex: 450 },
      { name: 'highlightPane', zIndex: 460 },
      { name: 'labelsPane', zIndex: 470 }
    ];

    panes.forEach(p => {
      const pane = this.map.createPane(p.name);
      pane.style.zIndex = p.zIndex;
    });

    this.highlightLayer = L.layerGroup({ pane: 'highlightPane' }).addTo(this.map);
  },

  // Configuração dos 3 Mapas de Fundo (Basemaps)
  initBasemaps: function() {
    const esriSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri &mdash; Maxar, Earthstar Geographics',
      maxZoom: 19
    });

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    });

    const positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      maxZoom: 20,
      subdomains: 'abcd'
    });

    this.basemaps = {
      satellite: esriSatellite,
      osm: osm,
      positron: positron
    };

    this.basemaps.satellite.addTo(this.map);
  },

  switchBasemap: function(name) {
    if (!this.basemaps[name]) return;

    if (this.basemaps[this.activeBasemap]) {
      this.map.removeLayer(this.basemaps[this.activeBasemap]);
    }

    this.basemaps[name].addTo(this.map);
    this.basemaps[name].bringToBack();
    this.activeBasemap = name;

    document.querySelectorAll('.basemap-card').forEach(el => {
      el.classList.toggle('active', el.dataset.basemap === name);
    });

    const names = {
      satellite: 'Satélite (Esri)',
      osm: 'OpenStreetMap',
      positron: 'CartoDB Positron'
    };
    const statusEl = document.getElementById('status-basemap');
    if (statusEl) statusEl.textContent = names[name] || name;
  },

  initMeasureLayer: function() {
    this.measureLayer = L.layerGroup().addTo(this.map);
  },

  // Carregamento de Camadas
  loadAllLayers: async function() {
    for (const key of this.layerOrder) {
      const config = LAYERS_CONFIG[key];
      if (!config) continue;

      let geojsonData = null;
      if (window[config.dataKey]) {
        geojsonData = window[config.dataKey];
      } else {
        try {
          const resp = await fetch(config.geojsonPath);
          if (resp.ok) geojsonData = await resp.json();
        } catch (e) {
          console.warn(`Fallback fetch falhou para ${config.geojsonPath}:`, e);
        }
      }

      if (geojsonData) {
        this.addGeoJsonLayer(key, geojsonData, config);
      }
    }
    this.applyLayerOrder();
  },

  // Retorna o estilo atual de uma feição respeitando customizações e filtros
  getFeatureStyle: function(key, feature) {
    const config = LAYERS_CONFIG[key];
    if (!config) return {};

    // Caso de filtro por Quadra ativo em Lotes
    if (key === 'lotes' && this.currentFilterQuadra) {
      const featQuadra = feature.properties ? feature.properties.Quadra : null;
      if (featQuadra !== this.currentFilterQuadra) {
        return {
          opacity: 0.08,
          fillOpacity: 0.03,
          color: '#94a3b8',
          weight: 1
        };
      } else {
        return {
          color: '#f59e0b',
          weight: 2.5,
          opacity: 1,
          fillColor: '#fde68a',
          fillOpacity: 0.65
        };
      }
    }

    // Estilo regular da camada
    if (config.isPolygon) {
      return {
        color: config.color,
        weight: config.weight,
        opacity: config.opacity,
        fillColor: config.fillColor,
        fillOpacity: config.fillOpacity * config.opacity,
        dashArray: key === 'app' ? '4, 4' : null
      };
    } else {
      return {
        color: config.color,
        weight: config.weight,
        opacity: config.opacity
      };
    }
  },

  // Adicionar Camada GeoJSON
  addGeoJsonLayer: function(key, data, config) {
    const self = this;
    const paneName = `${key}Pane`;
    const labelGroup = L.layerGroup({ pane: 'labelsPane' });
    self.labelsLayers[key] = labelGroup;

    const layer = L.geoJSON(data, {
      pane: paneName,
      style: function(feat) {
        return self.getFeatureStyle(key, feat);
      },
      onEachFeature: function(feature, layerItem) {
        const props = feature.properties || {};

        if (key === 'lotes' && props.QuadraLote) {
          self.featuresIndex[props.QuadraLote] = {
            layerKey: key,
            layerItem: layerItem,
            props: props,
            bounds: layerItem.getBounds ? layerItem.getBounds() : null
          };
        } else if (key === 'quadras') {
          const qdName = `Quadra ${props.Quadra || props.Entity}`;
          self.featuresIndex[qdName] = {
            layerKey: key,
            layerItem: layerItem,
            props: props,
            bounds: layerItem.getBounds ? layerItem.getBounds() : null
          };
        }

        // Popup
        if (config.createPopup) {
          layerItem.bindPopup(config.createPopup(props), {
            maxWidth: 320,
            className: 'custom-popup-container'
          });
        }

        // Tooltip
        if (config.createTooltip) {
          // Quadras tooltip apenas se os lotes estiverem desativados ou na borda
          layerItem.bindTooltip(config.createTooltip(props), {
            sticky: true,
            direction: 'top'
          });
        }

        // Eventos de Mouse (Hover, Seleção e Prevenção de Foco/Retângulo)
        layerItem.on({
          mouseover: function(e) {
            if (key === 'quadras' && self.layers['lotes'] && self.layers['lotes'].config.visible) {
              return;
            }
            if (config.highlightStyle && key !== 'implantacao') {
              e.target.setStyle(config.highlightStyle);
            }
          },
          mouseout: function(e) {
            if (key !== 'implantacao') {
              e.target.setStyle(self.getFeatureStyle(key, feature));
            }
          },
          mousedown: function(e) {
            if (e.originalEvent) {
              if (e.originalEvent.target && e.originalEvent.target.blur) {
                e.originalEvent.target.blur();
              }
            }
          },
          contextmenu: function(e) {
            if (e.originalEvent) {
              e.originalEvent.preventDefault();
            }
          },
          click: function() {
            self.onFeatureClick(key, feature, layerItem);
          }
        });

        // Remove tabindex de acessibilidade do elemento SVG para evitar contorno de foco do Chrome
        if (layerItem._path) {
          layerItem._path.removeAttribute('tabindex');
        }

        // Rótulos no mapa
        if (key === 'lotes' && props.Lote && layerItem.getBounds) {
          const center = layerItem.getBounds().getCenter();
          const labelIcon = L.divIcon({
            className: 'map-label',
            html: props.Lote,
            iconSize: [22, 14],
            iconAnchor: [11, 7]
          });
          const marker = L.marker(center, { icon: labelIcon, interactive: false, pane: 'labelsPane' });
          labelGroup.addLayer(marker);
        } else if (key === 'quadras' && (props.Quadra || props.Entity) && layerItem.getBounds) {
          const center = layerItem.getBounds().getCenter();
          const labelIcon = L.divIcon({
            className: 'map-label map-label-quadra',
            html: `Q. ${props.Quadra || props.Entity}`,
            iconSize: [40, 18],
            iconAnchor: [20, 9]
          });
          const marker = L.marker(center, { icon: labelIcon, interactive: false, pane: 'labelsPane' });
          labelGroup.addLayer(marker);
        }
      }
    });

    // Garante que todo path SVG adicionado no DOM não receba contorno de foco do navegador
    layer.on('layeradd', function(e) {
      if (e.layer && e.layer._path) {
        e.layer._path.removeAttribute('tabindex');
        e.layer._path.style.outline = 'none';
      }
    });

    if (config.visible) {
      layer.addTo(self.map);
      if (config.showLabels) labelGroup.addTo(self.map);
    }

    self.layers[key] = {
      leafletLayer: layer,
      data: data,
      config: config
    };

    // Controle de rótulos por nível de zoom
    self.map.on('zoomend', function() {
      const z = self.map.getZoom();
      if (key === 'lotes' && config.showLabels) {
        if (z >= 17) {
          if (!self.map.hasLayer(labelGroup)) labelGroup.addTo(self.map);
        } else {
          if (self.map.hasLayer(labelGroup)) self.map.removeLayer(labelGroup);
        }
      }
    });
  },

  // Clique na feição (destaque limpo sem corromper estilos dos outros lotes)
  onFeatureClick: function(key, feature, layerItem) {
    this.highlightLayer.clearLayers();

    if (layerItem && layerItem.toGeoJSON) {
      const highlight = L.geoJSON(layerItem.toGeoJSON(), {
        pane: 'highlightPane',
        style: {
          color: '#f43f5e',
          weight: 4,
          fillColor: '#fda4af',
          fillOpacity: 0.5
        }
      }).addTo(this.highlightLayer);

      this.map.once('popupclose', () => {
        this.highlightLayer.removeLayer(highlight);
      });
    }
  },

  // ==========================================================================
  // GERENCIADOR DE CAMADAS: REORDENAÇÃO, CORES, ESPESSURA E OPACIDADE
  // ==========================================================================

  // Aplica a ordem de Z-Index aos Panes
  applyLayerOrder: function() {
    const baseZ = 410;
    this.layerOrder.forEach((key, index) => {
      const pane = this.map.getPane(`${key}Pane`);
      if (pane) {
        pane.style.zIndex = baseZ + (index * 10);
      }
    });
  },

  // Subir camada na ordem (renderiza mais acima)
  moveLayerUp: function(key) {
    const idx = this.layerOrder.indexOf(key);
    if (idx < this.layerOrder.length - 1) {
      const temp = this.layerOrder[idx];
      this.layerOrder[idx] = this.layerOrder[idx + 1];
      this.layerOrder[idx + 1] = temp;
      this.applyLayerOrder();
      this.renderLayersManager();
    }
  },

  // Descer camada na ordem (renderiza mais abaixo)
  moveLayerDown: function(key) {
    const idx = this.layerOrder.indexOf(key);
    if (idx > 0) {
      const temp = this.layerOrder[idx];
      this.layerOrder[idx] = this.layerOrder[idx - 1];
      this.layerOrder[idx - 1] = temp;
      this.applyLayerOrder();
      this.renderLayersManager();
    }
  },

  // Atualizar cor de borda / linha
  updateLayerColor: function(key, newColor) {
    const config = LAYERS_CONFIG[key];
    if (!config) return;
    config.color = newColor;
    this.refreshLayerStyle(key);
    const swatch = document.getElementById(`swatch-${key}`);
    if (swatch) swatch.style.borderColor = newColor;
  },

  // Atualizar cor de preenchimento
  updateLayerFillColor: function(key, newFillColor) {
    const config = LAYERS_CONFIG[key];
    if (!config) return;
    config.fillColor = newFillColor;
    this.refreshLayerStyle(key);
    const swatch = document.getElementById(`swatch-${key}`);
    if (swatch) swatch.style.backgroundColor = newFillColor;
  },

  // Atualizar espessura da linha
  updateLayerWeight: function(key, weight) {
    const config = LAYERS_CONFIG[key];
    if (!config) return;
    config.weight = parseFloat(weight);
    this.refreshLayerStyle(key);
    const badge = document.getElementById(`weight-val-${key}`);
    if (badge) badge.textContent = `${weight}px`;
  },

  // Atualizar opacidade
  updateLayerOpacity: function(key, opacity) {
    const config = LAYERS_CONFIG[key];
    if (!config) return;
    config.opacity = parseFloat(opacity);
    this.refreshLayerStyle(key);
    const badge = document.getElementById(`opacity-val-${key}`);
    if (badge) badge.textContent = `${Math.round(opacity * 100)}%`;
  },

  // Restaurar estilo padrão da camada
  resetLayerStyle: function(key) {
    const defaults = DEFAULT_LAYER_STYLES[key];
    const config = LAYERS_CONFIG[key];
    if (!defaults || !config) return;

    config.color = defaults.color;
    config.fillColor = defaults.fillColor;
    config.weight = defaults.weight;
    config.opacity = defaults.opacity;
    config.fillOpacity = defaults.fillOpacity;

    this.refreshLayerStyle(key);
    this.renderLayersManager();
  },

  // Reaplica estilos em todas as feições da camada
  refreshLayerStyle: function(key) {
    const lObj = this.layers[key];
    if (!lObj || !lObj.leafletLayer) return;

    lObj.leafletLayer.setStyle(feat => {
      return this.getFeatureStyle(key, feat);
    });
  },

  // Alternar Visibilidade
  toggleLayerVisibility: function(key, isVisible) {
    const lObj = this.layers[key];
    if (!lObj) return;

    lObj.config.visible = isVisible;
    if (isVisible) {
      if (!this.map.hasLayer(lObj.leafletLayer)) lObj.leafletLayer.addTo(this.map);
      if (lObj.config.showLabels && this.labelsLayers[key]) this.labelsLayers[key].addTo(this.map);
    } else {
      if (this.map.hasLayer(lObj.leafletLayer)) this.map.removeLayer(lObj.leafletLayer);
      if (this.labelsLayers[key] && this.map.hasLayer(this.labelsLayers[key])) {
        this.map.removeLayer(this.labelsLayers[key]);
      }
    }
  },

  // Alternar Rótulos
  toggleLabels: function(key, show) {
    const lObj = this.layers[key];
    if (!lObj || !this.labelsLayers[key]) return;

    lObj.config.showLabels = show;
    if (show && lObj.config.visible) {
      this.labelsLayers[key].addTo(this.map);
    } else {
      if (this.map.hasLayer(this.labelsLayers[key])) {
        this.map.removeLayer(this.labelsLayers[key]);
      }
    }
  },

  zoomToLayer: function(key) {
    const lObj = this.layers[key];
    if (lObj && lObj.leafletLayer) {
      const bounds = lObj.leafletLayer.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 18 });
      }
    }
  },

  // Renderiza o Painel Completo de Camadas com Edição de Estilos e Reordenação
  renderLayersManager: function() {
    const container = document.getElementById('layers-manager-container');
    if (!container) return;

    // Renderiza do topo para a base (para leitura humana intuitiva na lista)
    const reversedOrder = [...this.layerOrder].reverse();

    let html = `<div class="layers-manager-list">`;

    reversedOrder.forEach((key, revIdx) => {
      const config = LAYERS_CONFIG[key];
      if (!config) return;

      const isTop = revIdx === 0;
      const isBottom = revIdx === reversedOrder.length - 1;
      const count = this.layers[key] && this.layers[key].data ? this.layers[key].data.features.length : '';

      html += `
        <div class="layer-card" id="layer-card-${key}">
          <div class="layer-header">
            <div class="layer-title-wrapper">
              <label class="switch" title="Ligar/Desligar Camada">
                <input type="checkbox" ${config.visible ? 'checked' : ''} onchange="WebGIS.toggleLayerVisibility('${key}', this.checked)">
                <span class="slider"></span>
              </label>
              <div class="layer-swatch" id="swatch-${key}" style="background:${config.fillColor}; border-color:${config.color};"></div>
              <span class="layer-title">${config.title}</span>
              ${count ? `<span class="layer-badge">${count}</span>` : ''}
            </div>

            <div class="layer-actions">
              <button class="layer-btn" title="Subir Camada" ${isTop ? 'disabled' : ''} onclick="WebGIS.moveLayerUp('${key}')">
                <span class="icon-svg icon-sm">${SVG_ICONS.chevronUp}</span>
              </button>
              <button class="layer-btn" title="Descer Camada" ${isBottom ? 'disabled' : ''} onclick="WebGIS.moveLayerDown('${key}')">
                <span class="icon-svg icon-sm">${SVG_ICONS.chevronDown}</span>
              </button>
              <button class="layer-btn" title="Personalizar Estilo (Cor, Espessura, Transparência)" onclick="document.getElementById('drawer-style-${key}').classList.toggle('open')">
                <span class="icon-svg icon-sm">${SVG_ICONS.palette}</span>
              </button>
              <button class="layer-btn" title="Zoom na Camada" onclick="WebGIS.zoomToLayer('${key}')">
                <span class="icon-svg icon-sm">${SVG_ICONS.zoom}</span>
              </button>
            </div>
          </div>

          <!-- Drawer de Estilização em Tempo Real -->
          <div class="layer-style-drawer" id="drawer-style-${key}">
            
            ${config.isPolygon ? `
            <div class="style-control-row">
              <label>Cor de Preenchimento:</label>
              <div class="color-picker-wrapper">
                <input type="color" class="color-input" value="${config.fillColor}" onchange="WebGIS.updateLayerFillColor('${key}', this.value)">
                <span style="font-size:0.7rem; font-family:monospace;">${config.fillColor}</span>
              </div>
            </div>
            ` : ''}

            <div class="style-control-row">
              <label>${config.isPolygon ? 'Cor da Borda:' : 'Cor da Linha:'}</label>
              <div class="color-picker-wrapper">
                <input type="color" class="color-input" value="${config.color}" onchange="WebGIS.updateLayerColor('${key}', this.value)">
                <span style="font-size:0.7rem; font-family:monospace;">${config.color}</span>
              </div>
            </div>

            <div class="style-control-row">
              <label>Espessura:</label>
              <div class="slider-wrapper">
                <input type="range" class="style-slider" min="0.5" max="8" step="0.5" value="${config.weight}" oninput="WebGIS.updateLayerWeight('${key}', this.value)">
                <span class="val-badge" id="weight-val-${key}">${config.weight}px</span>
              </div>
            </div>

            <div class="style-control-row">
              <label>Opacidade:</label>
              <div class="slider-wrapper">
                <input type="range" class="style-slider" min="0.05" max="1" step="0.05" value="${config.opacity}" oninput="WebGIS.updateLayerOpacity('${key}', this.value)">
                <span class="val-badge" id="opacity-val-${key}">${Math.round(config.opacity * 100)}%</span>
              </div>
            </div>

            ${key === 'lotes' || key === 'quadras' ? `
            <div class="style-control-row">
              <label>Exibir Rótulos:</label>
              <label class="switch">
                <input type="checkbox" ${config.showLabels ? 'checked' : ''} onchange="WebGIS.toggleLabels('${key}', this.checked)">
                <span class="slider"></span>
              </label>
            </div>
            ` : ''}

            <div style="display:flex; justify-content:flex-end; margin-top:4px;">
              <button class="btn-pill" style="font-size:0.72rem; padding:4px 8px;" onclick="WebGIS.resetLayerStyle('${key}')">
                <span class="icon-svg icon-sm">${SVG_ICONS.reset}</span> Restaurar Padrão
              </button>
            </div>

          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  },

  // ==========================================================================
  // FILTROS ROBUSTOS COM RESET COMPLETO
  // ==========================================================================
  applyQuadraFilter: function(selectedQuadra) {
    this.currentFilterQuadra = selectedQuadra || null;
    const lotesLayer = this.layers['lotes'];
    if (!lotesLayer) return;

    // Atualiza o estilo de todas as feições da camada
    this.refreshLayerStyle('lotes');

    const banner = document.getElementById('active-filter-banner');
    const summaryBox = document.getElementById('filter-results-summary');
    const select = document.getElementById('filter-quadra-select');

    if (select) select.value = selectedQuadra || '';

    if (selectedQuadra) {
      if (banner) {
        banner.style.display = 'flex';
        banner.innerHTML = `<span>Filtrando: <b>Quadra ${selectedQuadra}</b></span> <button onclick="WebGIS.clearQuadraFilter()">Limpar Filtro</button>`;
      }

      // Calcula limites e métricas da quadra selecionada
      const features = lotesLayer.data.features || [];
      const bounds = L.latLngBounds([]);
      let matchCount = 0;
      let totalArea = 0;

      for (const feat of features) {
        if (feat.properties.Quadra === selectedQuadra) {
          matchCount++;
          totalArea += (feat.properties.area_m2 || 0);
          const item = this.featuresIndex[feat.properties.QuadraLote];
          if (item && item.bounds) bounds.extend(item.bounds);
        }
      }

      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 18 });
      }

      if (summaryBox) {
        summaryBox.innerHTML = `
          <div style="background:var(--primary-light); padding:12px; border-radius:var(--radius-md); font-size:0.8rem; border:1px solid #bae6fd;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <b>Quadra ${selectedQuadra} Selecionada</b>
              <button class="btn-pill warning" style="padding:2px 8px; font-size:0.72rem;" onclick="WebGIS.clearQuadraFilter()">
                <span class="icon-svg icon-sm">${SVG_ICONS.reset}</span> Limpar
              </button>
            </div>
            • <b>${matchCount}</b> lotes encontrados<br>
            • Área total: <b>${Math.round(totalArea).toLocaleString('pt-BR')} m²</b> (${(totalArea/10000).toFixed(2)} ha)<br>
            • Área média: <b>${Math.round(totalArea / (matchCount || 1)).toLocaleString('pt-BR')} m²</b>
          </div>
        `;
      }
    } else {
      this.clearQuadraFilter();
    }
  },

  // Limpa o filtro de quadra e restaura todos os 294 lotes ao padrão sem recarregar a página
  clearQuadraFilter: function() {
    this.currentFilterQuadra = null;
    this.highlightLayer.clearLayers();
    this.refreshLayerStyle('lotes');

    const select = document.getElementById('filter-quadra-select');
    if (select) select.value = '';

    const banner = document.getElementById('active-filter-banner');
    if (banner) banner.style.display = 'none';

    const summaryBox = document.getElementById('filter-results-summary');
    if (summaryBox) summaryBox.innerHTML = '';

    this.zoomToHome();
  },

  zoomToHome: function() {
    this.map.fitBounds(this.initialBounds, { padding: [40, 40] });
  },

  locateUser: function() {
    if (!navigator.geolocation) {
      alert("Geolocalização não é suportada.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        this.map.flyTo([lat, lon], 17);
        L.circleMarker([lat, lon], {
          radius: 8,
          fillColor: '#3b82f6',
          color: '#ffffff',
          weight: 3,
          fillOpacity: 0.9
        }).addTo(this.map).bindPopup("Sua Localização").openPopup();
      },
      err => alert("Não foi possível obter localização: " + err.message)
    );
  },

  zoomToFeature: function(layerKey, identifier) {
    const item = this.featuresIndex[identifier];
    if (!item) return;

    if (item.bounds) {
      this.map.fitBounds(item.bounds, { padding: [80, 80], maxZoom: 19 });
    }

    this.onFeatureClick(layerKey, item.props, item.layerItem);

    if (item.layerItem && item.layerItem.openPopup) {
      item.layerItem.openPopup();
    }
  },

  copyFeatureCoords: function(identifier) {
    const item = this.featuresIndex[identifier];
    if (!item || !item.bounds) return;
    const center = item.bounds.getCenter();
    const text = `${center.lat.toFixed(6)}, ${center.lng.toFixed(6)}`;
    navigator.clipboard.writeText(text).then(() => {
      alert(`Coordenadas copiadas: ${text}`);
    });
  },

  // ==========================================================================
  // EVENTOS E INTERFACE GRÁFICA
  // ==========================================================================
  initUI: function() {
    const self = this;

    // Sidebar Toggle
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const iconSpan = toggleBtn.querySelector('.icon-svg');
        if (iconSpan) {
          iconSpan.innerHTML = sidebar.classList.contains('collapsed') ? SVG_ICONS.chevronRight : SVG_ICONS.chevronLeft;
        }
        setTimeout(() => self.map.invalidateSize(), 300);
      });
    }

    // Abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const pane = document.getElementById(`tab-${btn.dataset.tab}`);
        if (pane) pane.classList.add('active');
      });
    });

    // Basemaps Cards
    document.querySelectorAll('.basemap-card').forEach(card => {
      card.addEventListener('click', () => {
        self.switchBasemap(card.dataset.basemap);
      });
    });

    // Modo Escuro
    const darkToggle = document.getElementById('btn-dark-toggle');
    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        const iconSpan = darkToggle.querySelector('.icon-svg');
        if (iconSpan) iconSpan.innerHTML = isDark ? SVG_ICONS.sun : SVG_ICONS.moon;
      });
    }

    // Tela Cheia
    const fsBtn = document.getElementById('btn-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
          const iconSpan = fsBtn.querySelector('.icon-svg');
          if (iconSpan) iconSpan.innerHTML = SVG_ICONS.compress;
        } else {
          if (document.exitFullscreen) document.exitFullscreen();
          const iconSpan = fsBtn.querySelector('.icon-svg');
          if (iconSpan) iconSpan.innerHTML = SVG_ICONS.expand;
        }
      });
    }

    // Drawer Tabela de Atributos
    const btnTable = document.getElementById('btn-toggle-table');
    const drawer = document.getElementById('attribute-drawer');
    if (btnTable && drawer) {
      btnTable.addEventListener('click', () => {
        drawer.classList.toggle('open');
        btnTable.classList.toggle('active', drawer.classList.contains('open'));
        setTimeout(() => self.map.invalidateSize(), 300);
      });
    }

    const btnCloseDrawer = document.getElementById('btn-close-drawer');
    if (btnCloseDrawer && drawer) {
      btnCloseDrawer.addEventListener('click', () => {
        drawer.classList.remove('open');
        if (btnTable) btnTable.classList.remove('active');
        setTimeout(() => self.map.invalidateSize(), 300);
      });
    }

    const selectLayer = document.getElementById('table-layer-select');
    if (selectLayer) {
      selectLayer.addEventListener('change', (e) => {
        self.renderAttributeTable(e.target.value);
      });
    }

    const tableSearch = document.getElementById('table-search-input');
    if (tableSearch) {
      tableSearch.addEventListener('input', (e) => {
        self.filterAttributeTable(e.target.value);
      });
    }

    const btnExportCSV = document.getElementById('btn-export-csv');
    if (btnExportCSV) {
      btnExportCSV.addEventListener('click', () => {
        self.exportTableToCSV(self.currentTableLayer);
      });
    }

    const btnExportMap = document.getElementById('btn-export-map');
    if (btnExportMap) {
      btnExportMap.addEventListener('click', () => {
        self.exportMapImage();
      });
    }

    const btnAbout = document.getElementById('btn-about');
    const modalAbout = document.getElementById('modal-about');
    const btnCloseModal = document.getElementById('btn-close-modal');
    if (btnAbout && modalAbout) {
      btnAbout.addEventListener('click', () => modalAbout.classList.add('open'));
    }
    if (btnCloseModal && modalAbout) {
      btnCloseModal.addEventListener('click', () => modalAbout.classList.remove('open'));
    }

    const filterQuadraSelect = document.getElementById('filter-quadra-select');
    if (filterQuadraSelect) {
      filterQuadraSelect.addEventListener('change', (e) => {
        self.applyQuadraFilter(e.target.value);
      });
    }
  },

  // Busca Rápida
  initSearch: function() {
    const self = this;
    const input = document.getElementById('main-search-input');
    const dropdown = document.getElementById('search-dropdown');
    const clearBtn = document.getElementById('search-clear');

    if (!input || !dropdown) return;

    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query.length > 0 ? 'block' : 'none';

      if (query.length < 1) {
        dropdown.style.display = 'none';
        return;
      }

      const matches = [];
      for (const [name, item] of Object.entries(self.featuresIndex)) {
        if (name.toLowerCase().includes(query)) {
          matches.push({ name, item });
          if (matches.length >= 10) break;
        }
      }

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-result-item" style="color:var(--text-muted); cursor:default;">Nenhum lote ou quadra encontrado</div>`;
        dropdown.style.display = 'block';
        return;
      }

      dropdown.innerHTML = matches.map(m => {
        const p = m.item.props;
        const sub = p.area_m2 ? `${p.area_m2.toLocaleString('pt-BR')} m²` : (m.item.layerKey === 'quadras' ? 'Quadra Urbana' : '');
        return `
          <div class="search-result-item" onclick="WebGIS.selectSearchResult('${m.name}')">
            <div>
              <div class="search-result-title">${m.name}</div>
              <div class="search-result-desc">${sub}</div>
            </div>
            <span class="icon-svg icon-sm" style="color:var(--primary);">${SVG_ICONS.zoom}</span>
          </div>
        `;
      }).join('');
      dropdown.style.display = 'block';
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        dropdown.style.display = 'none';
      });
    }

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  },

  selectSearchResult: function(name) {
    const item = this.featuresIndex[name];
    if (!item) return;
    document.getElementById('search-dropdown').style.display = 'none';
    document.getElementById('main-search-input').value = name;
    this.zoomToFeature(item.layerKey, name);
  },

  // Rastreador de Coordenadas
  initCoordinatesTracker: function() {
    const coordsEl = document.getElementById('status-coords');
    const zoomEl = document.getElementById('status-zoom');
    if (!coordsEl) return;

    this.map.on('mousemove', (e) => {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;
      const utm = this.latLonToUTM21S(lat, lon);
      coordsEl.innerHTML = `<b>WGS84:</b> ${lat.toFixed(5)}°, ${lon.toFixed(5)}° &nbsp;|&nbsp; <b>UTM 21S:</b> E ${Math.round(utm.x).toLocaleString('pt-BR')}m, N ${Math.round(utm.y).toLocaleString('pt-BR')}m`;
    });

    this.map.on('zoomend', () => {
      if (zoomEl) zoomEl.textContent = this.map.getZoom();
    });
  },

  latLonToUTM21S: function(lat, lon) {
    const a = 6378137.0;
    const f = 1 / 298.257223563;
    const k0 = 0.9996;
    const lon0 = -57.0;

    const phi = lat * Math.PI / 180.0;
    const lam = lon * Math.PI / 180.0;
    const lam0 = lon0 * Math.PI / 180.0;

    const e2 = 2 * f - f * f;
    const e_prime2 = e2 / (1 - e2);

    const N = a / Math.sqrt(1 - e2 * Math.sin(phi) * Math.sin(phi));
    const T = Math.tan(phi) * Math.tan(phi);
    const C = e_prime2 * Math.cos(phi) * Math.cos(phi);
    const A = (lam - lam0) * Math.cos(phi);

    const M = a * ((1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 * e2 * e2 / 256) * phi
      - (3 * e2 / 8 + 3 * e2 * e2 / 32 + 45 * e2 * e2 * e2 / 1024) * Math.sin(2 * phi)
      + (15 * e2 * e2 / 256 + 45 * e2 * e2 * e2 / 1024) * Math.sin(4 * phi)
      - (35 * e2 * e2 / 3072) * Math.sin(6 * phi));

    const x = k0 * N * (A + (1 - T + C) * Math.pow(A, 3) / 6 + (5 - 18 * T + T * T + 72 * C - 58 * e_prime2) * Math.pow(A, 5) / 120) + 500000.0;
    let y = k0 * (M + N * Math.tan(phi) * (Math.pow(A, 2) / 2 + (5 - T + 9 * C + 4 * C * C) * Math.pow(A, 4) / 24 + (61 - 58 * T + T * T + 600 * C - 330 * e_prime2) * Math.pow(A, 6) / 720));
    if (lat < 0) y += 10000000.0;

    return { x: x, y: y };
  },

  // Tabela de Atributos
  renderAttributeTable: function(layerKey) {
    this.currentTableLayer = layerKey;
    const container = document.getElementById('attr-table-container');
    const titleEl = document.getElementById('drawer-layer-title');
    if (!container) return;

    const layerObj = this.layers[layerKey];
    if (!layerObj || !layerObj.data || !layerObj.data.features) {
      container.innerHTML = `<p style="padding:20px; color:var(--text-muted);">Camada sem feições.</p>`;
      return;
    }

    const features = layerObj.data.features;
    if (titleEl) titleEl.textContent = `${layerObj.config.title} (${features.length} registros)`;

    let columns = [];
    if (layerKey === 'lotes') {
      columns = [
        { key: 'Quadra', label: 'Quadra' },
        { key: 'Lote', label: 'Lote' },
        { key: 'QuadraLote', label: 'Identificador' },
        { key: 'area_m2', label: 'Área (m²)', format: v => v ? v.toLocaleString('pt-BR') : '-' },
        { key: 'perimetro_m', label: 'Perímetro (m)', format: v => v ? v.toLocaleString('pt-BR') : '-' }
      ];
    } else if (layerKey === 'quadras') {
      columns = [
        { key: 'Quadra', label: 'Quadra', format: (v, p) => v || p.Entity || '-' },
        { key: 'area_m2', label: 'Área (m²)', format: v => v ? v.toLocaleString('pt-BR') : '-' },
        { key: 'area_ha', label: 'Área (ha)', format: v => v ? v.toLocaleString('pt-BR') : '-' },
        { key: 'Layer', label: 'Tipologia' }
      ];
    } else if (layerKey === 'app') {
      columns = [
        { key: 'Entity', label: 'Feição' },
        { key: 'area_ha', label: 'Área (ha)', format: () => '22,15 ha' },
        { key: 'area_m2', label: 'Área (m²)', format: () => '221.508 m²' }
      ];
    } else if (layerKey === 'curso_dagua') {
      columns = [
        { key: 'Layer', label: 'Camada' },
        { key: 'comprimento_m', label: 'Comprimento (m)', format: v => v ? v.toLocaleString('pt-BR') : '-' }
      ];
    }

    let html = `
      <table class="attr-table" id="active-attr-table">
        <thead>
          <tr>
            <th>#</th>
            ${columns.map(c => `<th>${c.label}</th>`).join('')}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
    `;

    features.forEach((feat, idx) => {
      const p = feat.properties || {};
      const idKey = p.QuadraLote || (layerKey === 'quadras' ? `Quadra ${p.Quadra || p.Entity}` : '');
      html += `
        <tr onclick="WebGIS.zoomToFeature('${layerKey}', '${idKey}')">
          <td style="color:var(--text-muted); font-weight:600;">${idx + 1}</td>
          ${columns.map(c => {
            const val = p[c.key];
            const formatted = c.format ? c.format(val, p) : (val !== undefined && val !== null ? val : '-');
            return `<td>${formatted}</td>`;
          }).join('')}
          <td>
            <button class="layer-btn" title="Focar no Mapa" onclick="event.stopPropagation(); WebGIS.zoomToFeature('${layerKey}', '${idKey}')">
              <span class="icon-svg icon-sm">${SVG_ICONS.zoom}</span>
            </button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
  },

  filterAttributeTable: function(query) {
    const table = document.getElementById('active-attr-table');
    if (!table) return;
    const rows = table.querySelectorAll('tbody tr');
    const q = query.toLowerCase();

    rows.forEach(r => {
      const text = r.textContent.toLowerCase();
      r.style.display = text.includes(q) ? '' : 'none';
    });
  },

  exportTableToCSV: function(layerKey) {
    const layerObj = this.layers[layerKey];
    if (!layerObj || !layerObj.data || !layerObj.data.features) return;

    const features = layerObj.data.features;
    if (features.length === 0) return;

    const headers = Object.keys(features[0].properties || {});
    let csvContent = '\uFEFF';
    csvContent += headers.join(';') + '\r\n';

    features.forEach(f => {
      const row = headers.map(h => {
        let val = f.properties[h];
        if (val === undefined || val === null) val = '';
        val = String(val).replace(/"/g, '""');
        return `"${val}"`;
      });
      csvContent += row.join(';') + '\r\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tabela_${layerKey}_zurique.csv`;
    link.click();
  },

  updateStatsDashboard: function() {
    const lotes = this.layers['lotes'] ? this.layers['lotes'].data.features : [];
    let totalAreaLotes = 0;
    const quadraCount = {};

    lotes.forEach(l => {
      totalAreaLotes += (l.properties.area_m2 || 0);
      const qd = l.properties.Quadra || 'Outros';
      quadraCount[qd] = (quadraCount[qd] || 0) + 1;
    });

    const avgArea = lotes.length ? totalAreaLotes / lotes.length : 0;

    const elTotal = document.getElementById('stat-total-lotes');
    const elArea = document.getElementById('stat-area-lotes');
    const elAvg = document.getElementById('stat-avg-area');
    const elList = document.getElementById('stats-quadras-list');

    if (elTotal) elTotal.textContent = lotes.length;
    if (elArea) elArea.textContent = `${(totalAreaLotes / 10000).toFixed(2)} ha`;
    if (elAvg) elAvg.textContent = `${Math.round(avgArea)} m²`;

    if (elList) {
      elList.innerHTML = Object.entries(quadraCount).sort().map(([q, count]) => `
        <div class="quadra-row" onclick="WebGIS.applyQuadraFilter('${q}')">
          <span><b>Quadra ${q}</b></span>
          <span><span class="layer-badge">${count} lotes</span></span>
        </div>
      `).join('');
    }
  },

  // Medições
  startMeasure: function(mode) {
    this.clearMeasure();
    this.measureMode = mode;
    this.map.getContainer().style.cursor = 'crosshair';

    const infoBox = document.getElementById('measure-output');
    if (infoBox) {
      infoBox.innerHTML = `
        <div style="background:var(--primary-light); padding:10px; border-radius:var(--radius-md); font-size:0.8rem;">
          <b>Modo: ${mode === 'distance' ? 'Distância' : 'Área'}</b><br>
          Clique no mapa para marcar pontos. Clique duplo para concluir.
        </div>
      `;
    }

    const self = this;
    const onClick = function(e) {
      self.measurePoints.push(e.latlng);
      self.updateMeasureShape();
    };

    const onDblClick = function() {
      self.map.off('click', onClick);
      self.map.off('dblclick', onDblClick);
      self.map.getContainer().style.cursor = '';
    };

    this.map.on('click', onClick);
    this.map.on('dblclick', onDblClick);
  },

  updateMeasureShape: function() {
    this.measureLayer.clearLayers();
    const pts = this.measurePoints;
    if (pts.length === 0) return;

    pts.forEach(pt => {
      L.circleMarker(pt, {
        radius: 5,
        fillColor: '#ef4444',
        color: '#fff',
        weight: 2,
        fillOpacity: 1
      }).addTo(this.measureLayer);
    });

    if (this.measureMode === 'distance' && pts.length > 1) {
      L.polyline(pts, { color: '#ef4444', weight: 3, dashArray: '6, 6' }).addTo(this.measureLayer);
      let distM = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        distM += pts[i].distanceTo(pts[i + 1]);
      }
      const text = distM > 1000 ? `${(distM / 1000).toFixed(3)} km` : `${distM.toFixed(1)} m`;
      const out = document.getElementById('measure-output');
      if (out) out.innerHTML = `<div style="font-weight:700; color:#ef4444; font-size:1.1rem; margin-top:8px;">Distância: ${text}</div>`;
    } else if (this.measureMode === 'area' && pts.length >= 3) {
      L.polygon(pts, { color: '#ef4444', fillColor: '#fca5a5', fillOpacity: 0.4, weight: 2 }).addTo(this.measureLayer);
      const coords = pts.map(p => [p.lng, p.lat]);
      coords.push(coords[0]);
      let areaM2 = 0;
      if (window.turf) {
        areaM2 = turf.area(turf.polygon([coords]));
      }
      const text = `${Math.round(areaM2).toLocaleString('pt-BR')} m² (${(areaM2/10000).toFixed(4)} ha)`;
      const out = document.getElementById('measure-output');
      if (out) out.innerHTML = `<div style="font-weight:700; color:#ef4444; font-size:1.1rem; margin-top:8px;">Área: ${text}</div>`;
    }
  },

  clearMeasure: function() {
    this.measureLayer.clearLayers();
    this.measurePoints = [];
    this.measureMode = null;
    this.map.getContainer().style.cursor = '';
    const out = document.getElementById('measure-output');
    if (out) out.innerHTML = '';
  },

  exportMapImage: function() {
    alert("Gerando imagem do mapa...");
    const mapEl = document.getElementById('map');
    if (!window.html2canvas) {
      window.print();
      return;
    }
    html2canvas(mapEl, { useCORS: true }).then(canvas => {
      const link = document.createElement('a');
      link.download = `geoportal-zurique-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }).catch(() => window.print());
  }
};

window.addEventListener('DOMContentLoaded', () => {
  WebGIS.init();
});
