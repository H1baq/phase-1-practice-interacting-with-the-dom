document.addEventListener('DOMContentLoaded', function (){
    let timer=0;
    const timerInterval = setInterval(function(){
        timer++;
        document.getElementById('counter') .textContent = timer;
    },1000);

})
let counterValue=0;
const counterButton= document.getElementById('counter');
const increaseButton= document.getElementById('plus');
const decreaseButton= document.getElementById('minus');
increaseButton.addEventListener('click', function(){
    counterValue++;
    counterButton.textContent = counterValue;
});

decreaseButton.addEventListener('click', function(){
    counterValue--;
    counterButton.textContent = counterValue;
});
