# 🧪 n5harrypotter

Proyecto basado en microfrontends usando [Vite](https://vitejs.dev/), [Module Federation](https://github.com/originjs/vite-plugin-federation), y desarrollado bajo la metodología **TDD (Test Driven Development)** con [Vitest](https://vitest.dev/).

## 🚀 Tecnologías principales

- **Vite**: Bundler ultrarrápido para desarrollo moderno.
- **React 18**
- **Vitest**: Framework de testing veloz compatible con Jest y Testing Library.
- **TDD**: El proyecto se desarrolló con tests como primera etapa de cada funcionalidad.
- **i18next**: Internacionalización.
- **styled-components**: Estilos basados en componentes.
- **BEM**: Convención utilizada para nombrar las clases CSS de forma clara y mantenible.

---

## ✅ Requisitos

- Node.js **v20.x** (verificado automáticamente)
- npm v9+ (recomendado)

---

## 🛠 Configuración inicial

Antes de correr el proyecto por primera vez, debés crear un archivo `.env` en la raíz con las variables de entorno necesarias. Estas variables serán provistas por el equipo de desarrollo.

---

## 🧪 Testing y TDD

El proyecto fue desarrollado aplicando **TDD**, es decir:

1. Primero se escribe el test.
2. Luego se implementa la funcionalidad mínima para que pase el test.
3. Finalmente se refactoriza y se asegura la cobertura con herramientas automáticas.

Se utiliza:
- `Vitest` y `@testing-library/react` para testeo de componentes.
- Reportes de cobertura con el motor V8.
- ESLint y Prettier para garantizar calidad y consistencia en el código.

---

## ⚙️ Detalles técnicos

Se implementó **module federation** con el plugin `@originjs/vite-plugin-federation`.  
Para evitar problemas de compatibilidad entre microfronts, se aplicó una **restricción de versiones** en los paquetes compartidos, asegurando que tanto el host como los remotes usen las mismas versiones de dependencias como `react`, `react-dom`, etc.

Se implemento i18n para la internacionalización del proyecto. Las apis no poseían idiomas por lo que el contenido esta solo en ingles pero los labels y demás contenido del sitio, si poseen traducciones en los files en.json y es.json. 
Se manejo la posibilidad de crear un hook con traduccion automatica del contenido de las API's que se puede observar en el file src/hooks/useAutoTranslate.jsx. En el mismo se armó un approach para realizar traducciones en vivo de la respuesta de las API's.

---

## 🔧 Pasos para ejecutar el proyecto completo

1. **Cloná y configurá cada microfront** por separado. En cada uno, asegurate de tener el archivo `.env` correcto.

2. En cada microfront remoto, ejecutá:

```bash
npm i

vite build && vite preview
```

3. En la app host ejecutá:
```bash
npm i

npm run dev
```
Esto disponibilizará el host en el puerto 3000 pudiendo acceder a todos los microfronts.
