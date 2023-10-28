import { sendRequest } from "./sendRequest"

const isFormValid = (inputs) => ![...inputs].every(input => input.checkValidity())

const generateParams = (inputs) => {
	return [...inputs].reduce((acc, input) => [
		...acc, 
		`${input.placeholder.toLowerCase()}=${input.value}`
	], []).join('&')
}

export const onButtonClick = (e) => {
	e.preventDefault()
	const inputs = document.querySelectorAll('.form .input')
	if(isFormValid(inputs)) return alert('Form is invalid')
	const params = generateParams(inputs)
	sendRequest(params)
}