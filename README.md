# TechConsult - Consulting Company Website

Un sitio web moderno y responsive para una empresa de consultoría tecnológica y desarrollo de software, construido con React y Vite.

## 🚀 Características

- **Framework:** React 19 con Vite para desarrollo rápido
- **Enrutamiento:** React Router para navegación SPA
- **Estilos:** TailwindCSS para diseño moderno y responsive
- **Iconos:** React Icons para elementos visuales
- **Despliegue:** Configurado para GitHub Pages

## 📱 Páginas Incluidas

1. **Inicio:** Presentación de la empresa con llamadas a la acción
2. **Servicios:** Lista detallada de servicios tecnológicos
3. **Proyectos:** Casos de éxito y portfolio
4. **Nosotros:** Información del equipo, misión y valores
5. **Contacto:** Formulario de contacto funcional y datos de contacto

## 🛠️ Tecnologías Utilizadas

- React 19
- Vite 7
- React Router DOM
- TailwindCSS 4
- React Icons
- PostCSS
- ESLint

## 📋 Prerequisitos

- Node.js (versión 18 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jjrosalesuci/consulting.git
cd consulting
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173/consulting/`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run deploy` - Despliega a GitHub Pages

## 🌐 Despliegue en GitHub Pages

### Configuración Automática

El proyecto ya está configurado para desplegarse en GitHub Pages. Solo necesitas:

1. Asegúrate de que tu repositorio esté en GitHub
2. Ejecuta el comando de despliegue:
```bash
npm run deploy
```

### Configuración Manual

Si prefieres configurar GitHub Pages manualmente:

1. Ve a Settings > Pages en tu repositorio de GitHub
2. Selecciona "Deploy from a branch"
3. Elige la rama `gh-pages`
4. Guarda los cambios

El sitio estará disponible en: `https://jjrosalesuci.github.io/consulting/`

### Notas de Configuración

- El proyecto está configurado con `base: '/consulting/'` en `vite.config.js`
- Esto es necesario para que las rutas funcionen correctamente en GitHub Pages
- Si cambias el nombre del repositorio, actualiza también este valor

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  }
}
```

### Contenido
- **Textos:** Modifica el contenido en los archivos de las páginas (`src/pages/`)
- **Imágenes:** Las imágenes están referenciadas desde Unsplash, reemplázalas con tus propias imágenes
- **Información de contacto:** Actualiza los datos en `src/pages/Contact.jsx` y `src/components/Footer.jsx`

### Añadir Nuevas Páginas
1. Crea el componente en `src/pages/`
2. Añade la ruta en `src/App.jsx`
3. Actualiza la navegación en `src/components/Header.jsx`

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Navegación principal
│   ├── Footer.jsx      # Pie de página
│   └── Layout.jsx      # Layout principal
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página de inicio
│   ├── Services.jsx    # Página de servicios
│   ├── Projects.jsx    # Página de proyectos
│   ├── About.jsx       # Página nosotros
│   └── Contact.jsx     # Página de contacto
├── App.jsx             # Componente raíz con routing
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

- **TechConsult Team** - Empresa de consultoría tecnológica

## 🆘 Soporte

Si tienes alguna pregunta o problema:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella!
