const today = document.querySelector("#today");
const clock = document.querySelector("#clock");

const DAYS = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const MERIDIEMS = ["오전", "오후"];

function getClock() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1);
  const date = String(now.getDate());
  const day = String(now.getDay());
  const meridiem = MERIDIEMS[Math.floor(now.getHours() / 12)];
  const hours = String(now.getHours() % 12).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  today.innerText = `오늘은 ${year}년 ${month}월 ${date}일 ${DAYS[day]}입니다.`;
  clock.innerText = `지금 시간은 ${meridiem} ${hours}:${minutes}:${seconds} 입니다.`;
}

getClock();
setInterval(getClock, 1000);
