// // let counter = 0;

// const counterElem = document.querySelector('.counter');
// const incrementBtn =  document.querySelector('.increment');
// const decrementBtn = document.querySelector('.decrement');
// const resetBtn = document.querySelector('reset')

// incrementBtn.addEventListener('click', function() {
//     counter++;
//     counterElem.innerText = counter;
// });

// decrementBtn.addEventListener('click', function() {
//     counter--;
//     counterElem.innerText = counter;
// });

// resetBtn.addEventListener('click',function(){
//     MyMessage.innerText = '0'
// });

// ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
  });
