const now = new Date();
document.getElementById("copyright").textContent = '\u00A9';
document.getElementById("currentyear").textContent = `${now.getFullYear()} - `;
document.getElementById("lastModified").textContent = `Last Modified:  ${document.lastModified}`;