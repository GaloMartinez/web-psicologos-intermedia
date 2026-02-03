# 🚀 Instrucciones para subir a GitHub

## Paso 1: Crear repositorio en GitHub

1. Ve a: **https://github.com/new**
2. **Repository name**: `web-psicologos-intermedia`
3. **Description** (opcional): "Plantilla web profesional para psicólogos/as"
4. **Visibilidad**: Público o Privado (tu elección)
5. **NO marques ninguna opción**:
   - ❌ No agregar README
   - ❌ No agregar .gitignore
   - ❌ No elegir licencia
6. Clic en **"Create repository"**

## Paso 2: Copiar la URL del repositorio

Después de crear el repositorio, GitHub te mostrará una página con instrucciones. 
**Copia la URL** que aparece, será algo como:
```
https://github.com/TU-USUARIO/web-psicologos-intermedia.git
```

## Paso 3: Ejecutar comandos

Abre PowerShell o CMD en esta carpeta y ejecuta:

```bash
# Reemplaza TU-USUARIO y TU-REPO con tus datos reales
git remote add origin https://github.com/TU-USUARIO/web-psicologos-intermedia.git

# Cambiar a rama main
git branch -M main

# Subir el código
git push -u origin main
```

**Ejemplo real:**
```bash
git remote add origin https://github.com/juanperez/web-psicologos-intermedia.git
git branch -M main
git push -u origin main
```

## ⚠️ Si te pide autenticación

Si GitHub te pide usuario y contraseña:

1. **Usuario**: Tu nombre de usuario de GitHub
2. **Contraseña**: Necesitas un **Personal Access Token** (no tu contraseña normal)

### Crear Personal Access Token:
1. Ve a: https://github.com/settings/tokens
2. Clic en **"Generate new token"** > **"Generate new token (classic)"**
3. **Note**: "Deploy web-psicologos"
4. Selecciona scope: **`repo`** (marca la casilla completa)
5. Clic en **"Generate token"**
6. **Copia el token** (solo se muestra una vez)
7. Úsalo como contraseña cuando Git te la pida

## ✅ Verificar

Después del push, ve a tu repositorio en GitHub y deberías ver todos tus archivos.

---

## 🎯 Alternativa: Usar el script

También puedes ejecutar el archivo `push-to-github.bat` que creé, pero necesitarás editar la URL manualmente.
