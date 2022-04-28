'use strict';

let elCheckBtn = document.querySelector('.check');
let elGuessInput = document.querySelector('.guess');
let elMessage = document.querySelector('.message');
let elSecretNumber = document.querySelector('.number');
let elScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');
let elAgain = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0

elCheckBtn.addEventListener('click', function() {
	let guesValue = elGuessInput.value * 1;
	
	if(!guesValue) {
		elMessage.innerHTML = 'Iltimos son kiriting!';
	} else if(guesValue === secretNumber) {
		elMessage.innerHTML = 'You are WIN!';
		elSecretNumber.innerHTML = secretNumber;
		document.body.style.backgroundColor = "#60b347";
		elCheckBtn.disabled = true;
		if(score > highscore) {
			highscore = score;
			elHighScore.innerHTML = highscore;
		}
	} else if(guesValue > secretNumber) {
		elMessage.innerHTML = 'Bu raqam katta!';
		score--
		elScore.innerHTML = score;
		if(score <= 0) {
			elMessage.innerHTML = 'GAME OVER!';
			elCheckBtn.disabled = true;
			document.body.style.backgroundColor = "#f00";
		}
	} else if(guesValue < secretNumber) {
		elMessage.innerHTML = 'Bu raqam kichik!';
		score--
		elScore.innerHTML = score;
		if(score <= 0) {
			elMessage.innerHTML = 'GAME OVER!';
			elCheckBtn.disabled = true;
			document.body.style.backgroundColor = "#f00";
 		}
	} 
})

elAgain.addEventListener('click', function() {
	score = 10;
	elScore.innerHTML = score;
	secretNumber = Math.floor(Math.random() * 20) + 1;
	elSecretNumber.innerHTML = '?';
	document.body.style.backgroundColor = "#222";
	elGuessInput.value = '';
	elCheckBtn.disabled = false;
	elMessage.innerHTML = 'Loading...';
})