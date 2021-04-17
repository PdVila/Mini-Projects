const panels = document.querySelectorAll('.panel'); // Puts class into all arrays
console.log(panels); //All of the divs will be in the array

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panel.forEach((panel) => {
		panels.classList.remove('active');
	});
}
