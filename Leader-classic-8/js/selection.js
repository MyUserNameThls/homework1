// const riskSlider = document.getElementById("risk-slider");
// const yieldPercentage = document.getElementById("yield-percentage");
// const riskLevel = document.getElementById("risk-level");

// riskSlider.addEventListener("input", function () {
// 	const value = parseInt(this.value);
// 	let riskText = "Низкий риск";
// 	let yieldPercent = "до 5%";

// 	if (value > 30 && value <= 60) {
// 		riskText = "Средний риск";
// 		yieldPercent = "до 7%";
// 	} else if (value > 60) {
// 		riskText = "Высокий риск";
// 		yieldPercent = "до 10%";
// 	}

// 	riskLevel.textContent = riskText;
// 	yieldPercentage.textContent = yieldPercent;
// });

const riskSlider = document.querySelector("#risk-slider");
const num = document.querySelector("#yield-percentage");
const text = document.querySelector("#risk-level");
const progress = document.querySelector(".progress");

export const riskLvl = () => {
	riskSlider.addEventListener("input", ({ target }) => {
		let value = Number(target.value);
		let numValue = "до 0";
		let textValue = "Нет риска";

		if (value < 10) {
			numValue = "до 1%";
			textValue = "Низкий риск";
		} else if (value >= 10 && value < 20) {
			numValue = "до 2%";
			textValue = "Низкий риск";
		} else if (value >= 20 && value < 30) {
			numValue = "до 3%";
			textValue = "Низкий риск";
		} else if (value >= 30 && value < 40) {
			numValue = "до 4%";
			textValue = "Низкий риск";
		} else if (value >= 40 && value < 50) {
			numValue = "до 5%";
			textValue = "Средний риск";
		} else if (value >= 50 && value < 60) {
			numValue = "до 6%";
			textValue = "Средний риск";
		} else if (value >= 60 && value < 70) {
			numValue = "до 7%";
			textValue = "Средний риск";
		} else if (value >= 70 && value < 80) {
			numValue = "до 8%";
			textValue = "Высокий риск";
		} else if (value >= 80 && value < 90) {
			numValue = "до 9%";
			textValue = "Высокий риск";
		} else if (value >= 90) {
			numValue = "до 10%";
			textValue = "Высокий риск";
		}
		num.textContent = numValue;
		text.textContent = textValue;

		// progress.addEventListener("input", ({ target }) => {
		// 	let progressValue = Number(target.value);
		// 	progressValue = value;
		// });
	});
};

const length = progress.getTotalLength();

progress.style.strokeDasharray = length;

progress.style.strokeDashoffset = length;

export function setProgress(value) {
	const normalized = value / 100;
	progress.style.strokeDashoffset = length * (1 - normalized);
}

riskSlider.addEventListener("input", (e) => {
	setProgress(Number(e.target.value));
});

setProgress(Number(riskSlider.value));
