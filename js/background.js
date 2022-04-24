// const images = ["01.jpg", "02.jpg", "03.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url(img/${chosenImage})`;

const gradients = [
  `linear-gradient(180deg, rgba(74,121,9,0.2726134399072129) 20%, rgba(255,170,0,1) 100%)`,
  `linear-gradient(180deg, rgba(74,121,9,0.2726134399072129) 20%, rgba(126,255,0,1) 100%)`,
  `linear-gradient(180deg, rgba(74,121,9,0.2726134399072129) 20%, rgba(0,255,191,1) 100%)`,
  `linear-gradient(180deg, rgba(74,121,9,0.2726134399072129) 20%, rgba(0,124,255,1) 100%)`,
  `linear-gradient(180deg, rgba(74,121,9,0.2726134399072129) 20%, rgba(150,0,255,1) 100%)`,
];

const chosenGradient = gradients[Math.floor(Math.random() * gradients.length)];

document.body.style.background = chosenGradient;
