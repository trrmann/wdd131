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
        pageTitle.textContent = menuItem.textContent;
    });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    // Add more temple objects here...
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York",
    dedicated: "2000, April, 6",
    area: 10800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-new-york-mormon-temple-882900-high-res-print.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Columbia SC Temple",
    location: "Hopkins, South Carolina",
    dedicated: "1999, December, 5",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x640/columbia-south-carolina-temple-1468854-wallpaper.jpg"
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "Sandy Springs, Georgia",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
  }
];

const main = document.querySelector("main");

function templecard(temple) {
    const figure = document.createElement("figure");
    figure.classList.add("card");
    const caption = document.createElement("figcaption");
    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    caption.appendChild(name);
    const location = document.createElement("p");
    const locationlabel = document.createElement("span");
    const locationvalue = document.createElement("span");
    locationlabel.textContent = "Location: ";
    locationvalue.textContent = temple.location;
    location.appendChild(locationlabel);
    location.appendChild(locationvalue);
    caption.appendChild(location);
    const dedication = document.createElement("p");
    const dedicationlabel = document.createElement("span");
    const dedicationvalue = document.createElement("span");
    dedicationlabel.textContent = "Dedication: ";
    dedicationvalue.textContent = temple.dedicated;
    dedication.appendChild(dedicationlabel);
    dedication.appendChild(dedicationvalue);
    caption.appendChild(dedication);
    const area = document.createElement("p");
    const arealabel = document.createElement("span");
    const areavalue = document.createElement("span");
    arealabel.textContent = "Size: ";
    areavalue.textContent = temple.area;
    area.appendChild(arealabel);
    area.appendChild(areavalue);
    caption.appendChild(area);
    figure.appendChild(caption);
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `Image of ${temple.templeName}`;
    image.loading = "lazy";
    /*image.height = "250";
    image.width = "400";/**/
    figure.appendChild(image);
    return figure;
}

temples.forEach(temple => { 
    main.appendChild(templecard(temple));
});

const menu = document.querySelector(".menulist");
const menuitems = menu.querySelectorAll(".menuitem");
function menuitemclicked(event) {
  const clickedmenuitem = event.target;
  main.innerHTML = `<h1>${clickedmenuitem.textContent}</h1>`;
  switch (clickedmenuitem.textContent) {
    case "Home":
      temples.forEach(temple => { 
        main.appendChild(templecard(temple));
      });
      break;
    case "Old":
      temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900).forEach(temple => { 
        main.appendChild(templecard(temple));
      });
      break;
    case "New":
      temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000).forEach(temple => { 
        main.appendChild(templecard(temple));
      });
      break;
    case "Large":
      temples.filter(temple => Number(temple.area) > 90000).forEach(temple => { 
        main.appendChild(templecard(temple));
      });
      break;
    case "Small":
      temples.filter(temple => Number(temple.area) < 10000).forEach(temple => { 
        main.appendChild(templecard(temple));
      });
      break;
  }
}
menuitems.forEach(menuitem => menuitem.addEventListener("click", menuitemclicked));