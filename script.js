const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

let position = 0;
const slideWidth = 170; // image width + margin

rightBtn.addEventListener('click', () => {
  position -= slideWidth;
  track.style.transform = `translateX(${position}px)`;
});

leftBtn.addEventListener('click', () => {
  position += slideWidth;
  track.style.transform = `translateX(${position}px)`;
});
