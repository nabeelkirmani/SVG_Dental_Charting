# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
20241127_dental_react
│   .gitignore
│   20241127_dental_react.code-workspace
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   vite.config.js
│
└───src
    │   App.jsx
    │   App.scss
    │   index.scss
    │   main.jsx
    │
    ├───assets
    │   │   react.svg
    │   │   surface.json
    │   │
    │   └───images
    │           index.js
    │           toothImageFront11.png
    │           toothImageFront12.png
    │           toothImageFront13.png
    │           toothImageFront14.png
    │           toothImageFront15.png
    │           toothImageFront16.png
    │           toothImageFront17.png
    │           toothImageFront18.png
    │           toothImageFront21.png
    │           toothImageFront22.png
    │           toothImageFront23.png
    │           toothImageFront24.png
    │           toothImageFront25.png
    │           toothImageFront26.png
    │           toothImageFront27.png
    │           toothImageFront28.png
    │           toothImageFront31.png
    │           toothImageFront32.png
    │           toothImageFront33.png
    │           toothImageFront34.png
    │           toothImageFront35.png
    │           toothImageFront36.png
    │           toothImageFront37.png
    │           toothImageFront38.png
    │           toothImageFront41.png
    │           toothImageFront42.png
    │           toothImageFront43.png
    │           toothImageFront44.png
    │           toothImageFront45.png
    │           toothImageFront46.png
    │           toothImageFront47.png
    │           toothImageFront48.png
    │           toothImageTop11.png
    │           toothImageTop12.png
    │           toothImageTop13.png
    │           toothImageTop14.png
    │           toothImageTop15.png
    │           toothImageTop16.png
    │           toothImageTop17.png
    │           toothImageTop18.png
    │           toothImageTop21.png
    │           toothImageTop22.png
    │           toothImageTop23.png
    │           toothImageTop24.png
    │           toothImageTop25.png
    │           toothImageTop26.png
    │           toothImageTop27.png
    │           toothImageTop28.png
    │           toothImageTop31.png
    │           toothImageTop32.png
    │           toothImageTop33.png
    │           toothImageTop34.png
    │           toothImageTop35.png
    │           toothImageTop36.png
    │           toothImageTop37.png
    │           toothImageTop38.png
    │           toothImageTop41.png
    │           toothImageTop42.png
    │           toothImageTop43.png
    │           toothImageTop44.png
    │           toothImageTop45.png
    │           toothImageTop46.png
    │           toothImageTop47.png
    │           toothImageTop48.png
    │
    ├───components
    │   ├───Canvas
    │   │   │   Canvas.jsx
    │   │   │   Canvas.scss
    │   │   │
    │   │   ├───CanvasComponent
    │   │   │       CanvasComponent.jsx
    │   │   │       CanvasComponent.module.scss
    │   │   │
    │   │   ├───components
    │   │   │       CanvasPoints.jsx
    │   │   │       CanvasView.jsx
    │   │   │       ShapeRenderer.jsx
    │   │   │
    │   │   ├───hooks
    │   │   │       useCanvasImage.js
    │   │   │       useCanvasShapes.js
    │   │   │
    │   │   └───utils
    │   │           canvasHelpers.js
    │   │
    │   ├───MainContent
    │   │       MainContent.jsx
    │   │       MainContent.scss
    │   │
    │   ├───PathDrawer
    │   │       PathDrawer.jsx
    │   │       PathDrawer.scss
    │   │
    │   ├───Pathology
    │   │       ActionButtons.jsx
    │   │       ActionButtons.scss
    │   │       Pathology.jsx
    │   │       Pathology.scss
    │   │       PathologyDetails.jsx
    │   │       PathologyDetails.scss
    │   │       pathologyOptions.js
    │   │       PathologyTypes.jsx
    │   │
    │   ├───Sidebar
    │   │       Sidebar.jsx
    │   │       Sidebar.scss
    │   │
    │   ├───ToothView
    │   │       ToothView.jsx
    │   │       ToothView.scss
    │   │
    │   ├───ToothWheel
    │   │       ToothWheel.jsx
    │   │       ToothWheel.scss
    │   │
    │   └───Zones
    │           Zones.jsx
    │           Zones.scss
    │
    ├───contexts
    │       SelectionContext.jsx
    │
    ├───data
    │       zoneShapes.json
    │
    ├───hooks
    │       usePathDrawing.js
    │
    └───styles
            _variables.scss


```
