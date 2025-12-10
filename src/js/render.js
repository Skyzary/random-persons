import {fetchData} from "./request.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const root = document.querySelector(".sub-root");
const btn = document.querySelector('.refresh');

export const clearContainer = () => {
	root.innerHTML = '';
};

export const render = async () => {
	try {
		const response = await fetchData();
		const data = response.data.results[0];
		const markup = `<div class="wrapper">
		<img src="${data.picture.large}" alt="avatar" class="avatar" width="100" height="100">
		<ul class="list">
		<li class="fname">Имя: ${data.name.first}</li>
		<li class="lname">Фамилия: ${data.name.last}</li>
		<li class="gender">Пол: ${data.gender}</li>
		<li class="email">Email: ${data.email}</li>
		<li class="dob">Дата рождения: ${new Date(data.dob.date).toLocaleDateString()}</li>
		<li class="age">Возраст: ${data.dob.age} </li>
	</ul>
	</div>
`
		root.insertAdjacentHTML("beforeend", markup);
	} catch (error) {
		console.log(error);
		root.innerHTML = '';
		iziToast.error({
			title: 'request error',
			message: 'something went wrong',
			position: 'topRight',
			closeOnEscape: true,

		})

	}
}
