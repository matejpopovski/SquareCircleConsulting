let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', (event) => {
		event.currentTarget.classList.toggle('active');
		let panel = event.currentTarget.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}
