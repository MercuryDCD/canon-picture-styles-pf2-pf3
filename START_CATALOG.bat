@echo off
chcp 65001 >nul
title Canon Picture Styles - Catálogo Interactivo
cd /d "%~dp0"

echo =====================================================================
echo   Iniciando Catálogo Visual Canon Picture Styles (550 Presets)...
echo =====================================================================
echo.
echo   Abriendo http://localhost:8080/index.html en tu navegador...
echo   Presiona Ctrl+C en esta ventana para detener el servidor local.
echo.

start "" "http://localhost:8080/index.html"
python -m http.server 8080 --directory "%~dp0."
if %errorlevel% neq 0 (
    echo [!] Error iniciando servidor HTTP. Abriendo index.html directamente...
    start "" "index.html"
)
pause
