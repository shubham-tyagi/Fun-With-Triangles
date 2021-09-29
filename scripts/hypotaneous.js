const inputValues = document.querySelectorAll(".input-values");
const btnSubmit = document.querySelector(".btn-submit");
const message = document.querySelector(".message");
btnSubmit.addEventListener("click", function () {
	if (inputValues[0].value == "" || inputValues[1].value == "") {
		writeMessage("Don't leave any input empty.");
		return;
	}
	let a = Number(inputValues[0].value);
	let b = Number(inputValues[1].value);
	if (a <= 0 || b <= 0) {
		writeMessage("All the values should be greater than 0.");
		return;
	}
	let c = Math.pow(a, 2) + Math.pow(b, 2);
	// console.log(sum);
	c = Math.pow(c, 0.5);
	writeMessage("Hypotaneous length is :   " + c.toFixed(2));
});

function writeMessage(msg) {
	message.innerHTML = msg;
	message.style.padding = "1rem";
	message.style.borderRadius = "1rem";
	message.style.backgroundColor = "var(--primary-color)";
	message.style.color = "white";
	message.style.textAlign = "center";
}
