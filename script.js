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


///////////// Call Button Part  //////////////

let callCoins = 100; 

const allRemainingCoins = document.getElementById('all-rcoins');
const callHistoryContainer = document.getElementById('full-history-data');

document.querySelectorAll('.btn-call').forEach(button => {
  button.addEventListener('click', () => {
    
    if (callCoins < 20) {
      alert('You do not have enough coins! Must need 20 coins');
      return;
    }

    callCoins -= 20;
    allRemainingCoins.textContent = callCoins;

 
    const card = button.closest('.main-box');
    const serviceName = card.querySelector('h1').innerText;
    const serviceCode = card.querySelector('span').innerText;

 
    alert(`Calling ${serviceName} ${serviceCode}`);

  
    const realTime = new Date().toLocaleTimeString();
    const historyItem = document.createElement('div');
    historyItem.className = 'single-history';
    historyItem.innerHTML = `
      <div class="flex justify-between items-center bg-[#F2F2F2] p-4 rounded-2xl mb-3">
        <div>
          <h1 class="text-[18px] font-semibold">${serviceName}</h1>
          <p class="text-[18px] text-[#5C5C5C]">${serviceCode}</p>
        </div>
        <div>
          <p>${realTime}</p>
        </div>
      </div>
    `;
    callHistoryContainer.appendChild(historyItem);
  });
});


// // Clear Button //


const callClearButton = document.getElementById('clear-btn');

callClearButton.addEventListener('click',function(){
    callHistoryContainer.innerHTML = '';
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
          alert(`Number is coppied: ${number}`);
        })
    });
  });
}
copyBtnCopy();
