const now = new Date();
document.getElementById("currentyear").textContent = `\u00A9${now.getFullYear()} - `;
document.getElementById("lastModified").textContent = `Last Modified:  ${document.lastModified}`;