class Weather {
  constructor(key) {
    this.key = key;
    this.baseURL = 'http://api.openweathermap.org';
  }

  getJSON(callback) {
    const xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.open(
      'GET',
      `${this.baseURL}/data/2.5/weather?q=seoul&appid=${this.key}&units=metric`
    );
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  }
}

export default Weather;
