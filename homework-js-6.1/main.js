"use strict";
//1
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];
users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

//2
function getUserAverageAge(users) {
	let sumAge = 0;
	for (let i = 0; i < users.length; i++) {
		sumAge += users[i].age;
	}
	sumAge = sumAge / users.length;
	return sumAge;
}
console.log(getUserAverageAge(users));

//3
const getAllAdmins = (users) => {
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin == true) {
			console.log(users[i]);
		}
	}
};
getAllAdmins(users);

//4
const arr = [1, 2, 3, 4, 5];

function first(arr, n) {
	if (n == 0) {
		console.log([]);
	} else if (n == undefined) {
		console.log(arr);
	} else if (n > arr.length) {
		console.log(`Не может быть больше длины массива: ${arr.length} `);
	} else {
		console.log(arr.slice(0, n));
	}
}
first(arr, 5);
