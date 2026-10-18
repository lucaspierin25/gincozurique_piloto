@echo off
title GEOPORTAL PILOTO - WebGIS Interativo
cd /d "%~dp0"

echo ======================================================================
echo           INICIANDO GEOPORTAL PILOTO - WEBGIS INTERATIVO
echo ======================================================================
echo.
echo Verificando ambiente Python...

python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Iniciando servidor WebGIS via Python...
    start python server.py
) else (
    echo Python nao encontrado no PATH. Abrindo diretamente no navegador padrao...
    start index.html
)

echo.
echo Geoportal aberto no seu navegador!
echo ======================================================================
timeout /t 3 >nul
exit
