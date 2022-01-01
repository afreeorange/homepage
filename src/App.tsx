import React from "react";

import format from "date-fns/format";
import differenceInHours from "date-fns/differenceInHours";
import formatRelative from "date-fns/formatRelative";

import "./App.css";
import sampleData from "./sample.json";

type RawData = typeof sampleData;

type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type Forecast = {
  temperature: {
    high: number;
    low: number;
    feelsLike: number;
  };
  humidity: number;
};

type HomepageData = {
  city: {
    name: string;
    latitude: number;
    longitude: number;
  };
  sunrise: Date;
  sunset: Date;
  forecasts: Record<Day, Forecast>;
};

const processRawData = (data: RawData) => {
  let processedData = {
    ...data,
  };
  processedData.list.forEach((l) => new Date(l.dt * 1000));
  return processedData;
};

const Homepage = () => {
  const weatherData = processRawData(sampleData);

  return (
    <>
      <h1>
        <small>It&#8217;s {format(new Date(), "EEEE 'the' io")}</small>
        <br />
        In {weatherData.city.name} we have{" "}
        {weatherData.list[0].weather[0].description}. It&#8217;s{" "}
        {Math.round(weatherData.list[0].main.temp)}F but it feels like{" "}
        {Math.round(weatherData.list[0].main.feels_like)}F
      </h1>
      <h2>
        The sun will rise at{" "}
        {format(weatherData.city.sunrise * 1000, "h:m aaa")} and set at{" "}
        {format(weatherData.city.sunset * 1000, "h:m aaa")} (
        {differenceInHours(weatherData.city.sunset * 1000, new Date())})
      </h2>
      <ul>
        <li>{Math.round(weatherData.list[0].main.temp_max)}F High</li>
        <li>{Math.round(weatherData.list[0].main.temp_min)}F Low</li>
        <li>{Math.round(weatherData.list[0].main.humidity)}% Humidity</li>
      </ul>
    </>
  );
};

const MockHomepage = () => {
  const now = new Date();
  const dayPercent = {
    done: Math.round(parseInt(format(now, "d")) / 365) * 100,
    left: (1 - Math.round(parseInt(format(now, "d")) / 365)) * 100,
  };

  const weekPercent = {
    done: Math.round(parseInt(format(now, "Io")) / 365) * 100,
    left: (1 - Math.round(parseInt(format(now, "Io")) / 365)) * 100,
  };

  return (
    <>
      <div className="date">{format(now, "EEEE', the' io 'of' LLLL")}</div>
      <div className="day-count">
        It's the {format(now, "do")} day{" "}
        <span className="percent">
          <span className="done">{dayPercent.done}</span>
          <span className="left">{dayPercent.left}</span>
        </span>{" "}
        and {format(now, "Io")} week of the year{" "}
        <span className="percent">
          <span className="done">{weekPercent.done}</span>
          <span className="left">{weekPercent.left}</span>
        </span>
      </div>
    </>
  );
};

export default MockHomepage;
