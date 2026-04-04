//1
const person = {
	name: "Kolya",
	age: 16,
	Programmer: true,
};

console.log(person);

//2
const EMPTY = {};
const isEmpty = (object) => {
	for (const productKey in object) {
		return false;
	}

	return true;
};
console.log(isEmpty(EMPTY));

//3
const TASK = {
	title: "Бизнес",
	description: "Описание бизнеса",
	isCompleted: false,
};

const TASK2 = {
	futureOfBussiness: true,
};

const cloneAndModify = (object, modifications) => {
	return { ...object, ...modifications };
};

const taskAll = cloneAndModify(TASK, TASK2);

for (const productKey in taskAll) {
	// console.log(taskAll[productKey]);
	console.log(`${productKey}:`, taskAll[productKey]);
}

//4
const callAllMethods = (object) => {
	for (const productKey in object) {
		if (typeof object[productKey] === "function") {
			object[productKey]();
		}
	}
};

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};
callAllMethods(myObject);
