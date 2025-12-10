import axios from "axios";
const baseURL = 'https://randomuser.me/api/'

export async function fetchData() {
	try {
		return  await axios.get(baseURL)

	}
	catch (error) {
		console.log(error);
		console.log('error')
	}
}


