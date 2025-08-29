// // Heart Count //

const heartCount = document.getElementById('heart-count')
const lifeHeart = document.querySelectorAll('.life-heart')
let countOfHeart = 0

lifeHeart.forEach(heart => {
  heart.addEventListener('click', () => {
    countOfHeart++;
    heartCount.textContent = countOfHeart;
  });
});


