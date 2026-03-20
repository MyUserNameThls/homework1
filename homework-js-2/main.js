const NUMBER = +prompt("Введите число", 0);
if (NUMBER % 2 == 0) {
	alert("Число четное");
} else {
	alert("Число не четное");
}

const AGE = 18;
const DISCOUNT =
	!isNaN(AGE) && AGE <= 65 ? (AGE < 18 && AGE <= 65 ? 10 : 20) : 30;
console.log(`Скидка ${DISCOUNT}%`);

switch (!isNaN(AGE)) {
	case AGE < 18:
		console.log("Скидка 10%");
		break;
	case AGE <= 65:
		console.log("Скидка 20%");
		break;
	default:
		console.log("Скидка 30%");
}

// const PROMT = promt("Введите должность", 0);
// const $PROMT = +promt("Введите пароль", 0);
// let USER = "admin";
// let PASSWORD = 123456;
// if ((USER == "admin" || USER == "user") && PASSWORD == 123456) {
// 	alert("Доступ разрешен");
// } else {
// 	alert("Доступ запрещен");
// }

const username = prompt("Введите Должность", 0);
const password = prompt("Введите пароль", 0);
if ((username == "user" || username == "admin") && password == "123456") {
	alert("Доступ разрешен");
} else {
	alert("Доступ запрещен");
}
