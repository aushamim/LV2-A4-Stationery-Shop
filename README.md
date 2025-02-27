# Stationery Shop 2

[Live URL](https://stationary-shop-frontend-sigma.vercel.app/)

Welcome to the Stationery Shop 2 project! This project is a web application designed to manage and sell stationery items.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Project Overview

Stationery Shop 2 is the front-end of Stationery Shop project. It includes enhanced features for inventory management, user authentication, and a more user-friendly interface.

## Features

- User authentication and authorization
- Inventory management
- Product search and filtering
- Shopping cart functionality
- Order management
- Responsive design

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm start
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```
.
├── public/
│   ├── _redirects
│   ├── .htaccess
│   ├── assets/
│   │   └── images/
│   ├── icon.png
│   ├── vite.svg
├── src/
│   ├── Components/
│   │   ├── Featured/
│   │   ├── Footer/
│   │   ├── FormInput/
│   │   ├── HeroSection/
│   │   ├── Loader/
│   │   ├── Navbar/
│   │   └── Product/
│   ├── Pages/
│   │   ├── About/
│   │   ├── Auth/
│   │   ├── Home/
│   │   ├── NotFound/
│   │   └── Shop/
│   ├── Redux/
│   │   ├── Features/
│   │   │   ├── Auth/
│   │   │   ├── Cart/
│   │   │   └── Products/
│   │   ├── baseApi.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── Routes/
│   ├── Types/
│   ├── Utils/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .cz-config.js.json
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── README.md
```
