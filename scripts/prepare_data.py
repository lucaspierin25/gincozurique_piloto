import os
import json
import math

os.makedirs('data', exist_ok=True)

def geodesic_polygon_metrics(geom):
    coords = geom.get('coordinates', [])
    gtype = geom.get('type', '')
    polys = [coords] if gtype == 'Polygon' else (coords if gtype == 'MultiPolygon' else [])
    
    total_area = 0.0
    total_perim = 0.0
    
    # Accurate WGS84 metric conversion at latitude -15.55 (Cuiabá-MT)
    lat_deg = -15.5506
    lat_rad = math.radians(lat_deg)
    a = 6378137.0
    e2 = 0.00669437999014
    m_lat = (math.pi * a * (1 - e2)) / (180.0 * (1 - e2 * math.sin(lat_rad)**2)**1.5)
    m_lon = (math.pi * a * math.cos(lat_rad)) / (180.0 * math.sqrt(1 - e2 * math.sin(lat_rad)**2))
    
    for poly in polys:
        if not poly or not poly[0]:
            continue
        exterior = poly[0]
        n = len(exterior)
        area = 0.0
        perim = 0.0
        for i in range(n):
            j = (i + 1) % n
            x1, y1 = exterior[i][0] * m_lon, exterior[i][1] * m_lat
            x2, y2 = exterior[j][0] * m_lon, exterior[j][1] * m_lat
            area += (x1 * y2 - x2 * y1)
            dx = x2 - x1
            dy = y2 - y1
            perim += math.hypot(dx, dy)
        total_area += abs(area) / 2.0
        total_perim += perim
        
    return round(total_area, 2), round(total_perim, 2)

def geodesic_line_length(geom):
    coords = geom.get('coordinates', [])
    gtype = geom.get('type', '')
    lines = [coords] if gtype == 'LineString' else (coords if gtype == 'MultiLineString' else [])
    
    lat_deg = -15.5506
    lat_rad = math.radians(lat_deg)
    a = 6378137.0
    e2 = 0.00669437999014
    m_lat = (math.pi * a * (1 - e2)) / (180.0 * (1 - e2 * math.sin(lat_rad)**2)**1.5)
    m_lon = (math.pi * a * math.cos(lat_rad)) / (180.0 * math.sqrt(1 - e2 * math.sin(lat_rad)**2))
    
    total_len = 0.0
    for line in lines:
        for i in range(len(line) - 1):
            x1, y1 = line[i][0] * m_lon, line[i][1] * m_lat
            x2, y2 = line[i+1][0] * m_lon, line[i+1][1] * m_lat
            total_len += math.hypot(x2 - x1, y2 - y1)
    return round(total_len, 2)

files_map = {
    'lotes': r'shp geojason/lotes_geo.geojson',
    'quadras': r'shp geojason/quadras_geo.geojson',
    'app': r'shp geojason/app_geo.geojson',
    'curso_dagua': r'shp geojason/curso_dagua_geo.geojson',
    'implantacao': r'shp geojason/Implantacao_geo.geojson'
}

manifest = {}

for key, fpath in files_map.items():
    if not os.path.exists(fpath):
        print(f"Arquivo não encontrado: {fpath}")
        continue
    with open(fpath, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    
    features = data.get('features', [])
    for feat in features:
        props = feat.setdefault('properties', {})
        geom = feat.get('geometry')
        if not geom:
            continue
        gtype = geom.get('type', '')
        if 'Polygon' in gtype:
            area, perim = geodesic_polygon_metrics(geom)
            props['area_m2'] = area
            props['area_ha'] = round(area / 10000.0, 4)
            props['perimetro_m'] = perim
        elif 'Line' in gtype:
            length_m = geodesic_line_length(geom)
            props['comprimento_m'] = length_m

    js_var = f'window.GEO_{key.upper()}'
    out_js = os.path.join('data', f'{key}_data.js')
    with open(out_js, 'w', encoding='utf-8') as out_fp:
        out_fp.write(f'if (typeof window === "undefined") {{ var window = {{}}; }}\n')
        out_fp.write(f'{js_var} = ')
        json.dump(data, out_fp, ensure_ascii=False)
        out_fp.write(';\n')
        
    print(f"Gerado {out_js} ({len(features)} feições)")
    manifest[key] = {
        'count': len(features),
        'js_file': f'data/{key}_data.js',
        'geojson_file': fpath.replace('\\', '/')
    }

with open(os.path.join('data', 'manifest.json'), 'w', encoding='utf-8') as fp:
    json.dump(manifest, fp, indent=2, ensure_ascii=False)

print("Processamento concluído com sucesso!")
