import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosFromLocalStorage } from "./storage.js";

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

const createTodoElement = (todo) => {
	const todoElement = document.createElement("li");
	todoElement.classList.add("todo");
	todoElement.dataset.id = todo[todoKeys.id];
	todoElement.innerHTML = `
   <div class="todo-text">${todo[todoKeys.text]}</div>
   <div class="todo-actions">
   	<button class="button-complete button">&#10004;</button>
   	<button class="button-delete button">&#10006;</button>
   </div>
  `;
	// todosElement.append(todoElement); //можно просто вернуть return
	return todoElement;
};

export const renderTodos = (todos) => {
	todosElement.innerHTML = "";
	todos.forEach((todo) => {
		const todoElement = createTodoElement(todo);
		if (todo[todoKeys.is_completed]) {
			todoElement.classList.add("completed");
		}
		todosElement.prepend(todoElement);
	});
};

const handleCreateTodo = (todos, text) => {
	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo);
	setTodosFromLocalStorage(todos);
	todosElement.prepend(todoElement);
};

export const initTodoListener = (todos) => {
	formElement.addEventListener("submit", (event) => {
		event.preventDefault();

		const text = inputElement.value.trim();
		// if (text == "") {
		// 	return;
		// } //более длинная запись

		if (!text) return;

		handleCreateTodo(todos, text);
		inputElement.value = "";
	});

	todosElement.addEventListener("click", ({ target }) => {
		const todo = target.closest(".todo");
		if (!todo) return;

		const todoId = Number(todo.dataset.id);

		if (target.matches(".button-complete")) {
			completeTodoById(todos, todoId);
			setTodosFromLocalStorage(todos);
			todo.classList.toggle("completed");
		}

		if (target.matches(".button-delete")) {
			deleteTodoById(todos, todoId);
			setTodosFromLocalStorage(todos);
			todo.remove();
		}
	});
};
