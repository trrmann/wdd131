const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("#addbutton");
const listElement = document.querySelector("#list");
const books = new Set(["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon", "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"]);
const chapters = {
    "1 Nephi": 22,
    "2 Nephi": 33,
    "Jacob": 7,
    "Enos": 1,
    "Jarom": 1,
    "Omni": 1,
    "Words of Mormon": 1,
    "Mosiah": 29,
    "Alma": 63,
    "Helaman": 16,
    "3 Nephi": 30,
    "4 Nephi": 1,
    "Mormon": 9,
    "Ether": 15,
    "Moroni": 10
};
const closeText = "❌";
const registry = new Set();

function bookChapterValid(bookChapter) {
    let book = "";
    let chapter = 0;
    if (bookChapter.split(" ").length > 4) {
        return 1;
    } else if (bookChapter.split(" ").length === 4) {
      book = `${bookChapter.split(" ")[0].toLowerCase()} ${bookChapter.split(" ")[1].toLowerCase()} ${bookChapter.split(" ")[2].toLowerCase()}`;
      chapter = Number(bookChapter.split(" ")[3]);
    } else if (bookChapter.split(" ").length === 3) {
      book = `${bookChapter.split(" ")[0].toLowerCase()} ${bookChapter.split(" ")[1].toLowerCase()}`;
      chapter = Number(bookChapter.split(" ")[2]);        
    } else {
      book = bookChapter.split(" ")[0].toLowerCase();
      chapter = Number(bookChapter.split(" ")[1]);
    }
    if ([...books].filter(validBook => { return validBook.toLowerCase() === book }).length < 1) {
        return 2;
    }
    if (Number.isNaN(chapter)) {
        return 3;
    }
    book = [...books].filter(validBook => { return validBook.toLowerCase() === book });
    if (chapter > chapters[book]) {
        return 4;
    }
    if (chapter < 1) {
        return 5;
    }
    return 0;
}
function bookChapterValidate(bookChapter) {
    if (bookChapterValid(bookChapter)===0) {
        let book = "";
        let chapter = 0;
        if (bookChapter.split(" ").length === 4) {
            book = `${bookChapter.split(" ")[0].toLowerCase()} ${bookChapter.split(" ")[1].toLowerCase()} ${bookChapter.split(" ")[2].toLowerCase()}`;
            chapter = Number(bookChapter.split(" ")[3]);
        } else if (bookChapter.split(" ").length === 3) {
            book = `${bookChapter.split(" ")[0].toLowerCase()} ${bookChapter.split(" ")[1].toLowerCase()}`;
            chapter = Number(bookChapter.split(" ")[2]);        
        } else {
            book = bookChapter.split(" ")[0].toLowerCase();
            chapter = Number(bookChapter.split(" ")[1]);
        }
        book = [...books].filter(validBook => { return validBook.toLowerCase() === book });
        return `${book} ${chapter}`;        
    } else {
        return "";
    }
}
function sendUserMessage(message) {
    alert(message);
}
function removeChapter(event, listItemID) {
    const listItem = document.getElementById(listItemID);
    listElement.removeChild(listItem);
    registry.delete(listItem.textContent.replace(closeText,"").toLowerCase());
    if (buttonElement.classList.contains("hidden")) {
        buttonElement.classList.remove("hidden");
    }
    inputElement.focus();
}
function addChapter(event) {
    if (inputElement.value.trim() !== "" && bookChapterValid(inputElement.value.trim()) === 0 && !registry.has(inputElement.value.trim().toLowerCase())) {
        inputElement.value = bookChapterValidate(inputElement.value.trim());
        registry.add(inputElement.value.trim().toLowerCase());
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        listItem.id = "item-" + String(registry.size);
        deleteButton.id = "close-button-" + String(registry.size);
        deleteButton.addEventListener("click", (event) => removeChapter(event, listItem.id));
        listItem.textContent = inputElement.value;
        inputElement.value = "";
        deleteButton.textContent = closeText;
        deleteButton.ariaLabel = "Close";
        listItem.append(deleteButton);
        listElement.appendChild(listItem);
        if (registry.size >= 10) {
            buttonElement.classList.add("hidden");
        }
    } else if (inputElement.value.trim() === "") {
        sendUserMessage("Please provide a Book and Chapter.");
    } else if (registry.has(inputElement.value.trim().toLowerCase())) {
        sendUserMessage("You already have that one, please provide a different Book and Chapter.");
    } else {
        switch (bookChapterValid(inputElement.value.trim())) {
            case 1:
                sendUserMessage("Invalid Entry of too many words, Please provide a Book and Chapter.");
                break;
            case 2:
                sendUserMessage("Invalid Book, Please provide a Book and Chapter from the Book of Mormon.");
                break;
            case 3:
                sendUserMessage("Invalid Chapter, Please provide a Book and Chapter.");
                break;
            case 4:
                sendUserMessage("Invalid Chapter as that Book does not have that many Chapters, Please provide a Book and Chapter.");
                break;
            case 5:
                sendUserMessage("Invalid Chapter as Chapter can't be 0, Please provide a Book and Chapter.");
                break;
            default:
                sendUserMessage("Unknown Error.");
        }
    }
    inputElement.focus();
}
buttonElement.addEventListener("click", (event) => addChapter(event));
inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonElement.click();        
    }
});

/*

Validate input — Only accept Book of Mormon books -- completed
Limit to 10 entries — Enforce the "Top 10" constraint -- completed
Prevent duplicates — Don't allow the same chapter to be added more than once -- completed
Better UI feedback — Show warnings/confirmations -- completed
Improve accessibility — Ensure the application is usable with screen readers and keyboard navigation -- added press enter for click
Format input — Standardize the format of the input for consistency -- completed

*/
