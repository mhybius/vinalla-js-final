const quotes = [
  { quote: "가는 말이 고우면 얕본다", author: "박명수" },
  { quote: "세번 참으면 호구된다", author: "박명수" },
  { quote: "어려운 길은 길이 아니다", author: "박명수" },
  { quote: "고생 끝에 골병난다", author: "박명수" },
  {
    quote: "지금 공부 안하면 더울때 더운데서 일하고 추울때 추운데서 일한다",
    author: "박명수",
  },
  { quote: "포기하면 편하다", author: "박명수" },
  {
    quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요가 없다",
    author: "박명수",
  },
  { quote: "즐길 수 없으면 피해라", author: "박명수" },
  { quote: "내 너 그럴줄 알았다", author: "박명수" },
  { quote: "새벽에 먹는 맥주와 치킨은 0칼로리다", author: "박명수" },
];

const quote = document.querySelector(".quote-section span:first-child");
const author = document.querySelector(".quote-section span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
