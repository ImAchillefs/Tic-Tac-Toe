const block = document.querySelectorAll(".block");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let winnerSum = [
	['one','two','three'],
	['four','five','six'],
	['seven','eight','nine'],
	['one','four','seven'],
	['two','five','eight'],
	['three','six','nine'],
	['one','five','nine'],
	['three','five','seven']
]

let turn = true;
let clickCount = 0;
let checkGreen = [];
let checkRed = [];
let greenWins = false;
let redWins = false;

function gameReset() {
	clickCount = 0;
	turn = !turn;
	greenWins = false;
	redWins = false;
	checkGreen.length = 0;
	checkRed.length = 0;
	block.forEach(i => {
		i.style.backgroundColor = "transparent";
		i.style.pointerEvents = "auto";
	});
}
function setCheckArr(i,arr) {
	arr.push(i);
}

block.forEach(i => {
	i.addEventListener("click", () => {
		clickCount++;
		if (turn) {
			i.style.backgroundColor = "green";
			i.style.pointerEvents = "none";
			setCheckArr(i.id, checkGreen);
			turn = !turn;
			if (checkGreen.length >= 3){
				greenWins = winnerSum.some(i => {
					let checkCount = 0;
					for (let j = 0; j < checkGreen.length; j++) {
						if (i.includes(checkGreen[j])) {
							checkCount++;
						}
					}
					if (checkCount >= 3) {
						return true;
					}
				})
			} 
		} else {
			i.style.backgroundColor = "red";
			i.style.pointerEvents = "none";
			setCheckArr(i.id, checkRed);
			turn = !turn;
			if (checkRed.length >= 3){
				redWins = winnerSum.some(i => {
					let checkCount = 0;
					for (let j = 0; j < checkRed.length; j++) {
						if (i.includes(checkRed[j])) {
							checkCount++;
						}
					}
					if (checkCount >= 3) {
						return true;
					}
				})
			} 
		} 
		if (greenWins) {
			alert("Green has Won!");
			gameReset();
		} else if (redWins) {
			alert("Red has Won!");
			gameReset();
		}
		if (clickCount === 9) {
			alert("No Winners..");
			gameReset();
		}
	})
});

