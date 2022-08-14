import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { WiHumidity } from "react-icons/wi";
import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsMoon,
  BsSun,
  BsGeoAlt,
} from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

import "./App.css";
import { HomepageData, RawData } from "./types";
import { DES_MOINES_COORDINATES } from "./constants";

import data from "./sample.json";

const processRawData = (data: RawData) => {
  let processedData = {
    ...data,
  };
  return processedData;
};

const Sun = () => (
  <div className="sun layout-1">
    <div className="icon">
      <BsSun />
    </div>
    <div>
      <div className="rise">
        <BsArrowUpShort /> 2:03 am
      </div>
      <div className="set">
        <BsArrowDownShort /> 5:43 pm
      </div>
    </div>
  </div>
);

const Moon = () => (
  <div className="moon layout-1">
    <div className="icon">
      <BsMoon />
    </div>
    <div>
      <div className="rise">
        <BsArrowUpShort /> 2:03 am
      </div>
      <div className="set">
        <BsArrowDownShort /> 5:43 pm
      </div>
    </div>
  </div>
);

const Humidity = () => (
  <div className="humidity">
    <WiHumidity /> <span>78%</span>
  </div>
);

const DayAndWeekCount: React.FC<{
  date: Date;
}> = ({ date }) => {
  const dayOfYear = parseInt(format(date, "d"));
  const weekOfYear = parseInt(format(date, "Io"));
  const dayPercent = Math.round(dayOfYear / 365) * 100;
  const weekPercent = Math.round(weekOfYear / 365) * 100;

  return (
    <div className="day-week layout-1">
      <div className="icon">
        <IoCalendarOutline />
      </div>
      <div>
        <div>
          Day {dayOfYear} <span>{dayPercent}%</span>
        </div>
        <div>
          Week {weekOfYear} <span>{weekPercent}%</span>
        </div>
      </div>
    </div>
  );
};

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="time">
      It&#8217;s <strong>{format(time, "h:mm aaa")}</strong>
    </div>
  );
};

const Header: React.FC = ({ children }) => {
  const childrenCount = React.Children.count(children);

  return (
    <header
      style={{
        gridTemplateColumns: `repeat(${childrenCount}, 1fr)`,
        marginBottom: "3em",
      }}
    >
      {children}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <Location coordinates={DES_MOINES_COORDINATES} />
    </footer>
  );
};

const Location: React.FC<Pick<HomepageData, "coordinates">> = ({
  coordinates,
}) => {
  return (
    <div className="location">
      <BsGeoAlt /> {coordinates.latitude}, {coordinates.longitude}
    </div>
  );
};

const Day = () => {
  <div className="tile-day">
    <h2>
      
    </h2>
  </div>
}

const MockHomepage = () => {
  const now = new Date();

  return (
    <>
      <Header>
        <Sun />
        <Moon />
        <DayAndWeekCount date={now} />
      </Header>
      <Time />
      <section className="date">
        on {format(now, "EEEE', the' io 'of' LLLL")}
      </section>
      <section className="daily">
        <ul>
          {data.daily.map((h, i) => {
            return (
              <li>
                {new Date(h.dt * 1000).toString()} {h.feels_like.day}
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default MockHomepage;
