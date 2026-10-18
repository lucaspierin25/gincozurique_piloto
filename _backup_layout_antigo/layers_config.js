/**
 * GEOPORTAL PILOTO | Configuração Cartográfica das Camadas
 * Gerenciador de Estilos Dinâmicos e Propriedades
 */

const DEFAULT_LAYER_STYLES = {
  lotes: {
    color: '#0284c7',
    fillColor: '#38bdf8',
    weight: 1.5,
    opacity: 0.75,
    fillOpacity: 0.45,
    visible: true,
    showLabels: false
  },
  quadras: {
    color: '#4f46e5',
    fillColor: '#818cf8',
    weight: 2.2,
    opacity: 0.65,
    fillOpacity: 0.20,
    visible: true,
    showLabels: true
  },
  implantacao: {
    color: '#ffffff',
    fillColor: '#ffffff',
    weight: 1.2,
    opacity: 0.85,
    fillOpacity: 0,
    visible: true,
    showLabels: false
  },
  app: {
    color: '#059669',
    fillColor: '#10b981',
    weight: 2.0,
    opacity: 0.75,
    fillOpacity: 0.40,
    visible: true,
    showLabels: false
  },
  curso_dagua: {
    color: '#0284c7',
    fillColor: '#0284c7',
    weight: 3.5,
    opacity: 0.95,
    fillOpacity: 0,
    visible: true,
    showLabels: false
  }
};

