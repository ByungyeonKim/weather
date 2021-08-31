export default function background(data) {
  const background = document.querySelector('.weather-img');
  const temp = data.main.temp;
  const season = (url) => {
    background.style.background = `url(${url}) no-repeat center/cover`;
  };

  if (temp <= 4) {
    return season('./img/winter.jpg');
  }
  if (temp >= 5 && temp < 9) {
    return season('./img/earlywinter.jpg');
  }
  if (temp >= 9 && temp < 12) {
    return season('./img/beginwinter.jpg');
  }
  if (temp >= 12 && temp < 17) {
    return season('./img/fall.jpg');
  }
  if (temp >= 17 && temp < 20) {
    return season('./img/earlyfall.jpg');
  }
  if (temp >= 20 && temp < 23) {
    return season('./img/earlysummer.jpg');
  }
  if (temp >= 23 && temp < 28) {
    return season('./img/beginsummer.jpg');
  }
  if (temp >= 28) {
    return season('./img/summer.jpg');
  }

  console.error(new Error(`${temp}, 배경을 불러오지 못함.`));
}
