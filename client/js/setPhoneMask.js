import Inputmask from "inputmask";

export const setPhoneMask = () => {
	const phoneInput = document.querySelector(".input_phone");
	Inputmask("+375-99-999-99-99").mask(phoneInput);
}