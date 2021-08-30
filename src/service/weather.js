export default class Weather {
  constructor(key) {
    this.key = key;
    this.baseURL = 'http://api.openweathermap.org';
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  getWeather() {
    return fetch(
      `${this.baseURL}/data/2.5/weather?q=seoul&appid=${this.key}&units=metric`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(new Error(`에러 발생, ${error}`)));
  }

  search(query) {
    return fetch(
      `${this.baseURL}/data/2.5/weather?q=${query}&appid=${this.key}&units=metric`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(new Error(`에러 발생, ${error}`)));
  }
}
