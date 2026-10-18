import os
import sys
import webbrowser
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8080

class WebGISRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.geojson'):
            return 'application/geo+json'
        if path.endswith('.json'):
            return 'application/json'
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        return super().guess_type(path)

def get_free_port(start_port):
    port = start_port
    while port < start_port + 100:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
        port += 1
    return start_port

def run():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)

    free_port = get_free_port(PORT)
    server_address = ('127.0.0.1', free_port)
    httpd = HTTPServer(server_address, WebGISRequestHandler)

    url = f"http://127.0.0.1:{free_port}/index.html"
    print("=" * 65)
    print("       GEOPORTAL PILOTO | WEBGIS INTERATIVO PROFISSIONAL")
    print("=" * 65)
    print(f" Servidor iniciado com sucesso!")
    print(f" Endereço local: {url}")
    print(" Pressione Ctrl+C para encerrar o servidor.")
    print("=" * 65)

    webbrowser.open(url)
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado pelo usuário.")
        httpd.server_close()

if __name__ == '__main__':
    run()
