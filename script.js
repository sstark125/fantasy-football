'use strict';
// Variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal');

// Functions
const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const OpenModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Logic
for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', OpenModal);
}

btnClose.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

document.addEventListener('keydown', function () {
  console.log('A key was pressed');
});
