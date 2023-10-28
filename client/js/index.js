import 'scss/style.scss'
import { setPhoneMask } from './setPhoneMask';
import { closeModal, openModal } from './modal';
import { onButtonClick } from './form';

setPhoneMask()

const button = document.querySelector(".form__button");
button.addEventListener('click', onButtonClick)

const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.button_open');

modalButton.addEventListener('click', () => openModal(modal))
modal.addEventListener('click', (e) => closeModal(e, modal))
