const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const productNameElement = document.querySelector("#product-name");
if (productNameElement !== null) {
    products.forEach(product => {
        productNameElement.add(new Option(product.name, product.id));
    });
}
const reviewCountElement = document.querySelector(".count");
if (reviewCountElement !== null) {
    let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
    numReviews++;
    reviewCountElement.textContent = numReviews;
    localStorage.setItem("numReviews", numReviews);
}
