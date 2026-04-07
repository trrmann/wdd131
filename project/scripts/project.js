const hamButton = document.querySelector("#hamburgerMenu");
const navigation = document.querySelector(".menulist");
const menuItems = document.querySelectorAll(".menuitem");
const pageTitle = document.querySelector("h1");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        const currentActive = document.querySelector(".active");
        currentActive.classList.toggle("active");
        menuItem.classList.toggle("active");
        if (!pageTitle.textContent.includes("Site Plan")) {
            pageTitle.textContent = menuItem.textContent;        
        }
    });
});
