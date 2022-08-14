export const MOON_PHASES = [
  "New", // 0 and 1
  "WaxingCrescent",
  "FirstQuarter", // 0.25
  "WaxingGibbous",
  "Full", // 0.5
  "WaningGibbous",
  "LastQuarter", // 0.75
  "WaningCrescent",
] as const;

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const DES_MOINES_COORDINATES = {
  latitude: 41.5887,
  longitude: -93.6212,
} as const;

/**
 * Source:
 * https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
 *
 * The description comes after "Today, we will have..." Adjust accordingly.
 */
export const CONDITION_MAP = {
  200: "some thunderstorms with light rain",
  201: "some thunderstorms with rain",
  202: "some thunderstorms with heavy rain",
  210: "a light thunderstorm",
  211: "a thunderstorm",
  212: "a heavy thunderstorm",
  221: "a raggedy-ass thunderstorm",
  230: "a thunderstorm with some light drizzle",
  231: "a thunderstorm with drizzle",
  232: "a thunderstorm with heavy drizzle",

  300: "a bit of a light intensity drizzle",
  301: "a drizzle",
  302: "a heavy-intensity drizzle",
  310: "some light intensity drizzle rain",
  311: "some drizzle rain",
  312: "a heavy intensity drizzle rain",
  313: "some shower rain and a drizzle",
  314: "some heavy shower rain and a drizzle",
  321: "a shower drizzle",

  500: "some light rain",
  501: "some moderate rain",
  502: "heavy intensity rain",
  503: "very heavy rain",
  504: "extreme rain",
  511: "freezing rain",
  520: "some light intensity shower rain",
  521: "shower rain",
  522: "heavy intensity shower rain",
  531: "raggedy-ass shower rain",
};
