const modalClassesHandler = (modal, type) => {
	modal.classList[type]('modal_open')
	document.body.classList[type]('no-scroll')
}

export const openModal = (modal) => modalClassesHandler(modal, 'add')

export const closeModal = (e, modal) => {
	e.stopPropagation();
	const isModalOpen = e.target.classList.contains('modal_open')
	isModalOpen && modalClassesHandler(modal, 'remove')
}