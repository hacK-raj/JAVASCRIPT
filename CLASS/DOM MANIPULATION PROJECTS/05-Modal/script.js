'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');

// console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  //    console.log(btnsOpenModal[i].textcontent);
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
document.addEventlistener('keydown',function(e){
    console.log(e.key);
    if(e.key === 'Escape'){
        // console.log('Esc was pressed');
    }

})