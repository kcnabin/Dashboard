const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".site-logo > img");
const hamMenu = document.querySelector(".hamMenu");

function hideSideBar() {
	document.querySelector(".project-dashboard").style.gridTemplateAreas = '"header header" "projects announce"';
	document.querySelector(".project-dashboard").style.gridTemplateColumns = "2fr 1fr";
	sideBar.style.display = "none";
	hamMenu.style.display = "block";
}

function showSideBar() {
	document.querySelector(".project-dashboard").style.gridTemplateAreas = 
										'"sidebar header header" "sidebar projects announce"';
	document.querySelector(".project-dashboard").style.gridTemplateColumns = "170px 2fr 1fr";
	sideBar.style.display = "block";
	hamMenu.style.display = "none";
}

menu.addEventListener("click", hideSideBar);
hamMenu.addEventListener("click", showSideBar);