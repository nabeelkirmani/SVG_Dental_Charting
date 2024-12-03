# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```reasonml
src/
├── index.html
├── index.jsx
├── index.scss
├── assets/
│   └── images/
│       ├── tooth18.png
│       ├── tooth17.png
│       ├── ... (include images for all teeth)
│       └── tooth48.png
├── components/
│   ├── App/
│   │   ├── App.jsx
│   │   └── App.scss
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.scss
│   ├── ToothWheel/
│   │   ├── ToothWheel.jsx
│   │   └── ToothWheel.scss
│   ├── MainContent/
│   │   ├── MainContent.jsx
│   │   └── MainContent.scss
│   ├── Pathology/
│   │   ├── Pathology.jsx
│   │   ├── PathologyTypes.jsx
│   │   ├── PathologyDetails.jsx
│   │   ├── ActionButtons.jsx
│   │   └── Pathology.scss
│   ├── Zones/
│   │   ├── Zones.jsx
│   │   └── Zones.scss
│   ├── Canvas/
│   │   ├── Canvas.jsx
│   │   └── Canvas.scss
├── contexts/
│   └── SelectionContext.jsx
└── styles/
    └── _variables.scss

```
