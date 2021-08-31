'use strict';
import apiKey from './config.js';
import Weather from './service/weather.js';
import temperature from './temperature.js';
import clothes from './clothes.js';
import background from './background.js';
import date from './date.js';

const weather = new Weather(apiKey);
const searchBtn = document.querySelector('.fa-search-location');
const input = document.querySelector('.location-search');

weather
  .getWeather() //
  .then((data) => {
    temperature(data);
    background(data);
    clothes(data);
    date(data);
  })
  .catch((err) => console.error(new Error(err)));

const onSearch = () => {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const search = (query) => {
    weather
      .search(query) //
      .then((data) => {
        temperature(data);
        background(data);
        clothes(data);
        date(data);
      })
      .catch((err) => console.error(new Error(err)));
  };
  search(input.value);
  input.focus();
};

searchBtn.addEventListener('click', () => {
  onSearch();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onSearch();
  }
});
