// Устанавливаем дату окончания отсчёта (например, 31 декабря 2024 года, 23:59:59)
const countDownDate = new Date("2026-12-31T23:59:59").getTime();

// Обновляем счётчик каждую секунду
const timer = setInterval(function () {
	// Получаем текущую дату и время
	const now = new Date().getTime();

	// Находим разницу между текущим временем и датой окончания
	const distance = countDownDate - now;

	// Вычисляем дни, часы, минуты и секунды
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Отображаем значения на странице (с добавлением нуля для однозначных чисел)
	document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
	document.getElementById("hours").innerHTML = hours
		.toString()
		.padStart(2, "0");
	document.getElementById("minutes").innerHTML = minutes
		.toString()
		.padStart(2, "0");
	document.getElementById("seconds").innerHTML = seconds
		.toString()
		.padStart(2, "0");

	// Если отсчёт завершён, отображаем сообщение
	if (distance < 0) {
		clearInterval(timer);
		document.querySelector(".countdown-container").innerHTML = "Время истекло!";
	}
}, 1000);
