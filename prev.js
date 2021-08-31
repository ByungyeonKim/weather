// 스택오버플로우 구글링
// https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    // 접속이 성공적이면 null 값 반환, 그 외는 status 값 반환
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

// 아래와 같이 사용이 가능해집니다.
getJSON(
  'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6b39655b738a367745475ff66030e6e4&units=metric',
  function (err, data) {
    // null 값이 아니면 err
    if (err !== null) {
      alert('죄송합니다. 예상치 못한 오류가 발생했습니다.' + err);
    } else {
      loadWeather(data);
      todayClothes(data);
      loadImg(data);
    }
  }
);

function loadWeather(data) {
  let location = document.querySelector('.location');
  let currentTime = document.querySelector('.current-time');
  let currentTemp = document.querySelector('.current-temp');
  let feelsLike = document.querySelector('.feels-like');
  let minTemp = document.querySelector('.min-temp');
  let maxTemp = document.querySelector('.max-temp');
  let icon = document.querySelector('.icon');
  let weatherIcon = data.weather[0].icon;

  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  location.append(data.name);
  currentTemp.append(`${data.main.temp}°`);
  // currentTemp.append(`26°`);
  feelsLike.append(`${data.main.feels_like}°`);
  maxTemp.append(`최고:${data.main.temp_max}°`);
  minTemp.append(`최저:${data.main.temp_min}°`);
  icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherIcon}.png'>`;

  currentTime.append(`${month}월 ${day}일 ${hours}:${minutes}`);
}

// 82줄
function todayClothes(data) {
  let clothes = document.querySelector('.today-clothes');
  let currentTemp = data.main.temp;

  let winter = currentTemp <= 4;
  let earlyWinter = currentTemp >= 5 && currentTemp < 9;
  let beginWinter = currentTemp >= 9 && currentTemp < 12;
  let fall = currentTemp >= 12 && currentTemp < 17;
  let earlyFall = currentTemp >= 17 && currentTemp < 20;
  let earlySummer = currentTemp >= 20 && currentTemp < 23;
  let beginSummer = currentTemp >= 23 && currentTemp < 28;
  let summer = currentTemp >= 28;

  if (winter) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>패딩</h2></li>
        <li><h2>두꺼운 코트</h2></li>
        <li><h2>목도리</h2></li>
        <li><h2>기모의류</h2></li>
            `;
  } else if (earlyWinter) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>코트</h2></li>
        <li><h2>가죽자켓</h2></li>
        <li><h2>발열내의</h2></li>
        <li><h2>니트</h2></li>
        <li><h2>레깅스</h2></li>
            `;
  } else if (beginWinter) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>자켓</h2></li>
        <li><h2>트렌치코트</h2></li>
        <li><h2>야상</h2></li>
        <li><h2>니트</h2></li>
        <li><h2>청바지</h2></li>
        <li><h2>스타킹</h2></li>
            `;
  } else if (fall) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>얇은 니트</h2></li>
        <li><h2>맨투맨</h2></li>
        <li><h2>가디건</h2></li>
        <li><h2>청바지</h2></li>
            `;
  } else if (earlyFall) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>얇은 가디건</h2></li>
        <li><h2>긴팔</h2></li>
        <li><h2>면바지</h2></li>
        <li><h2>청바지</h2></li>
            `;
  } else if (earlySummer) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>얇은 가디건</h2></li>
        <li><h2>얇은 셔츠</h2></li>
        <li><h2>반바지</h2></li>
        <li><h2>면바지</h2></li>
            `;
  } else if (beginSummer) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>반팔</h2></li>
        <li><h2>얇은 셔츠</h2></li>
        <li><h2>반바지</h2></li>
        <li><h2>면바지</h2></li>
            `;
  } else if (summer) {
    clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>민소매</h2></li>
        <li><h2>반팔</h2></li>
        <li><h2>반바지</h2></li>
        <li><h2>면바지</h2></li>
        <li><h2>원피스</h2></li>
            `;
  }
}

function loadImg(data) {
  let background = document.querySelector('.flex-container');
  let currentTemp = data.main.temp;

  let winter = currentTemp <= 4;
  let earlyWinter = currentTemp >= 5 && currentTemp < 9;
  let beginWinter = currentTemp >= 9 && currentTemp < 12;
  let fall = currentTemp >= 12 && currentTemp < 17;
  let earlyFall = currentTemp >= 17 && currentTemp < 20;
  let earlySummer = currentTemp >= 20 && currentTemp < 23;
  let beginSummer = currentTemp >= 23 && currentTemp < 28;
  let summer = currentTemp >= 28;

  if (winter) {
    background.style.backgroundImage = "url('./img/winter.jpg')";
  } else if (earlyWinter) {
    background.style.backgroundImage = "url('./img/earlywinter.jpg')";
  } else if (beginWinter) {
    background.style.backgroundImage = "url('./img/beginwinter.jpg')";
  } else if (fall) {
    background.style.backgroundImage = "url('./img/fall.jpg')";
  } else if (earlyFall) {
    background.style.backgroundImage = "url('./img/earlyfall.jpg')";
  } else if (earlySummer) {
    background.style.backgroundImage = "url('./img/earlysummer.jpg')";
  } else if (beginSummer) {
    background.style.backgroundImage = "url('./img/beginsummer.jpg')";
  } else if (summer) {
    background.style.backgroundImage = "url('./img/summer.jpg')";
  }
}
