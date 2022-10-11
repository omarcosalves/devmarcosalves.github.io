const header = document.querySelector("hearder");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);
});