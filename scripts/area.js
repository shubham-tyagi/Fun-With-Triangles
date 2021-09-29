const inputValues = document.querySelectorAll(".input-values");
const btnSubmit = document.querySelector(".btn-submit");
const message = document.querySelector(".message");
btnSubmit.addEventListener("click", function () {
	if (inputValues[0].value == "" || inputValues[1].value == "") {
		writeMessage("Don't leave any input empty.");
		return;
	}

	let base = Number(inputValues[0].value);
	let height = Number(inputValues[1].value);

	if (base < 0 || height < 0) {
		writeMessage("All the values should be greater than 0.");
		return;
	}
	let area = (1 / 2) * base * height;
	// console.log(sum);
	// console.log(area);
	writeMessage("Area length is :   " + area.toFixed(2));
});

function writeMessage(msg) {
	message.innerHTML = msg;
	message.style.padding = "1rem";
	message.style.borderRadius = "1rem";
	message.style.backgroundColor = "var(--primary-color)";
	message.style.color = "white";
	message.style.textAlign = "center";
}
