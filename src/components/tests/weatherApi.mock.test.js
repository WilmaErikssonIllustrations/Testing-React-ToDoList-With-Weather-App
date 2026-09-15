import { describe, expect, test } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../../mocks/server";
import { getStockholmWeather } from "../../services/weatherApi.js";

describe("Open-Meteo weather function with MSW", () => {
  test("returns temperature and weather code as numbers", async () => {
    // ARRANGE & ACT
    const data = await getStockholmWeather();

    // ASSERT
    expect(data).not.toBeNull();
    expect(typeof data).toBe("object");

    // jag kontrollerar temperatur
    expect(typeof data.temperature).toBe("number");
    expect(Number.isFinite(data.temperature)).toBe(true);

    // samma fast väderkod
    expect(typeof data.weatherCode).toBe("number");
    expect(Number.isInteger(data.weatherCode)).toBe(true);
  });

  test("throws error if server responds with error code 500)", async () => {
    // ARRANGE: Mockar så att API:et svara med serverfel
    server.use(
      http.get("https://api.open-meteo.com/v1/forecast", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    // ACT & ASSERT
    await expect(getStockholmWeather()).rejects.toThrow(
      "Det gick inte att hämta vädret.",
    );
  });

  test("throws error if internet connection is not established", async () => {
    // ARRANGE: Mockar nätverksfel
    server.use(
      http.get("https://api.open-meteo.com/v1/forecast", () => {
        return HttpResponse.error();
      }),
    );

    // ACT & ASSERT
    await expect(getStockholmWeather()).rejects.toThrow("Failed to fetch");
  });
});
