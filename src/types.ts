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
  moonRise: Date;
  moonSet: Date;
  sunRise: Date;
  sunSet: Date;
  yearElapsedPercent: {
    done: number;
    left: number;
  };
};
