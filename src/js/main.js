import { render, clearContainer } from "./render.js";


const loadUsers = async () => {
	       clearContainer()
			await render();
	}

await loadUsers();

const btn = document.querySelector('.refresh');
btn.addEventListener('click', loadUsers);