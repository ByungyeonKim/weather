export default function date() {
  let time = document.querySelector('.time');
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  time.innerHTML = `${month}월 ${day}일 ${hours}시 ${minutes}분`;
}
