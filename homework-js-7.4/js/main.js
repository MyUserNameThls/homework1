import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoListener } from "./dom.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
	renderTodos(todos);
	initTodoListener(todos);
});
