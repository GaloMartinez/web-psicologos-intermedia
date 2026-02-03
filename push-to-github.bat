@echo off
echo ========================================
echo Subiendo proyecto a GitHub
echo ========================================
echo.
echo IMPORTANTE: Primero crea el repositorio en GitHub
echo Luego reemplaza TU-USUARIO y TU-REPO en el siguiente comando
echo.
echo Ejemplo: git remote add origin https://github.com/juanperez/web-psicologos-intermedia.git
echo.
pause
echo.
echo Agregando remote origin...
echo (Reemplaza la URL con la de tu repositorio)
set /p REPO_URL="Ingresa la URL de tu repositorio: "
git remote add origin %REPO_URL%
echo.
echo Cambiando a rama main...
git branch -M main
echo.
echo Subiendo código a GitHub...
git push -u origin main
echo.
echo ========================================
echo ¡Listo! Tu código está en GitHub
echo ========================================
pause
