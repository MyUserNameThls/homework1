const riskSlider = document.getElementById("risk-slider");
const yieldPercentage = document.getElementById("yield-percentage");
const riskLevel = document.getElementById("risk-level");

riskSlider.addEventListener("input", function () {
	const value = parseInt(this.value);
	let riskText = "Низкий риск";
	let yieldPercent = "до 5%";

	if (value > 30 && value <= 60) {
		riskText = "Средний риск";
		yieldPercent = "до 7%";
	} else if (value > 60) {
		riskText = "Высокий риск";
		yieldPercent = "до 10%";
	}

	riskLevel.textContent = riskText;
	yieldPercentage.textContent = yieldPercent;
});
