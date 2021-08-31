export default function clothes(data) {
  let clothes = document.querySelector('.clothes-list');
  let temp = data.main.temp;

  if (temp <= 4) {
    return (clothes.innerHTML = `
        <li><h2>패딩</h2></li>
        <li><h2>두꺼운 코트</h2></li>
        <li><h2>목도리</h2></li>
        <li><h2>기모의류</h2></li>
            `);
  }
  if (temp >= 5 && temp < 9) {
    return (clothes.innerHTML = `
        <li><h2>코트</h2></li>
        <li><h2>가죽자켓</h2></li>
        <li><h2>발열내의</h2></li>
        <li><h2>니트</h2></li>
        <li><h2>레깅스</h2></li>
            `);
  }
  if (temp >= 9 && temp < 12) {
    return (clothes.innerHTML = `
        <li><h2>자켓</h2></li>
        <li><h2>트렌치코트</h2></li>
        <li><h2>야상</h2></li>
        <li><h2>니트</h2></li>
        <li><h2>청바지</h2></li>
        <li><h2>스타킹</h2></li>
            `);
  }
  if (temp >= 12 && temp < 17) {
    return (clothes.innerHTML = `
        <li><h2>얇은 니트</h2></li>
        <li><h2>맨투맨</h2></li>
        <li><h2>가디건</h2></li>
        <li><h2>청바지</h2></li>
            `);
  }
  if (temp >= 17 && temp < 20) {
    return (clothes.innerHTML = `
        <li><h2>얇은 가디건</h2></li>
        <li><h2>긴팔</h2></li>
        <li><h2>면바지</h2></li>
        <li><h2>청바지</h2></li>
            `);
  }
  if (temp >= 20 && temp < 23) {
    return (clothes.innerHTML = `
        <li><h2>얇은 가디건</h2></li>
        <li><h2>얇은 셔츠</h2></li>
        <li><h2>반바지</h2></li>
        <li><h2>면바지</h2></li>
            `);
  }
  if (temp >= 23 && temp < 28) {
    return (clothes.innerHTML = `
        <li><h2>반팔</h2></li>
        <li><h2>얇은 셔츠</h2></li>
        <li><h2>반바지</h2></li>
        <li><h2>면바지</h2></li>
            `);
  }
  if (temp >= 28) {
    return (clothes.innerHTML = `
        <li><h2>민소매</h2></li>
        <li><h2>반팔</h2></li>
        <li><h2>반바지</h2></li>
        <li><h2>면바지</h2></li>
        <li><h2>원피스</h2></li>
            `);
  }

  console.error(new Error(`${temp}, 옷 정보를 불러오지 못함.`));
}
