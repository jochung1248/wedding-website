document.addEventListener('DOMContentLoaded', function () {
	const menuButton = document.getElementById('menuButton');
	const dropdownMenu = document.getElementById('dropdownMenu');
  
	menuButton.addEventListener('click', function () {
	  if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
		dropdownMenu.style.display = 'block';
		menuButton.classList.add('active');
	  } else {
		dropdownMenu.style.display = 'none';
		menuButton.classList.remove('active');
	  }
	});
  
	// Smooth scrolling for navigation links
	document.querySelectorAll('.nav-link').forEach(link => {
	  link.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		const targetSection = document.getElementById(targetId);
  
		if (targetSection) {
		  window.scrollTo({
			top: targetSection.offsetTop - document.querySelector('.main-nav').offsetHeight,
			behavior: 'smooth',
		  });
		}
	  });
	});
  });