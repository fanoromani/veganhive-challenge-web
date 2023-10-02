# VeganHive Timeline Web

VeganHive Timeline Web is a web application that provides a timeline view of events and activities related to the VeganHive project. This project is designed to simulate a social timeline in which users can interact through making posts and like and commenting on each other's posts.

This project was bootstrapped with [ViteJs](https://vitejs.dev/).

API repo: [https://github.com/fanoromani/veganhive-timeline-server](https://github.com/fanoromani/veganhive-timeline-server)

## Table of Contents

- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Demo

You can see a live demo of VeganHive Timeline Web at [veganhive-timeline.netlify.app](https://veganhive-timeline.netlify.app/).

## Tech Stack

### Devlopment

- UI: [React](https://reactjs.org/)
- State Control: [Zustand](https://github.com/pmndrs/zustand) for global state
- Styling: [Tailwindcss](https://tailwindcss.com/) and [Shadcn-ui](https://ui.shadcn.com/) powered by [Radixui](https://www.radix-ui.com/)
- HTTP Client: [Axios](https://github.com/axios/axios) and [React Query](https://tanstack.com/query/v3/)
- Icons: [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- Form Control: [React Hook Form](https://react-hook-form.com/)
- [Typescript](https://www.typescriptlang.org/)

### Linter

- [ESlint](https://eslint.org/)
- [Prettier](https://github.com/prettier/prettier)

## Project Structure

- `src/` code base;
- `src/lib` config and custom hooks for data fetch;
- `src/components` components isolated with their styling (if any)
- `src/pages/` first level router components;

## Features

- **Event Management**: Easily create, like, and comment vegan posts.
- **Timeline Generation**: Automatically generate a timeline of vegan-related posts made by users.
- **User Authentication**: Secure user authentication system to manage user-specific data.
- **RESTful API**: Provides a RESTful API for easy integration with the frontend or other applications.
- **Database Storage**: Stores data efficiently in a database for quick retrieval.

## Getting Started

### Installation

1. Clone this repository:

   ```bash
    git clone https://github.com/fanoromani/veganhive-timeline-web.git
   ```

2. Navigate to the project directory:

   ```bash
       cd veganhive-timeline-web
   ```

3. Install dependencies:

   ```bash
        npm install
   ```

   Configure the application by creating a .env file and setting the required environment variables (e.g. API key).

4. Run the server:

   ```bash
       npm run dev
   ```

### Usage

To start using the VeganHive Timeline Web, follow these steps:

1.  Ensure the server is running as described in the installation section.

2.  Make API requests to interact with the server's endpoints, as documented in the ![API Documentation](https://github.com/fanoromani/veganhive-timeline-server#readme).
