# NovaDash

A modern, responsive admin dashboard built with React and styled with shadcn/ui. NovaDash demonstrates a complete frontend architecture — authentication flow, protected routing, global state management, dark mode, and data visualization — all built from scratch using current React best practices.

🔗 **Live Demo:** [[click to view live](https://nova-dash-three.vercel.app/)]

---

## ✨ Features

- 🔐 **Authentication flow** — login, logout, and persisted sessions via `localStorage`
- 🛡️ **Protected routes** — unauthenticated users are automatically redirected to the login page
- 🌗 **Dark mode** — fully themed light/dark mode with no flash-of-incorrect-theme on load
- 📊 **Data visualization** — revenue and traffic charts built with Recharts
- 📋 **Data tables** — sortable, styled user management table with status badges
- 🧭 **Client-side routing** — nested routes with lazy-loaded pages and Suspense fallbacks
- 🗂️ **Global state management** — Context API + `useReducer` for auth/theme, Zustand for UI state
- 🔄 **Async data fetching** — simulated API calls using TanStack React Query, with loading states and caching
- ✅ **Form validation** — real-time validation feedback on the login form
- 🎨 **Custom design system** — built on shadcn/ui's component library with a tailored Zinc theme

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS v4, shadcn/ui |
| Routing | React Router v7 |
| Server state | TanStack React Query |
| Client state | Context API + `useReducer`, Zustand |
| Charts | Recharts |
| Icons | Lucide React |

---

## 📄 Pages

| Route | Description |
|---|---|
| `/login` | Authentication page with form validation |
| `/` | Dashboard — stat cards and revenue overview chart |
| `/analytics` | Website traffic trends |
| `/users` | User management table with status indicators |
| `/settings` | Theme preferences |
| `/profile` | Account overview and logout |

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/sadiksaifi9958/nova-dash.git
cd nova-dash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/ui/   # shadcn/ui components
├── context/          # Global auth & theme state (Context API)
├── store/            # Zustand stores (sidebar UI state)
├── layout/           # App shell (sidebar, navigation, outlet)
├── pages/            # Route-level page components
├── router/           # Route definitions and protected route logic
└── lib/              # Utility functions
```

---

## 🎯 Key Architectural Decisions

- **Context API vs. Zustand**: Context manages slow-changing, app-wide state (auth, theme), while Zustand handles fast-changing UI state (sidebar toggling) — avoiding unnecessary re-renders.
- **Protected routing**: A dedicated `ProtectedRoute` component gates access to authenticated pages, redirecting unauthenticated users before any protected content renders.
- **Theme persistence**: Theme preference is saved to `localStorage` and applied via an inline script in `index.html`, preventing a flash of the wrong theme on page load.
- **Lazy loading**: Each page is code-split with `React.lazy` and `Suspense`, reducing the initial bundle size.

---

## 📌 Note on Data

This project uses simulated data (hardcoded arrays and mock async functions) to demonstrate frontend patterns like data fetching, loading states, and caching — there is currently no backend or real database. Login accepts any valid-format email and password (no real account verification).

---

## 👤 Author

**Sadik Saifi**
[GitHub](https://github.com/sadiksaifi9958) · [LinkedIn](https://linkedin.com/in/sadik-saifi-934794353)
