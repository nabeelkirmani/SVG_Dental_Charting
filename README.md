# SVG Dental Charting System

## Overview

The SVG Dental Charting System is a web-based application designed to facilitate dental charting and pathology management. Built with React and Vite, the application provides an intuitive interface for dental professionals to document and visualize dental conditions, including decay, discoloration, and fractures.

## Features

- **Navigation**: Seamless navigation between different views, including Welcome and Pathology screens.
- **Tooth Selection**: Interactive tooth selection and zone highlighting for precise pathology documentation.
- **Pathology Management**: Comprehensive management of dental pathologies, including type selection, details input, and drawing tools.
- **Context Sharing**: State management for selection and view history, ensuring consistent context across components.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can install it using Chocolatey:
  ```sh
  choco install nodejs-lts -y
  ```
  Alternatively, download the installer from the [Node.js website](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/nabeelkirmani/SVG_Dental_Charting.git
   cd SVG_Dental_Charting
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:
```sh
npm run dev
```

This will launch the application in development mode with Hot Module Replacement (HMR) enabled.

## Project Status

- **Completed Tooth**:
  - 18

- **Pending Tooth**:
  - Remaining teeth (11-17, 21-28, 31-38, 41-48) which will be copied from the completed tooth (18) to maintain consistency in design and functionality.

- **Completed Features**:
  - Decay
  - Discoloration
  - Fracture

- **Pending Features**: (Due to project being paused)
  - Additional pathology types
  - Enhanced drawing tools
  - User authentication and data persistence

## Development Tools

- **Vite**: Utilizes Vite for fast development and build processes.
- **React**: Built with React for a component-based architecture.
- **ESLint**: Integrated with ESLint for code quality and consistency.

## Official Plugins

- **[Vite React Plugin](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses Babel for Fast Refresh.
- **[Vite React SWC Plugin](https://github.com/vitejs/vite-plugin-react-swc)**: Uses SWC for Fast Refresh.
