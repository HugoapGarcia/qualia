import React, { useEffect, useState } from 'react';
import Axios from "axios";
import './style.css';

function App() {

  const APIkey = '6094bad2b39d0c18494fb1fe6179385f';
  const baseUri = 'https://api.openweathermap.org/data/2.5/weather?'
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=California&appid=${APIkey}`;


  const [useLocation, setLocation] = useState(null);

  const [useIcon, setIcon] = useState(null);
  const [usecity, setCity] = useState('Weather');

  const [celsious, setCelsious] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    getCurrentlocation()
  }, [toggle, useLocation])

  /**
   * @description Get and Set user location browser to determine the 
   * local weather.
   */
  function getCurrentlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setLocation(`${baseUri}lat=${lat}&lon=${lon}&appid=${APIkey}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  /**
   * Function to test the url
   * @param {string} url URL to test
   * @returns {boolean} True if server alive and false if dead
   */
  async function getWeather() {
    try {
      console.log("testing: " + useLocation);
      await Axios.get(useLocation, {
        timeout: 1900
      })
        .then((res) => res.data)
        .catch((_e) => console.log("%cfail: " + useLocation, "color: red"))
        .then((data) => {
          console.log(data)

          setIcon(data.weather[0].icon);

          setCity(data.name)

          setCelsious((data.main.temp - 273.15).toFixed(2));
          let _fah = (data.main.temp * 9 / 5) - 459.67;
          setFahrenheit(_fah.toFixed(2));

        })
      console.log("%cpass: " + useLocation, "color: green");
      return true;
    } catch (_exception) {
      console.log("%cfail: " + useLocation, "color: red");
      // console.log(exception);
      return false;
    }
  }

  /**
   * 
   * @returns Span Html to be display in UI
   */
  function isCelsiousOrFahrenheit() {
    if (toggle) {
      return <span>{celsious} &#8451;</span>
    }
    return <span>{fahrenheit} &#x2109;</span>
  }

  return (
    <>
      <div className="weather">
        {useIcon ? <img src={`http://openweathermap.org/img/wn/${useIcon}.png`} alt='weather' /> : <></>}

        <h1>{usecity}</h1>
        {isCelsiousOrFahrenheit()}<br /><br/>
        <button disabled={useLocation ? false : true} onClick={(e) => getWeather(e)}>Get Weather</button> <br />
        <button disabled={useLocation ? false : true} onClick={(e) => setToggle(!toggle)}>Celsious/Fahrheit</button>
      </div>

    </>
  );
}

export default App;
