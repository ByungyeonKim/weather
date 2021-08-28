'use strict';
import apiKey from './config.js';
import Weather from './service/weather.js';
import temperature from './temperature.js';
import clothes from './clothes.js';
import background from './background.js';

const weather = new Weather(apiKey);

weather.getJSON((err, data) => {
  if (err !== null) {
    console.error(new Error(`${err}, 에러 발생.`));
  } else {
    temperature(data);
    background(data);
    clothes(data);
    date(data);
  }
});

function date() {
  let time = document.querySelector('.time');
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  time.append(`${month}월 ${day}일 ${hours}시 ${minutes}분`);
}
