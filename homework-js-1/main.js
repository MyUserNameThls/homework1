const firstName = "Николай";
const lastName = "Авдеенко";
const isStudent = Boolean(1);
const studentAge = 16;
const currentAge = 2026;
const birthYear = currentAge - studentAge;
console.log(
	`Меня зовут ${firstName} ${lastName}, мне ${studentAge} лет. Я ученик курса: ${isStudent}`,
);

let resultNumber = 123456789 + "false" + "true";
console.log(resultNumber);
