//1
for (i = 1; i <= 20; i++) {
	if (i % 4 !== 0) {
		continue;
	} else {
		console.log(i);
	}
}

// 2
const number = +prompt("Введите число");
let factorial = 1;
for (let j = 1; j <= number; j++) {
	factorial *= j;
}
alert(factorial);

//3

// let lineBlack = "";
// let lineWhite = "";
// let board = lineBlack + lineWhite;
// for (i = 1; i <= 5; i++) {
// 	lineBlack += "*";
// 	for (j = 1; j <= i; j++) {
// 		lineWhite += "#";
// 	}
// 	board += "\n";
// }

// if (lineBlack % 2 == 1) {
// 	console.log(lineBlack);
// } else {
// 	console.log(lineWhite);
// }
