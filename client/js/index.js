import Inputmask from "inputmask";
import 'scss/style.scss'

const phoneInput = document.querySelector(".input_phone");
Inputmask("+375-99-999-99-99").mask(phoneInput);

const button = document.querySelector(".form__button");
button.addEventListener('click', () => document.querySelectorAll('.input').forEach(item => console.log(item.value)))