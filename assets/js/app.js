const cardBtn = document.querySelectorAll('.card button');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalBody = document.querySelector('.modal-body');

function handleCardButtonClick(e) {
	const button = e.currentTarget;
	const card = button.closest('.card');
	//Grab the image src 
	const imgSrc = card.querySelector('img').src;
	const desc = card.dataset.description;

	// Populate the modal with the new info 
	modalBody.innerHTML = `
	<img src="${imgSrc.replace('400', '600')}" alt="${desc}">
	<p class="m-0">${desc}</p>
	`;

	//Show the modal
	modalWrapper.classList.add('open');
}

cardBtn.forEach((button) => button.addEventListener('click', handleCardButtonClick));


// Close the modal 
function closeModal() {
	modalWrapper.classList.remove('open');
}

modalWrapper.addEventListener('click', function(e) {
	const isOutside = !e.target.closest('.modal-body');
	if (isOutside) {
		closeModal();
	}
});

window.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		closeModal();
	}
})
