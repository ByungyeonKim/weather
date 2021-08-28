export default function temperature(data) {
  let location = document.querySelector('.location');
  let tempList = document.querySelector('.temp-list');
  let weatherIcon = data.weather[0].icon;

  location.append(data.name);
  tempList.innerHTML = `
          <li class="temp">${data.main.temp}°</li>
          <li class="icon">
            <img src='http://openweathermap.org/img/wn/${weatherIcon}.png'>
          </li>
          <li class="feels-temp">체감온도: ${data.main.feels_like}°</li>
          <li class="max-temp">최고: ${data.main.temp_max}°</li>
          <li class="min-temp">최저: ${data.main.temp_min}°</li>
          `;
}
