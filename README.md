# Web Intermedia - Plantilla para Psicólogos/as

Plantilla web profesional, escalable y vendible para psicólogos/as. Diseñada para captación de consultas con un enfoque ético y sobrio.

## 🚀 Características

- **Multipage** (4 páginas): Inicio, Sobre mí, Servicios, Contacto
- **Responsive** y accesible
- **SEO optimizado** con meta tags y OpenGraph por ruta
- **Configuración centralizada** - Personaliza todo desde un solo archivo
- **Animaciones sutiles** con Framer Motion
- **Diseño sobrio y profesional** con TailwindCSS
- **CTAs éticos** orientados a conversión
- **Formulario de contacto** con validaciones

## 📋 Stack Tecnológico

- React 19 + TypeScript
- Vite
- TailwindCSS 4
- Framer Motion
- React Router DOM
- React Helmet Async (SEO)

## 🏃 Cómo correr el proyecto

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

## ⚙️ Personalización

### Archivo de configuración principal

Todo el contenido del sitio se personaliza desde:

```
src/config/siteConfig.ts
```

### Qué puedes editar sin tocar componentes:

1. **Información profesional**
   - Nombre, matrícula, ciudad, modalidad
   - Email y WhatsApp (con mensaje pre-cargado)

2. **Contenido del Hero**
   - Título y subtítulo principal
   - Textos de los CTAs

3. **Sobre mí**
   - Bio extendida
   - Formación e instituciones
   - Enfoque terapéutico
   - Texto sobre primera entrevista

4. **Servicios**
   - Lista completa de servicios (array)
   - Información de modalidad, duración, frecuencia
   - Texto sobre público objetivo

5. **SEO**
   - Títulos y descripciones por página
   - OpenGraph tags

6. **Textos generales**
   - Disclaimer ético
   - Mensajes de éxito del formulario
   - FAQs (opcional)

### Personalizar WhatsApp

En `siteConfig.ts`, edita:

```typescript
whatsapp: {
  number: "5491112345678", // Sin + ni espacios, formato internacional
  message: "Hola, me interesa conocer más sobre tu espacio terapéutico.",
}
```

**Formato del número**: 
- Sin `+` ni espacios
- Código de país + código de área (sin 0) + número
- Ejemplo: Argentina (54) + Buenos Aires (11) + 12345678 = `5491112345678`

### Personalizar servicios

En `siteConfig.ts`, edita el array `services`:

```typescript
services: [
  {
    id: "ansiedad",
    title: "Ansiedad y estrés",
    description: "Tu descripción aquí...",
  },
  // Agrega más servicios...
]
```

### Personalizar colores y estilos

Los estilos están en `src/index.css` y usan TailwindCSS. Puedes:

- Modificar variables de tema en `:root`
- Usar clases de Tailwind directamente en componentes
- Crear componentes personalizados siguiendo el patrón existente

## 📁 Estructura del proyecto

```
src/
├── config/
│   └── siteConfig.ts          # ⭐ Configuración centralizada
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── CTASection.tsx
│   │   └── Badge.tsx
│   └── forms/
│       └── ContactForm.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Componentes reutilizables

- **Container**: Contenedor con ancho máximo y padding responsive
- **SectionTitle**: Título de sección con animación
- **Card**: Tarjeta con hover y animación de entrada
- **Button**: Botón con variantes (primary, secondary, outline)
- **CTASection**: Sección de llamada a la acción
- **Badge**: Badge con variantes de color

## 📝 Formulario de contacto

El formulario incluye:
- Validación de campos requeridos
- Selección de método de contacto preferido
- Mensaje de éxito (sin alert)
- Integración con WhatsApp (botón directo)

**Nota**: El formulario actualmente es un placeholder. Para producción, integra con:
- Formspree
- EmailJS
- Tu backend propio
- O cualquier servicio de formularios

## 🔍 SEO

Cada página incluye:
- `title` y `meta description` únicos
- OpenGraph tags básicos
- URLs limpias y semánticas

Para mejorar el SEO:
1. Agrega más meta tags en cada página (keywords, etc.)
2. Implementa structured data (JSON-LD)
3. Agrega sitemap.xml y robots.txt
4. Configura analytics (Google Analytics, etc.)

## 🚫 Restricciones éticas implementadas

- ✅ No se incluyen testimonios
- ✅ No se prometen resultados terapéuticos
- ✅ Copy ético y respetuoso
- ✅ Disclaimer profesional visible

## 📱 Responsive

El sitio está optimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔄 Próximos pasos (Plan Profesional)

Esta es la versión "Intermedia". Para escalar a "Profesional":
- Sistema de agenda/calendario
- Reserva de turnos online
- Panel de administración
- Integración con pasarelas de pago
- Blog/recursos

## 📄 Licencia

Esta plantilla está diseñada para ser vendida y personalizada. Ajusta según tus necesidades comerciales.

## 💡 Tips

1. **Imágenes**: Reemplaza placeholders con imágenes reales en `public/`
2. **Favicon**: Agrega favicons en `public/`
3. **Analytics**: Integra Google Analytics o similar
4. **Formulario**: Conecta el formulario con un servicio real
5. **Testing**: Prueba en diferentes dispositivos antes de publicar

## 🐛 Solución de problemas

### Error de dependencias
Si hay conflictos, usa:
```bash
npm install --legacy-peer-deps
```

### Estilos no se aplican
Asegúrate de que `index.css` importa Tailwind:
```css
@import "tailwindcss";
```

### Rutas no funcionan
Verifica que estás usando `BrowserRouter` en `App.tsx` y que el servidor está configurado para SPA (redirect todas las rutas a `index.html`).

---

**Desarrollado con ❤️ para profesionales de la salud mental**
