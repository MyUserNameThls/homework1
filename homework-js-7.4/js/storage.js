export const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosFromLocalStorage = (todos) => {
	return localStorage.setItem("todos", JSON.stringify(todos));
};
