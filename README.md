# Zombie Survival Social Network - Web

This project was bootstrapped with [ViteJs](https://github.com/facebook/create-react-app).

API repo: [https://github.com/fanoromani/veganhive-timeline-server](https://github.com/fanoromani/veganhive-timeline-server)

## Tech Stack

### Devlopment

- UI: [React](https://reactjs.org/)
- State Control: [Zustand](https://github.com/pmndrs/zustand) for global state
- Styling: [Tailwindcss](https://tailwindcss.com/) and [Shadcn-ui](https://ui.shadcn.com/) powered by [Radixui](https://www.radix-ui.com/)
- HTTP Client: [Axios](https://github.com/axios/axios)
- Icons: [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- Form Control: [React Hook Form](https://react-hook-form.com/)
- [Typescript](https://www.typescriptlang.org/)

### Linter

- [ESlint](https://eslint.org/)
- [Prettier](https://github.com/prettier/prettier)

## Usage

Install dependencies:

```sh
 npm i
```

Done! Start the service:

```sh
npm run dev
```

## Project Structure

- `src/` code base;
- `src/lib` config and custom hooks for data fetch;
- `src/components` components isolated with their styling (if any)
- `src/pages/` first level router components;

## Commands

```sh
# run the app
npm run dev
# build static assets
npm run build
```
