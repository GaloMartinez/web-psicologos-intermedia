# Guía de Deploy - GitHub y Firebase

## 📦 Paso 1: Subir a GitHub

### 1.1 Crear repositorio en GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
3. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/web-psicologos-intermedia.git`)

### 1.2 Conectar repositorio local con GitHub
```bash
# Agregar el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/web-psicologos-intermedia.git

# Cambiar a rama main (si GitHub usa main en lugar de master)
git branch -M main

# Subir el código
git push -u origin main
```

Si GitHub te pide autenticación, puedes usar:
- **Personal Access Token** (recomendado): [Crear token](https://github.com/settings/tokens)
- O autenticación SSH

---

## 🔥 Paso 2: Deploy a Firebase Hosting

### 2.1 Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### 2.2 Iniciar sesión en Firebase
```bash
firebase login
```
Esto abrirá tu navegador para autenticarte.

### 2.3 Crear proyecto en Firebase (si no tienes uno)
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Clic en "Agregar proyecto"
3. Sigue los pasos para crear el proyecto
4. Anota el **ID del proyecto**

### 2.4 Configurar el proyecto
Edita el archivo `.firebaserc` y reemplaza `"tu-proyecto-firebase"` con el ID de tu proyecto:
```json
{
  "projects": {
    "default": "tu-id-de-proyecto-real"
  }
}
```

### 2.5 Inicializar Firebase Hosting
```bash
firebase init hosting
```

Cuando te pregunte:
- **¿Qué proyecto de Firebase quieres usar?** → Selecciona tu proyecto
- **¿Qué directorio público quieres usar?** → `dist` (presiona Enter)
- **¿Configurar como SPA?** → **Sí** (y - para todas las rutas)
- **¿Sobrescribir index.html?** → **No**

### 2.6 Build del proyecto
```bash
npm run build
```

### 2.7 Deploy a Firebase
```bash
firebase deploy --only hosting
```

¡Listo! Tu sitio estará disponible en `https://tu-proyecto.web.app`

---

## 🔄 Deploy automático con GitHub Actions (Opcional)

Puedes configurar GitHub Actions para que haga deploy automáticamente cuando hagas push a `main`.

### Crear `.github/workflows/firebase-deploy.yml`:
```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: tu-proyecto-firebase
```

**Nota**: Necesitarás configurar el secret `FIREBASE_SERVICE_ACCOUNT` en GitHub.

---

## 📝 Comandos útiles

```bash
# Ver estado de git
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Build local
npm run build

# Preview del build
npm run preview

# Deploy a Firebase
firebase deploy --only hosting

# Ver logs de Firebase
firebase hosting:channel:list
```

---

## ⚠️ Notas importantes

1. **Imágenes**: Asegúrate de que las imágenes en `public/` estén incluidas en el commit
2. **Variables de entorno**: Si usas variables de entorno, configúralas en Firebase Console
3. **Dominio personalizado**: Puedes configurar un dominio personalizado desde Firebase Console > Hosting
4. **Cache**: Los archivos estáticos tienen cache de 1 año. Si actualizas, puede tardar en reflejarse

---

## 🆘 Solución de problemas

### Error: "Firebase CLI not found"
```bash
npm install -g firebase-tools
```

### Error: "Permission denied"
```bash
firebase login --reauth
```

### Error: "Build failed"
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```
