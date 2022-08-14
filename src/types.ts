import { DAYS, MOON_PHASES } from "./constants";
import sampleData from "./sample.json";

export type RawData = typeof sampleData;

export type Day = typeof DAYS[number];

export type MoonPhase = typeof MOON_PHASES[number];

export type Forecast = {
  temperature: {
    high: number;
    low: number;
    feelsLike: number;
  };
  humidity: number;
  moonPhase: MoonPhase;
  moonrise: Date;
  moonset: Date;
  sunrise: Date;
  sunset: Date;
};

export type Alert = {
  event: string;
  description: string;
  from: Date;
  to: Date;
};

export type HomepageData = {
  alerts: Alert[];
  hourlyForecasts: Record<Day, Forecast>;
  dailyForecasts: Record<Day, Forecast>;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  moonPhase: MoonPhase;
  moonrise: Date;
  moonset: Date;
  sunrise: Date;
  sunset: Date;
  yearElapsedPercent: {
    done: number;
    left: number;
  };
};
