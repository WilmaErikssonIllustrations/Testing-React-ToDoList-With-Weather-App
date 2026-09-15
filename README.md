# Vädret i Stockholm & React ToDo App

En enkel Todo-app med React, Vite och JSON Server. Innehåller enhets-, komponent- och integrationstester som använder Vitest, React Testing Library och MSW.

## Starta appen

Följ dessa steg för att köra projektet lokalt:

1. Klona repositoryt:

```bash
   git clone <ditt-repo-url>
   cd React-ToDo-With-Weather-App-main
```

2. Installera först paketen:

```bash
npm install
```

3. Starta JSON Server i den första terminalen:

```bash
npm run server
```

4. Starta React-appen i en andra terminal:

```bash
npm run dev
```

Öppna adressen som Vite visar, vanligtvis:

```text
http://localhost:5173
```

## Testkommandon

Projektet använder Vitest och React Testing Library för enhets- och komponenttester, samt MSW (Mock Service Worker) för att mocka externa API-anrop i integrationstesterna.

- Kör testerna i watch-mode:

```bash
  npm test
```

- Kör testerna en enda gång (CI/CD-läge):

```bash
  npx vitest run
```

## Sammanfattning av testresultatet

Testerna täcker in logik, komponenter och externa API-anrop (totalt 16 godkända tester):

- Task Utils (taskUtils.test.js): 10 enhetstester som verifierar logiken för att hantera och manipulera tasks.
- Todo Form (TodoForm.test.jsx): Komponenttester som säkerställer att formuläret hanterar inmatningar korrekt.
- Weather API med MSW (weatherApi.mock.test.js): Integrationstester som simulerar Open-Meteo API:et och verifierar tre scenarier:
  - Att väderdata hämtas och returneras som numeriska värden.
  - Att applikationen hanterar serverfel (HTTP 500) korrekt.
  - Att applikationen hanterar nätverksfel korrekt.

## Externa länkar

- Open-Meteos dokumentation: [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)
