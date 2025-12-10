import { render, clearContainer } from "./render.js";

const quantity = 4;

const loadUsers = async () => {
	clearContainer(); // Очищаем старых пользователей перед загрузкой новых
	for (let i = 0; i < quantity; i++) {
		await render();
	}
};

await loadUsers();

const btn = document.querySelector('.refresh');
btn.addEventListener('click', loadUsers);