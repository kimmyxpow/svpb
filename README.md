# SvelteKit + PocketBase Starter

This is a fullstack starter template that combines **[SvelteKit](https://kit.svelte.dev/)** for the frontend and **[PocketBase](https://pocketbase.io/)** as the backend framework.

PocketBase here is not just used as a database, but as a complete backend framework. You can easily extend it to fit your needs:

- **Go Extensions** → [pocketbase.io/docs/go-overview](https://pocketbase.io/docs/go-overview/)
- **JavaScript Extensions** → [pocketbase.io/docs/js-overview](https://pocketbase.io/docs/js-overview/)

## 📁 Project Structure

The project is organized with a clear separation between frontend and backend:

```plain
.
├── pb/                 # PocketBase backend (Go &/ JavaScript)
├── sv/                 # SvelteKit frontend (TypeScript)
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kimmyxpow/svpb.git
cd svpb
```

### 2. Install dependencies

```bash
npm install
```

This will install all dependencies in the root and in the `sv/` frontend workspace.

### 3. Install `modd` (used for backend auto-reloading)

Make sure Go is installed, then run:

```bash
go install github.com/cortesi/modd/cmd/modd@latest
```

You may need to add `$GOPATH/bin` to your PATH if `modd` is not found after install.

## 🧪 Development

### Run both frontend and backend together

```bash
npm run dev
```

Runs both the SvelteKit dev server and PocketBase backend in parallel.

### Run only the frontend (SvelteKit)

```bash
npm run dev:fe
```

### Run only the backend (PocketBase)

```bash
npm run dev:be
```

By default, PocketBase will run at [http://localhost:8090](http://localhost:8090).

## 🛠️ Generate PocketBase Types

You can generate TypeScript types from your PocketBase collections for use in the frontend:

```bash
npm run typegen
```

This will create or update the types in `sv/src/lib/pocketbase/generated-types.ts` using your local PocketBase SQLite data.
