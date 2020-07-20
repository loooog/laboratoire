import './main.scss';

const images = Array.from(document.querySelectorAll('img'));
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 700;

const mountainImage = images[0];
const seaImage = images[1];

const brush = e => {
  const radius = 40;
  const x = e.offsetX;
  const y = e.offsetY;

  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
  ctx.clip();
  ctx.clearRect(x - radius, y - radius, radius * 2, radius * 2);
  ctx.restore();
};

const paint = () => {
  ctx.drawImage(mountainImage, 0, 0, 400, 700);
  canvas.addEventListener('mouseover', brush);
  canvas.addEventListener('mousemove', brush);
};

mountainImage.addEventListener('load', () => {
  paint();
});

mountainImage.addEventListener('load', () => {
  seaImage.style.visibility = 'visible';
});
