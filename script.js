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

document.querySelectorAll('.btn-call').forEach(callingBtn => {
  callingBtn.addEventListener('click', () => {
    if (callCoins < 20) {
      alert('Not enough coins!');
      return;
    }

    callCoins -= 20; 
    allRemainingCoins.textContent = callCoins;

    const mainBoxCard = callingBtn.closest('.main-box');
    const n = mainBoxCard.querySelector('span').textContent.trim();

    alert(`Calling ${n}`);
  });
});


// //// Call History And Clear Button //

const callHistoryButtons = document.querySelectorAll('.btn-call');
const callHistoryContainer = document.getElementById('full-history-data');

callHistoryButtons.forEach(callHistoryButton => {
    callHistoryButton.addEventListener('click', () => {

        const HistoryCard = callHistoryButton.closest('.main-box'); 
        const serviceName = HistoryCard.querySelector('h1').innerText;
        const callNumber = HistoryCard.querySelector('span').innerText;
        const realTime = new Date().toLocaleTimeString();

        const addNewHistoryItem = document.createElement('div');
        addNewHistoryItem.className = 'single-history';
        addNewHistoryItem.innerHTML = `
            <div class="flex justify-between items-center bg-[#F2F2F2] p-4 rounded-2xl mb-3">
                <div>
                  <h1 class="text-[18px] font-semibold">${serviceName}</h1>
                  <p class="text-[18px] text-[#5C5C5C]">${callNumber}</p>
                </div>
                <div>
                  <p>${realTime}</p>
                </div>
            </div>
        `;

        callHistoryContainer.appendChild(addNewHistoryItem);
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
          alert(`${number} is copied`);
        })
    });
  });
}
copyBtnCopy();
