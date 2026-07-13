# Moja Gra (TypeScript, bez Vite)

Prosty szkielet gry w czystym TypeScript, kompilowany bezpośrednio przez `tsc`
(bez bundlera typu Vite/Webpack), gotowy do hostowania na GitHub Pages.

## Struktura

```
moja-gra/
├── src/
│   └── main.ts          # kod źródłowy gry (TypeScript)
├── dist/                 # tu trafia skompilowany JS (main.js) — generowane automatycznie
├── index.html             # strona wczytująca dist/main.js jako moduł ES
├── tsconfig.json          # konfiguracja kompilatora TypeScript
├── package.json
└── .github/workflows/deploy.yml   # automatyczny build + publikacja na GitHub Pages
```

## Rozwój lokalny

```bash
npm install
npm run watch     # kompiluje TS -> JS na bieżąco przy każdej zmianie
npm run serve     # uruchamia lokalny serwer (np. http://localhost:3000)
```

Otwórz `index.html` przez lokalny serwer (nie przez `file://`, bo moduły ES tego nie lubią).

## Budowanie do produkcji

```bash
npm run build
```

Wygeneruje `dist/main.js` na podstawie `src/main.ts`.

## Wdrożenie na GitHub Pages

1. Wrzuć repozytorium na GitHub.
2. W ustawieniach repo: **Settings → Pages → Source** ustaw na **GitHub Actions**.
3. Każdy `push` na branch `main` automatycznie:
   - zainstaluje zależności,
   - skompiluje TypeScript,
   - opublikuje `index.html` + `dist/` na GitHub Pages.

Adres strony pojawi się w zakładce **Settings → Pages** po pierwszym udanym wdrożeniu.

## Sterowanie w grze

Strzałki lub `W A S D` — poruszanie kwadracikiem po planszy (Canvas 2D).
