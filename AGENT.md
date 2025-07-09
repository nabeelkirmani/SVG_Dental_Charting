# AGENT.md

## Commands
- **Dev**: `npm run dev` - Start development server with HMR
- **Build**: `npm run build` - Build for production
- **Lint**: `npm run lint` - Run ESLint
- **Preview**: `npm run preview` - Preview production build
- **Test**: No test framework configured

## Architecture
- **Frontend**: React 18 + Vite + SCSS
- **Graphics**: Konva.js/react-konva for canvas drawing
- **State**: React Context (SelectionContext) for global state
- **Routing**: react-router-dom for navigation
- **Storage**: localStorage for client-side persistence + backend API integration

## Project Structure
- `src/components/` - React components (Canvas, Pathology, ToothWheel, etc.)
- `src/contexts/` - React Context providers
- `src/hooks/` - Custom React hooks
- `src/data/` - Static data files (JSON)
- `src/assets/` - Images and static assets
- `src/styles/` - SCSS stylesheets

## Code Style
- Use `.jsx` extension for React components
- Import React explicitly: `import React from "react"`
- Use functional components with hooks
- Context imports: `import { SelectionContext } from "../../contexts/SelectionContext.jsx"`
- File comments: `// src/Component/Component.jsx`
- JSDoc comments for complex functions
- Use relative imports with explicit `.jsx` extension
