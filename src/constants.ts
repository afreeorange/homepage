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
