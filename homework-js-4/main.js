function calculateFinalPrice(baseCost, discount, tax) {
	const price = baseCost - discount;
	const priceTax = (baseCost - discount) * tax;
	const finalPrice = price + priceTax;
	return finalPrice;
}
console.log(calculateFinalPrice(100, 10, 0.2));

function checkAccess(userName, passWord) {
	if (userName === "admin" && passWord === "123456") {
		return "Доступ разрешен";
	} else {
		return "Доступ запрещен";
	}
}
console.log(checkAccess("admin", "123456"));

function getTimeOfDay(time) {
	if (time >= 0 && time <= 5) {
		return "Ночь";
	} else if (time >= 6 && time <= 11) {
		return "Утро";
	} else if (time >= 12 && time <= 17) {
		return "День";
	} else if (time >= 18 && time <= 23) {
		return "Вечер";
	} else {
		return "Некорректное время";
	}
	return time;
}
console.log(getTimeOfDay(13));

function findFirstEven(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Четных чисел нет";
}
console.log(findFirstEven(21, 22));

function getOdd(getStart, getEnd) {
	for (let i = getStart; i <= getEnd; i++) {
		if (i % 2 !== 0) {
			return i;
		}
	}
	return "Нечетных чисел нет!";
}
console.log(getOdd(8, 11));

//для закрепления решил сделать допом с нечетными числами
