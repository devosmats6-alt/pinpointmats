# React + Vite project structure will be provided here.

# package.json
{
  "name": "pinpointmats",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "vite": "^4.4.9"
  }
}

# index.html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PinPointMats</title>
  </head>
  <body class="bg-gray-900">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

# vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

# postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

# tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

# src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

# src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-900 text-gray-100;
}

# src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">PinPointMats</h1>
          <p className="text-sm text-gray-400">
            Terreinopmetingen • Uitzettingen • Perceelsgrenzen
          </p>
        </div>
        <nav className="text-sm text-gray-300 space-x-6 hidden md:block">
          <a href="#prijzen" className="hover:text-white">Prijzen</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold">Precisie in het veld — praktisch en snel</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Ik ben Mats Devos, zelfstandig terreinopmeter in bijberoep. Ik lever
              professionele opmetingen en uitzettingen voor particulieren,
              aannemers en architecten. Snel, discreet en met moderne apparatuur.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✅ Algemene opmetingen</li>
              <li>✅ Relief- & perceelsgrenzen</li>
              <li>✅ Uitzettingen (werven & gebouwen)</li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-sm"
              >
                Vraag offerte
              </a>
              <a href="#prijzen" className="text-sm text-gray-400 hover:text-white">
                Bekijk prijzen
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="h-64 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm">Apparatuur</p>
                <p className="mt-2 text-lg font-medium text-white">Emlid Reach RS4 Pro</p>
                <p className="text-xs mt-2 text-gray-500">
                  Tilt compensation • Full-HD camera's • LoRa / UHF / NTRIP
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="prijzen" className="mt-8 p-6 bg-gray-850 rounded-2xl">
          <h3 className="text-xl font-semibold">Prijzen</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-medium">Opmetingen</h4>
              <p className="text-gray-400 mt-2">
                Vanaf <span className="text-white">€300 excl. BTW</span>. Grote projecten
                op aanvraag.
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-medium">Uitzettingen</h4>
              <p className="text-gray-400 mt-2">
                Vanaf <span className="text-white">€400 excl. BTW</span>. Grote projecten
                op aanvraag.
              </p>
            </div>
          </div>
        </section>

        <section id="disclaimer" className="mt-8 p-6 bg-gray-850 rounded-2xl">
          <h3 className="text-xl font-semibold">Belangrijke informatie</h3>
          <p className="text-sm text-gray-400 mt-3">
            Ik ben geen beëdigd landmeter. De uitgevoerde opmetingen en
            uitzettingen dienen enkel als praktische ondersteuning. Ik kan niet
            aansprakelijk worden gesteld voor officiële grensvaststellingen of
            juridische geschillen. Voor rechtsgeldige metingen raadpleeg een
            beëdigd landmeter.
          </p>
        </section>

        <section id="contact" className="mt-8 p-6 bg-gray-850 rounded-2xl">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-sm text-gray-400 mt-3">PinPointMats — Mats Devos</p>
          <p className="text-sm text-gray-400">Tramstraat 11, 3320 Hoegaarden</p>
          <p className="text-sm text-gray-400">BTW: BE1030.001.527</p>

          <p className="mt-4 text-sm text-gray-400">
            Mail rechtstreeks via:
            <a
              href="mailto:mats_devos@hotmail.com"
              className="text-gray-200 underline ml-1"
            >
              mats_devos@hotmail.com
            </a>
          </p>
        </section>

        <footer className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PinPointMats — Alle rechten voorbehouden.
        </footer>
      </main>
    </div>
  );
}
