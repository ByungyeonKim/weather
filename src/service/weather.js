class Weather {
  constructor(key) {
    this.key = key;
    this.baseURL = 'http://api.openweathermap.org';
  }

  getJSON(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      `${this.baseURL}/data/2.5/weather?q=seoul&appid=${this.key}&units=metric`
    );
    xhr.responseType = 'json';
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        console.error(
          new Error(`${status} : 예상치 못한 오류가 발생했습니다.`)
        );
      }
    };
    xhr.send();
  }
}

export default Weather;
