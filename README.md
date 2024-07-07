# 🌟 Vite Dashboard Starter

Welcome to the Vite Dashboard Starter! This project is a modern dashboard template built with React, TypeScript, Vite, Tailwind CSS, ShadCn and Zustand for state management. It comes pre-configured with ESLint, Prettier, and various plugins to ensure code quality and consistency.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [📦 Installation](#-installation)
- [🔧 Running the Development Server](#-running-the-development-server)
- [🏗️ Building for Production](#️-building-for-production)
- [📂 Project Structure](#-project-structure)
- [⚙️ Configuration](#️-configuration)
- [⚡ Vite Configuration](#-vite-configuration)
- [🎨 Tailwind CSS Configuration](#-tailwind-css-configuration)
- [🔍 ESLint Configuration](#-eslint-configuration)
- [🗂️ State Management](#️-state-management)
- [🔧 Utilities](#-utilities)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## ✨ Features

- ⚛️ React: A JavaScript library for building user interfaces.
- 🦾 TypeScript: A superset of JavaScript that adds static types.
- ⚡ Vite: A fast build tool and development server.
- 🎨 Tailwind CSS: A utility-first CSS framework.
- 🐻 Zustand: A small, fast, and scalable state management library.
- 📏 ESLint: A tool for identifying and fixing problems in JavaScript code.
- 🖌️ Prettier: An opinionated code formatter.

## 🚀 Getting Started

### 📦 Installation

First, clone the repository and install the dependencies using pnpm:

git clone https://github.com/your-username/vite-dashboard-starter.git
cd vite-dashboard-starter
pnpm install

If you don't have pnpm installed, you can install it globally using npm:

npm install -g pnpm

### 🔧 Running the Development Server

To start the development server, run:

pnpm dev

This will start the Vite development server and you can view the application at http://localhost:3000.

### 🏗️ Building for Production

To build the project for production, run:

pnpm build

The production-ready files will be in the `dist` directory.

## 📂 Project Structure

vite-dashboard-starter/
├── public/
├── src/
│ ├── common/
│ │ └── themes/
│ │ ├── theme-hooks.ts
│ │ └── theme-provider.tsx
│ ├── components/
│ │ ├── layout/
│ │ │ ├── ContentLayout/
│ │ │ │ ├── Breadcrumbs/
│ │ │ │ │ └── Breadcrumbs.tsx
│ │ │ │ ├── Navbar/
│ │ │ │ │ ├── Navbar.tsx
│ │ │ │ │ └── UserNav.tsx
│ │ │ │ ├── ContentLayout.tsx
│ │ │ │ └── Footer.tsx
│ │ │ ├── MainLayout/
│ │ │ │ ├── Sidebar/
│ │ │ │ │ ├── SheetMenu.tsx
│ │ │ │ │ ├── Sidebar.tsx
│ │ │ │ │ ├── SidebarCollapseButton.tsx
│ │ │ │ │ ├── SidebarMenu.tsx
│ │ │ │ │ └── SidebarToggle.tsx
│ │ │ │ ├── MainLayout.tsx
│ │ │ │ └── dashboard-starter.code-workspace
│ │ └── ui/
│ │ ├── avatar.tsx
│ │ ├── breadcrumb.tsx
│ │ ├── button.tsx
│ │ ├── collapsible.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── mode-toggle.tsx
│ │ ├── scroll-area.tsx
│ │ ├── sheet.tsx
│ │ └── tooltip.tsx
│ ├── lib/
│ │ ├── menu-list.tsx
│ │ └── utils.ts
│ ├── pages/
│ │ ├── DashboardHome.tsx
│ │ └── DashboardSettings.tsx
│ ├── store/
│ │ └── globalStore.ts
│ ├── App.tsx
│ ├── AppRoutes.tsx
│ ├── index.css
│ ├── main.tsx
│ └── vite-env.d.ts
├── .eslintrc.js
├── .prettierrc
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── package.json
├── vite-dashboard-starter.code-workspace
└── README.md

## ⚙️ Configuration

### ⚡ Vite Configuration

The Vite configuration is located in `vite.config.ts`. It includes plugins for React and path aliases for cleaner imports.

### 🎨 Tailwind CSS Configuration

The Tailwind CSS configuration is located in `tailwind.config.ts`. It includes custom themes, animations, and other extensions.

### 🔍 ESLint Configuration

The ESLint configuration is located in `eslint.config.js`. It includes recommended rules for JavaScript, TypeScript, React, and various plugins for accessibility, hooks, and import sorting.

## 🗂️ State Management

The state management is handled by Zustand. The global store is defined in `src/store/globalStore.ts`.

## 🔧 Utilities

### `cn` Utility

The `cn` utility function is defined in `src/lib/utils.ts`. It combines class names using `clsx` and merges them with Tailwind CSS classes using `tailwind-merge`.

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs));
}

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## 📜 License

This project is licensed under the MIT License.

Feel free to customize this README further based on your specific project needs and additional details.
