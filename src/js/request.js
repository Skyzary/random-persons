import axios from "axios";
const baseURL = 'https://randomuser.me/api/'

export async function fetchData(results = 1) {
	try {
		// Используем параметр API для получения нескольких пользователей сразу
		return await axios.get(`${baseURL}?results=${results}`);

	}
	catch (error) {
		console.log(error);
		console.log('error')
	}
}