const LAYERS_CONFIG = {
  lotes: {
    id: 'lotes',
    title: 'Lotes Urbanos',
    group: 'urbanismo',
    isPolygon: true,
    dataKey: 'GEO_LOTES',
    geojsonPath: 'shp geojason/lotes_geo.geojson',
    ...DEFAULT_LAYER_STYLES.lotes,
    highlightStyle: {
      color: '#f43f5e',
      weight: 3.5,
      opacity: 1,
      fillColor: '#fda4af',
      fillOpacity: 0.7
    },
    createPopup: function(props) {
      const quadra = props.Quadra || '-';
      const lote = props.Lote || '-';
      const area = props.area_m2 ? `${props.area_m2.toLocaleString('pt-BR')} m²` : 'Calculando...';
      const perim = props.perimetro_m ? `${props.perimetro_m.toLocaleString('pt-BR')} m` : '-';

      return `
        <div class="custom-popup">
          <div class="popup-header">
            <div class="popup-title">Lote ${lote}</div>
            <div class="popup-subtitle">Quadra ${quadra} • Residencial Zurique</div>
          </div>
          <div class="popup-body">
            <table class="popup-table">
              <tr>
                <td class="label">Área Total:</td>
                <td class="value">${area}</td>
              </tr>
              <tr>
                <td class="label">Perímetro:</td>
                <td class="value">${perim}</td>
              </tr>
              <tr>
                <td class="label">Quadra:</td>
                <td class="value">Quadra ${quadra}</td>
              </tr>
              <tr>
                <td class="label">Lote:</td>
                <td class="value">${lote}</td>
              </tr>
              <tr>
                <td class="label">Tipologia:</td>
                <td class="value">Residencial</td>
              </tr>
            </table>
          </div>
          <div class="popup-footer">
            <button class="popup-btn" onclick="WebGIS.zoomToFeature('lotes', '${props.QuadraLote}')">
              <span>Focar Lote</span>
            </button>
            <button class="popup-btn" onclick="WebGIS.copyFeatureCoords('${props.QuadraLote}')">
              <span>Copiar Coordenadas</span>
            </button>
          </div>
        </div>
      `;
    },
    createTooltip: function(props) {
      return `<b>${props.QuadraLote || 'Lote'}</b><br><span style="font-size:0.75rem">${props.area_m2 ? props.area_m2.toLocaleString('pt-BR') + ' m²' : ''}</span>`;
    }
  },

  quadras: {
    id: 'quadras',
    title: 'Quadras',
    group: 'urbanismo',
    isPolygon: true,
    dataKey: 'GEO_QUADRAS',
    geojsonPath: 'shp geojason/quadras_geo.geojson',
    ...DEFAULT_LAYER_STYLES.quadras,
    highlightStyle: {
      color: '#ec4899',
      weight: 3.5,
      opacity: 1,
      fillColor: '#f472b6',
      fillOpacity: 0.35
    },
    createPopup: function(props) {
      const qd = props.Quadra || props.Entity || '-';
      const area = props.area_m2 ? `${props.area_m2.toLocaleString('pt-BR')} m²` : '-';
      const areaHa = props.area_ha ? `${props.area_ha.toLocaleString('pt-BR')} ha` : '-';
      const perim = props.perimetro_m ? `${props.perimetro_m.toLocaleString('pt-BR')} m` : '-';

      return `
        <div class="custom-popup">
          <div class="popup-header quadra">
            <div class="popup-title">Quadra ${qd}</div>
            <div class="popup-subtitle">Zona Residencial</div>
          </div>
          <div class="popup-body">
            <table class="popup-table">
              <tr>
                <td class="label">Área Calculada:</td>
                <td class="value">${area} (${areaHa})</td>
              </tr>
              <tr>
                <td class="label">Perímetro:</td>
                <td class="value">${perim}</td>
              </tr>
              <tr>
                <td class="label">Tipologia:</td>
                <td class="value">${props.Layer || 'UR - H Residencial'}</td>
              </tr>
            </table>
          </div>
        </div>
      `;
    },
    createTooltip: function(props) {
      return `<b>Quadra ${props.Quadra || props.Entity}</b>`;
    }
  },

  implantacao: {
    id: 'implantacao',
    title: 'Implantação Urbanística (CAD)',
    group: 'urbanismo',
    isPolygon: false,
    dataKey: 'GEO_IMPLANTACAO',
    geojsonPath: 'shp geojason/Implantacao_geo.geojson',
    ...DEFAULT_LAYER_STYLES.implantacao,
    createPopup: function() {
      return `
        <div class="custom-popup">
          <div class="popup-header" style="background:#475569">
            <div class="popup-title">Traçado da Implantação</div>
            <div class="popup-subtitle">Projeto Urbanístico Executivo (CAD)</div>
          </div>
          <div class="popup-body">
            <p style="font-size:0.8rem; color:#64748b;">
              Contém alinhamentos viários, eixos de vias, chanfros e detalhes construtivos do projeto de implantação.
            </p>
          </div>
        </div>
      `;
    }
  },

  app: {
    id: 'app',
    title: 'Área de Preservação Permanente (APP)',
    group: 'ambiental',
    isPolygon: true,
    dataKey: 'GEO_APP',
    geojsonPath: 'shp geojason/app_geo.geojson',
    ...DEFAULT_LAYER_STYLES.app,
    createPopup: function(props) {
      const area = props.area_m2 ? `${props.area_m2.toLocaleString('pt-BR')} m²` : '221.508 m²';
      const areaHa = props.area_ha ? `${props.area_ha.toLocaleString('pt-BR')} ha` : '22,15 ha';

      return `
        <div class="custom-popup">
          <div class="popup-header app">
            <div class="popup-title">Área de Preservação Permanente</div>
            <div class="popup-subtitle">Proteção Ambiental (Lei Federal 12.651)</div>
          </div>
          <div class="popup-body">
            <table class="popup-table">
              <tr>
                <td class="label">Área Total:</td>
                <td class="value">${areaHa}</td>
              </tr>
              <tr>
                <td class="label">Área em m²:</td>
                <td class="value">${area}</td>
              </tr>
              <tr>
                <td class="label">Perímetro:</td>
                <td class="value">${props.perimetro_m ? props.perimetro_m.toLocaleString('pt-BR') + ' m' : '-'}</td>
              </tr>
              <tr>
                <td class="label">Destinação:</td>
                <td class="value" style="color:#059669">Preservação Florestal</td>
              </tr>
            </table>
          </div>
        </div>
      `;
    },
    createTooltip: function() {
      return `<b>Área de Preservação Permanente (APP)</b><br>22,15 ha`;
    }
  },

  curso_dagua: {
    id: 'curso_dagua',
    title: 'Cursos d\'Água (Hidrografia)',
    group: 'ambiental',
    isPolygon: false,
    dataKey: 'GEO_CURSO_DAGUA',
    geojsonPath: 'shp geojason/curso_dagua_geo.geojson',
    ...DEFAULT_LAYER_STYLES.curso_dagua,
    createPopup: function(props) {
      const comp = props.comprimento_m ? `${props.comprimento_m.toLocaleString('pt-BR')} m` : '-';
      return `
        <div class="custom-popup">
          <div class="popup-header curso">
            <div class="popup-title">Recurso Hídrico / Drenagem</div>
            <div class="popup-subtitle">Curso d'água natural</div>
          </div>
          <div class="popup-body">
            <table class="popup-table">
              <tr>
                <td class="label">Extensão do Trecho:</td>
                <td class="value">${comp}</td>
              </tr>
              <tr>
                <td class="label">Camada Original:</td>
                <td class="value">${props.Layer || 'Cursos_dagua'}</td>
              </tr>
            </table>
          </div>
        </div>
      `;
    },
    createTooltip: function(props) {
      return `<b>Curso d'Água</b><br>${props.comprimento_m ? props.comprimento_m.toLocaleString('pt-BR') + ' m' : ''}`;
    }
  }
};
