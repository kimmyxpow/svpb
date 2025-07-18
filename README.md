# SvelteKit + PocketBase Starter

A minimal and simple starter template using **[SvelteKit](https://svelte.dev/docs/kit)** for the frontend and **[PocketBase](https://pocketbase.io/)** for the backend.

## 📁 Project Structure

```
.
├── pb/                 # PocketBase backend
├── sv/                 # SvelteKit frontend
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kimmyxpow/svpb.git
cd svpb
```

### 2. Install dependencies (with Bun)

```bash
cd sv
bun install
```

## 🧪 Development

### Run frontend:

```bash
bun dev
```

### Run backend only:

```bash
bun dev:backend
```

## 🛠️ PocketBase Type Generation

You can generate TypeScript types for your PocketBase collections:

```bash
bun run typegen
```
