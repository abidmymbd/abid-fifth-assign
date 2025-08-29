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

// // Challenge Part - Copy Count //

const copyCount = document.getElementById('copy-count')
const copybtn = document.querySelectorAll('.btn-copy')

let countOfCopy = 2

copybtn.forEach(copy =>{
    copy.addEventListener('click', () =>{
        countOfCopy++;
        copyCount.textContent = countOfCopy;
    })
})

// // Copy & Paste //

function copyBtnCopy() {
  const copyBtns = document.querySelectorAll('.btn-copy');

  copyBtns.forEach(cBtn => {
    cBtn.addEventListener('click', () => {

      const mainBox = cBtn.closest('.main-box');
      const numberElement = mainBox.querySelector('span');
      const number = numberElement.textContent.trim();

      navigator.clipboard.writeText(number)
        .then(() => {
          alert(`${number} is copied`);
        })
    });
  });
}
copyBtnCopy();
