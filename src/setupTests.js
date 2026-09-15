import "@testing-library/jest-dom/vitest";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// startaa MSW-servern innan alla tester körs
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));

// jag nollställer handlers efter varje test (viktigt för server.use!)
afterEach(() => server.resetHandlers());

// Stängerr ner servern när alla tester är klara
afterAll(() => server.close());
