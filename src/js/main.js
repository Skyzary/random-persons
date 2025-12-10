import {render} from "./render.js";
let quantity = 4
for (let i = 0; i < quantity; i++){
	await render()
}
const btn = document.getElementsByClassName('refresh')[0]
btn.addEventListener('click', async () => {
	location.reload()
	for (let i = 0; i < quantity; i++) {
		await render()
	}
	quantity = 0

})