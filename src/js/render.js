import {fetchData} from "./request.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const root = document.querySelector(".sub-root");
export const clearContainer = () => {
	root.innerHTML = '';
}
export const render = async () => {
	try {
		const response = await fetchData();
		const data = response.data.results;
		const markup = data.map(d => (`<div class="wrapper">
		<img src="${d.picture.large}" alt="avatar" class="avatar" width="100" height="100">
		<ul class="list">
		<li class="fname">Имя: ${d.name.first}</li>
		<li class="lname">Фамилия: ${d.name.last}</li>
		<li class="gender">Пол: ${d.gender}</li>
		<li class="email">Email: ${d.email}</li>
		<li class="dob">Дата рождения: ${new Date(d.dob.date).toLocaleDateString()}</li>
		<li class="age">Возраст: ${d.dob.age} </li>
	</ul>
	</div>
`
		)).join('');
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
