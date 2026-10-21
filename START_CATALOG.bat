@echo off
chcp 65001 >nul
title Canon Picture Styles - Interactive Catalog
cd /d "%~dp0"

echo =====================================================================
echo   Starting Canon Picture Styles Visual Catalog (550 Presets)...
echo =====================================================================
echo.
echo   Opening http://localhost:8080/index.html in your browser...
echo   Press Ctrl+C in this window to stop the local server.
echo.

start "" "http://localhost:8080/index.html"
python -m http.server 8080 --directory "%~dp0."
if %errorlevel% neq 0 (
    echo [!] Error starting HTTP server. Opening index.html directly...
    start "" "index.html"
)
pause
