const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const menuItems = document.querySelectorAll("a");
const pageTitle = document.querySelector("h2");

hamButton.textContent = "";
hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        const currentActive = document.querySelector(".active");
        currentActive.classList.toggle("active");
        menuItem.classList.toggle("active");
        pageTitle.textContent = menuItem.textContent;
    });
});
