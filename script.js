let  menu = document.getElementById('menu-toggle');
let  menuList = document.getElementById('menu-list');
let  body = document.getElementById('body-container');

let allElements = [menu, menuList, body];

menu.onclick = function() {
	allElements.forEach(function(el) {
		el.classList.toggle('menu-active');
	});
}
