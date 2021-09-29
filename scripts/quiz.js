const btnSubmit = document.querySelector(".btn-submit");
const quizForm = document.querySelector(".quiz-form");
const message = document.querySelector(".message");
// console.log("hello");

btnSubmit.addEventListener("click", function (event) {
	event.preventDefault();
	const formResults = new FormData(quizForm);
	const correctAnswers = ["2", "1", "1", "1", "1", "2", "1", "1", "3"];
	let index = 0;
	let score = 0;
	// console.log(formResults.values());
	for (let value of formResults.values()) {
		// console.log(value);
		if (value == correctAnswers[index]) score++;
		index++;
		// if (value == undefined) console.log("hello");
	}
	writeMessage("Your score is : " + score);
});

function writeMessage(msg) {
	message.innerHTML = msg;
	message.style.padding = "1rem";
	message.style.borderRadius = "1rem";
	message.style.backgroundColor = "var(--primary-color)";
	message.style.color = "white";
	message.style.textAlign = "center";
}
