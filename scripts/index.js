const inputValues = document.querySelectorAll(".input-angles");
const btnSubmit = document.querySelector(".btn-submit");
const message = document.querySelector(".message");

btnSubmit.addEventListener("click", function () {
	let sum = 0;
	for (let i = 0; i < 3; i++) {
		if (inputValues[i].value == "") {
			showMessage("can't Leave any feild empty");
			return;
		}
		sum += Number(inputValues[i].value);
		if (Number(inputValues[i].value) <= 0) {
			showMessage(
				"enter the value of Angle " + Number(i + 1) + " greater than 0"
			);
			return;
		}
	}
	if (sum == 180) {
		showMessage("Yaayyy its a triangle");
	} else {
		showMessage("Not a triagle");
	}
});

function showMessage(msg) {
	message.innerHTML = msg;
	message.style.backgroundColor = "#ef4444";
	message.style.padding = "0.5rem";
	message.style.border = "1px solid black";
	message.style.borderRadius = "0.5rem";
}
