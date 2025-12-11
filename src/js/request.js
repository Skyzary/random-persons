import axios from "axios";
const url= 'https://randomuser.me/api/'



export async function fetchData() {
	try {
		return  await axios.get(url, {params: {results: 4}})

	}
	catch (error) {
		console.log(error);
		console.log('error')
	}
}


