import { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const WeatherWidget = () => {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherForcastData, setWeatherForcastData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [error, setError] = useState("");
  const [isFetchingWeather, setIsFetchingWeather] = useState(false);

  // Fetch weather data
  const fetchWeatherCondition = async () => {
    try {
      setIsFetchingWeather(true);
      const response = await fetch(`http://localhost:3001/weather?q=${searchQuery}`);
      const result = await response.json();
      if (result.error || !result.location) {
        console.log(result);
        throw new Error(result.error?.message);
      }
      setWeatherForcastData(result);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeatherForcastData(null);
    } finally {
      setIsFetchingWeather(false);
    }
  };

  useEffect(() => {
    fetchWeatherCondition();
  }, []);

  const handleSearchClick = () => {
    if (searchQuery) {
      fetchWeatherCondition();
    }
    setSearchQuery("");
  };

  const formatCurrentDate = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);

    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    formatCurrentDate();
  }, []);

  return (
    <div className={styles.weatherWidgetContainer}>
      {isFetchingWeather && <Spinner />}
      {/* --------------- */}
      {error ? <ErrorMessage message={error} /> : ""}
      <h4>Current forecast for the {currentDate}</h4>
      <div className={styles.weatherBasicInfo}>
        <div className={styles.locationDetails}>
          <span className={styles.locationIcon}>
            <FontAwesomeIcon icon={faLocationDot} size="2xl" />
          </span>
          <p className={styles.cityName}>{weatherForcastData?.location?.name}</p>
          <p className={styles.countryName}>{weatherForcastData?.location?.country}</p>
        </div>
        <div className={styles.tempDetails}>
          <span className={styles.currentWeatherIcon}>
            <img src={weatherForcastData?.current?.condition.icon} alt="Current weather icon" />
          </span>
          <p className={styles.temprature}>
            {weatherForcastData?.current.temp_c
              ? Math.round(weatherForcastData?.current.temp_c)
              : "--"}
            &deg;C
          </p>
          <p className={styles.currentCondition}>{weatherForcastData?.current?.condition?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
