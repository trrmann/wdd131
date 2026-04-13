const hamButton = document.querySelector("#hamburgerMenu");
const navigation = document.querySelector(".menulist");
const menuItems = document.querySelectorAll(".menuitem");
const pageTitle = document.querySelector("h1");
const substitutionInputFieldIDs = ["p01","p02","p03","p04","p05","p06","p07","p08","p09","p10","p11","p12","p13","p14","p15","p16","p17","p18","p19","p20","p21","p22","p23","p24","p25","p26"];
const playfairInputFieldIDs = ["columns","rows","row1","row2","row3","row4","row5"];
const keyIDs = {
    "load": {
        "scytale": "load-scytale-key-name",
        "substitution": "load-substitution-key-name",
        "playfair": "load-playfair-key-name"
    },
    "save": {
        "scytale": "save-scytale-key-name",
        "substitution": "save-substitution-key-name",
        "playfair": "save-playfair-key-name"
    },
    "delete": {
        "scytale": "delete-scytale-key-name",
        "substitution": "delete-substitution-key-name",
        "playfair": "delete-playfair-key-name"
    },
    "input": {
        "scytale": "scytale-key-name",
        "substitution": "substitution-key-name",
        "playfair": "playfair-key-name"
    }
}
for (const elementType in keyIDs) {
    switch(elementType) {
        case "load":
            for (const keyType in keyIDs[elementType]) {
                switch (keyType) {
                    case "scytale":
                        const loadScytaleButton = document.getElementById(keyIDs[elementType][keyType]);
                        loadScytaleButton.addEventListener('click', (event) => {
                            let scytaleKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (scytaleKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                const scytaleKeys = JSON.parse(localStorage.getItem('scytaleKeys')||"{}");
                                if (Object.hasOwn(scytaleKeys, scytaleKeyName)) {
                                    document.getElementById("diameter").value = scytaleKeys[scytaleKeyName]["diameter"];
                                } else {
                                    alert("That key name does not exist, please provide a key name that exists in the key name field.");
                                }
                            }
                        });
                        break;
                    case "substitution":
                        const loadSubstitutionButton = document.getElementById(keyIDs[elementType][keyType]);
                        loadSubstitutionButton.addEventListener('click', (event) => {
                            let substitutionKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (substitutionKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                const substitutionKeys = JSON.parse(localStorage.getItem('substitutionKeys')||"{}");
                                if (Object.hasOwn(substitutionKeys, substitutionKeyName)) {
                                    document.getElementById("p01").value = substitutionKeys[substitutionKeyName]["p01"];
                                    document.getElementById("p02").value = substitutionKeys[substitutionKeyName]["p02"];
                                    document.getElementById("p03").value = substitutionKeys[substitutionKeyName]["p03"];
                                    document.getElementById("p04").value = substitutionKeys[substitutionKeyName]["p04"];
                                    document.getElementById("p05").value = substitutionKeys[substitutionKeyName]["p05"];
                                    document.getElementById("p06").value = substitutionKeys[substitutionKeyName]["p06"];
                                    document.getElementById("p07").value = substitutionKeys[substitutionKeyName]["p07"];
                                    document.getElementById("p08").value = substitutionKeys[substitutionKeyName]["p08"];
                                    document.getElementById("p09").value = substitutionKeys[substitutionKeyName]["p09"];
                                    document.getElementById("p10").value = substitutionKeys[substitutionKeyName]["p10"];
                                    document.getElementById("p11").value = substitutionKeys[substitutionKeyName]["p11"];
                                    document.getElementById("p12").value = substitutionKeys[substitutionKeyName]["p12"];
                                    document.getElementById("p13").value = substitutionKeys[substitutionKeyName]["p13"];
                                    document.getElementById("p14").value = substitutionKeys[substitutionKeyName]["p14"];
                                    document.getElementById("p15").value = substitutionKeys[substitutionKeyName]["p15"];
                                    document.getElementById("p16").value = substitutionKeys[substitutionKeyName]["p16"];
                                    document.getElementById("p17").value = substitutionKeys[substitutionKeyName]["p17"];
                                    document.getElementById("p18").value = substitutionKeys[substitutionKeyName]["p18"];
                                    document.getElementById("p19").value = substitutionKeys[substitutionKeyName]["p19"];
                                    document.getElementById("p20").value = substitutionKeys[substitutionKeyName]["p20"];
                                    document.getElementById("p21").value = substitutionKeys[substitutionKeyName]["p21"];
                                    document.getElementById("p22").value = substitutionKeys[substitutionKeyName]["p22"];
                                    document.getElementById("p23").value = substitutionKeys[substitutionKeyName]["p23"];
                                    document.getElementById("p24").value = substitutionKeys[substitutionKeyName]["p24"];
                                    document.getElementById("p25").value = substitutionKeys[substitutionKeyName]["p25"];
                                    document.getElementById("p26").value = substitutionKeys[substitutionKeyName]["p26"];
                                } else {
                                    alert("That key name does not exist, please provide a key name that exists in the key name field.");
                                }
                            }
                        });
                        break;
                    default:
                        const loadPlayfairButton = document.getElementById(keyIDs[elementType][keyType]);
                        loadPlayfairButton.addEventListener('click', (event) => {
                            let playfairKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (playfairKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                const playfairKeys = JSON.parse(localStorage.getItem('playfairKeys')||"{}");
                                if (Object.hasOwn(playfairKeys, playfairKeyName)) {
                                    document.getElementById("columns").value = playfairKeys[playfairKeyName]["columns"];
                                    document.getElementById("rows").value = playfairKeys[playfairKeyName]["rows"];
                                    document.getElementById("row1").value = playfairKeys[playfairKeyName]["row1"];
                                    document.getElementById("row2").value = playfairKeys[playfairKeyName]["row2"];
                                    document.getElementById("row3").value = playfairKeys[playfairKeyName]["row3"];
                                    document.getElementById("row4").value = playfairKeys[playfairKeyName]["row4"];
                                    document.getElementById("row5").value = playfairKeys[playfairKeyName]["row5"];
                                } else {
                                    alert("That key name does not exist, please provide a key name that exists in the key name field.");
                                }
                            }
                        });
                };     
            };
            break;
        case "save":
            for (const keyType in keyIDs[elementType]) {
                switch (keyType) {
                    case "scytale":
                        const saveScytaleButton = document.getElementById(keyIDs[elementType][keyType]);
                        saveScytaleButton.addEventListener('click', (event) => {
                            let scytaleKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (scytaleKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                const scytaleKeys = JSON.parse(localStorage.getItem('scytaleKeys')||"{}");
                                if (Object.hasOwn(scytaleKeys, scytaleKeyName)) {
                                    let choice = confirm("Key name already exists, overwrite?");
                                    if (choice) {
                                        scytaleKeys[scytaleKeyName] = {
                                            "diameter": `${document.getElementById("diameter").value}`
                                        };                                    
                                    }
                                } else {
                                    scytaleKeys[scytaleKeyName] = {
                                        "diameter": `${document.getElementById("diameter").value}`
                                    };
                                }
                                localStorage.setItem('scytaleKeys', JSON.stringify(scytaleKeys));
                            }
                        });
                        break;
                    case "substitution":
                        const saveSubstitutionButton = document.getElementById(keyIDs[elementType][keyType]);
                        saveSubstitutionButton.addEventListener('click', (event) => {
                            let substitutionKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (substitutionKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                const substitutionKeys = JSON.parse(localStorage.getItem('substitutionKeys')||"{}");
                                if (Object.hasOwn(substitutionKeys, substitutionKeyName)) {
                                    let choice = confirm("Key name already exists, overwrite?");
                                    if (choice) {
                                        substitutionKeys[substitutionKeyName] = {
                                            "p01": `${document.getElementById("p01").value}`,
                                            "p02": `${document.getElementById("p02").value}`,
                                            "p03": `${document.getElementById("p03").value}`,
                                            "p04": `${document.getElementById("p04").value}`,
                                            "p05": `${document.getElementById("p05").value}`,
                                            "p06": `${document.getElementById("p06").value}`,
                                            "p07": `${document.getElementById("p07").value}`,
                                            "p08": `${document.getElementById("p08").value}`,
                                            "p09": `${document.getElementById("p09").value}`,
                                            "p10": `${document.getElementById("p10").value}`,
                                            "p11": `${document.getElementById("p11").value}`,
                                            "p12": `${document.getElementById("p12").value}`,
                                            "p13": `${document.getElementById("p13").value}`,
                                            "p14": `${document.getElementById("p14").value}`,
                                            "p15": `${document.getElementById("p15").value}`,
                                            "p16": `${document.getElementById("p16").value}`,
                                            "p17": `${document.getElementById("p17").value}`,
                                            "p18": `${document.getElementById("p18").value}`,
                                            "p19": `${document.getElementById("p19").value}`,
                                            "p20": `${document.getElementById("p20").value}`,
                                            "p21": `${document.getElementById("p21").value}`,
                                            "p22": `${document.getElementById("p22").value}`,
                                            "p23": `${document.getElementById("p23").value}`,
                                            "p24": `${document.getElementById("p24").value}`,
                                            "p25": `${document.getElementById("p25").value}`,
                                            "p26": `${document.getElementById("p26").value}`
                                        };                                    
                                    }
                                } else {
                                    substitutionKeys[substitutionKeyName] = {
                                            "p01": `${document.getElementById("p01").value}`,
                                            "p02": `${document.getElementById("p02").value}`,
                                            "p03": `${document.getElementById("p03").value}`,
                                            "p04": `${document.getElementById("p04").value}`,
                                            "p05": `${document.getElementById("p05").value}`,
                                            "p06": `${document.getElementById("p06").value}`,
                                            "p07": `${document.getElementById("p07").value}`,
                                            "p08": `${document.getElementById("p08").value}`,
                                            "p09": `${document.getElementById("p09").value}`,
                                            "p10": `${document.getElementById("p10").value}`,
                                            "p11": `${document.getElementById("p11").value}`,
                                            "p12": `${document.getElementById("p12").value}`,
                                            "p13": `${document.getElementById("p13").value}`,
                                            "p14": `${document.getElementById("p14").value}`,
                                            "p15": `${document.getElementById("p15").value}`,
                                            "p16": `${document.getElementById("p16").value}`,
                                            "p17": `${document.getElementById("p17").value}`,
                                            "p18": `${document.getElementById("p18").value}`,
                                            "p19": `${document.getElementById("p19").value}`,
                                            "p20": `${document.getElementById("p20").value}`,
                                            "p21": `${document.getElementById("p21").value}`,
                                            "p22": `${document.getElementById("p22").value}`,
                                            "p23": `${document.getElementById("p23").value}`,
                                            "p24": `${document.getElementById("p24").value}`,
                                            "p25": `${document.getElementById("p25").value}`,
                                            "p26": `${document.getElementById("p26").value}`
                                    };
                                }
                                localStorage.setItem('substitutionKeys', JSON.stringify(substitutionKeys));
                            }
                        });
                        break;
                    default:
                        const savePlayfairButton = document.getElementById(keyIDs[elementType][keyType]);
                        savePlayfairButton.addEventListener('click', (event) => {
                            let playfairKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (playfairKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                const playfairKeys = JSON.parse(localStorage.getItem('playfairKeys')||"{}");
                                if (Object.hasOwn(playfairKeys, playfairKeyName)) {
                                    let choice = confirm("Key name already exists, overwrite?");
                                    if (choice) {
                                        playfairKeys[playfairKeyName] = {
                                            "columns": `${document.getElementById("columns").value}`,
                                            "rows": `${document.getElementById("rows").value}`,
                                            "row1": `${document.getElementById("row1").value}`,
                                            "row2": `${document.getElementById("row2").value}`,
                                            "row3": `${document.getElementById("row3").value}`,
                                            "row4": `${document.getElementById("row4").value}`,
                                            "row5": `${document.getElementById("row5").value}`
                                        };                                    
                                    }
                                } else {
                                    playfairKeys[playfairKeyName] = {
                                            "columns": `${document.getElementById("columns").value}`,
                                            "rows": `${document.getElementById("rows").value}`,
                                            "row1": `${document.getElementById("row1").value}`,
                                            "row2": `${document.getElementById("row2").value}`,
                                            "row3": `${document.getElementById("row3").value}`,
                                            "row4": `${document.getElementById("row4").value}`,
                                            "row5": `${document.getElementById("row5").value}`
                                    };
                                }
                                localStorage.setItem('playfairKeys', JSON.stringify(playfairKeys));
                            }
                        });
                };
            };
            break;
        case "delete":
            for (const keyType in keyIDs[elementType]) {
                switch (keyType) {
                    case "scytale":
                        const deleteScytaleButton = document.getElementById(keyIDs[elementType][keyType]);
                        deleteScytaleButton.addEventListener('click', (event) => {
                            let scytaleKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (scytaleKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                let scytaleKeys = JSON.parse(localStorage.getItem('scytaleKeys') || "{}");
                                if (Object.hasOwn(scytaleKeys, scytaleKeyName)) {
                                    scytaleKeys = Object.fromEntries(Object.entries(scytaleKeys).filter(([key, value]) => {
                                        return key !== scytaleKeyName;
                                    }));
                                } else {
                                    alert("Key name does not exist.");
                                }
                                localStorage.setItem('scytaleKeys', JSON.stringify(scytaleKeys));
                            }
                        });
                        break;
                    case "substitution":
                        const deleteSubstitutionButton = document.getElementById(keyIDs[elementType][keyType]);
                        deleteSubstitutionButton.addEventListener('click', (event) => {
                            let substitutionKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (substitutionKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                let substitutionKeys = JSON.parse(localStorage.getItem('substitutionKeys') || "{}");
                                if (Object.hasOwn(substitutionKeys, substitutionKeyName)) {
                                    substitutionKeys = Object.fromEntries(Object.entries(substitutionKeys).filter(([key, value]) => {
                                        return key !== substitutionKeyName;
                                    }));
                                } else {
                                    alert("Key name does not exist.");
                                }
                                localStorage.setItem('substitutionKeys', JSON.stringify(substitutionKeys));
                            }
                        });
                        break;
                    default:
                        const deletePlayfairButton = document.getElementById(keyIDs[elementType][keyType]);
                        deletePlayfairButton.addEventListener('click', (event) => {
                            let playfairKeyName = document.getElementById(keyIDs["input"][keyType]).value;
                            if (playfairKeyName === "") {
                                alert("Please provide a key name in the key name field.");
                            } else {
                                let playfairKeys = JSON.parse(localStorage.getItem('playfairKeys') || "{}");
                                if (Object.hasOwn(playfairKeys, playfairKeyName)) {
                                    playfairKeys = Object.fromEntries(Object.entries(playfairKeys).filter(([key, value]) => {
                                        return key !== playfairKeyName;
                                    }));
                                } else {
                                    alert("Key name does not exist.");
                                }
                                localStorage.setItem('playfairKeys', JSON.stringify(playfairKeys));
                            }
                        });
                };
            };
            break;
        default:
            for (const keyType in keyIDs[elementType]) {
                switch (keyType) {
                    case "scytale":
                        //const scytaleKeyNameInput = document.getElementById(keyIDs[elementType][keyType]);
                        break;
                    case "substitution":
                        //const substitutionKeyNameInput = document.getElementById(keyIDs[elementType][keyType]);
                        break;
                    default:
                        //const playfairKeyNameInput = document.getElementById(keyIDs[elementType][keyType]);
                };
            };
    };
    
};

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        const currentActive = document.querySelector(".active");
        if (currentActive !== null) {
            currentActive.classList.toggle("active");        
        }
        menuItem.classList.toggle("active");
        if (!pageTitle.textContent.includes("Site Plan")) {
            pageTitle.textContent = menuItem.textContent;        
        }
    });
});

function scytaleTransformMessage(direction, key, message) {
    let rodLength = Math.ceil(message.length / key);
    let result = "";
    const temp = new Array(message.length);
    switch (direction) {
        case "Encrypt":
            message.split("").forEach((letter, index) => {
                const row = index % key;
                const col = Math.floor(index / key);
                const targetIndex = row * rodLength + col;
                if (targetIndex < message.length) {
                    temp[targetIndex] = letter;
                }
            });
            temp.forEach(letter => {
                result = `${result}${letter}`;
            });
            return result;
        default:
            message.split("").forEach((letter, index) => {
                const row = index % rodLength;
                const col = Math.floor(index / rodLength);
                const targetIndex = row * key + col;
                if (targetIndex < message.length) {
                    temp[targetIndex] = letter;
                }
            });
            temp.forEach(letter => {
                result = `${result}${letter}`;
            });
            return result;
    }
}

function substitutionTransformMessage(direction, key, message) {
    switch (direction) {
        case "Encrypt":
            const rKey = Object.fromEntries(Object.entries(key).map(([key, value]) => [value, key]));
            return message.split("").map(([letter]) => {
                if (Object.hasOwn(rKey, letter)) {
                    return rKey[letter];
                } else {
                    return letter;            
                }
            }).join("");
        default:
            const minSize = Math.min(...Object.keys(key).map(key => key.length));
            const maxSize = Math.max(...Object.keys(key).map(key => key.length));
            let result = "";
            for (var counter = 0; counter < message.length; counter++) {
                let size = maxSize;
                if (counter + maxSize > message.length) {
                    size = message.length-counter;                    
                }
                let keyValue = message.substring(counter, counter+size);
                let found = false;
                while (!found && (keyValue.length >= minSize)) {
                    found = Object.hasOwn(key, keyValue);
                    if (!found) {
                        keyValue = keyValue.substring(0, keyValue.length - 1);                        
                    }
                }
                if (found) {
                    result = `${result}${key[keyValue]}`;
                    counter = counter + keyValue.length - 1;
                } else {
                    if (keyValue.length < 1) {
                        result = `${result}${message.substring(counter, counter+1)}`;
                    } else {
                        result = `${result}${keyValue}`;
                    }
                }
            }
            return result;
    }
}

function playfairTransformMessage(direction, key, message) {
    const subKey = {};
    Object.keys(key).forEach(rowKey => {
        Object.keys(key[rowKey]).forEach(colKey => {
            subKey[`${rowKey}${colKey}`] = key[rowKey][colKey];
        })
    });
    return substitutionTransformMessage(direction, subKey, message);
}

function tabConfig(tab, messages) {
    let currentActive = document.querySelector(".active");
    if (currentActive !== null) {
        currentActive.classList.toggle("active");
    }
    switch (tab) {
        case "scytale":
            let scytaleMenuItem = document.querySelector(".menuitem.scytale");
            scytaleMenuItem.classList.toggle("active");
            if (!pageTitle.textContent.includes("Site Plan")) {
                pageTitle.textContent = scytaleMenuItem.textContent;
            }
            if (messages.length > 0) {
                updateView(["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair", "substitution-form", "substitution-response", "playfair-form", "playfair-response", "scytale-form"], ["scytale-response"]);
                const scytaleMessageElement = document.querySelector(".scytale-message");
                scytaleMessageElement.textContent = messages[0];
                const scytaleKeyElement = document.querySelector(".scytale-key");
                scytaleKeyElement.textContent = (new URLSearchParams(window.location.search)).getAll("key");
                const scytaleResultElement = document.querySelector(".scytale-result");
                scytaleResultElement.textContent = scytaleTransformMessage((new URLSearchParams(window.location.search)).getAll("direction")[0], (new URLSearchParams(window.location.search)).getAll("key")[0], messages[0]);
            } else {
                updateView(["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair", "substitution-form", "substitution-response", "playfair-form", "playfair-response", "scytale-response"], ["scytale-form"]);
            }
            break;
        case "substitution":
            let substitutionMenuItem = document.querySelector(".menuitem.substitution");
            substitutionMenuItem.classList.toggle("active");
            if (!pageTitle.textContent.includes("Site Plan")) {
                pageTitle.textContent = substitutionMenuItem.textContent;
            }
            if (messages.length > 0) {
                updateView(["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair", "scytale-form", "scytale-response", "playfair-form", "playfair-response", "substitution-form"], ["substitution-response"]);
                const substitutionMessageElement = document.querySelector(".substitution-message");
                substitutionMessageElement.textContent = messages[0];
                const subKey = {};
                subKey[((new URLSearchParams(window.location.search)).getAll("p01")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p01")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p02")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p02")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p03")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p03")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p04")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p04")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p05")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p05")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p06")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p06")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p07")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p07")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p08")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p08")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p09")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p09")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p10")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p10")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p11")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p11")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p12")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p12")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p13")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p13")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p14")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p14")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p15")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p15")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p16")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p16")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p17")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p17")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p18")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p18")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p19")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p19")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p20")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p20")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p21")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p21")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p22")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p22")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p23")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p23")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p24")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p24")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p25")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p25")[0][1]);
                subKey[((new URLSearchParams(window.location.search)).getAll("p26")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("p26")[0][1]);
                document.getElementById("k01").textContent = (new URLSearchParams(window.location.search)).getAll("p01")[0][0];
                document.getElementById("v01").textContent = (new URLSearchParams(window.location.search)).getAll("p01")[0][1];
                document.getElementById("k02").textContent = (new URLSearchParams(window.location.search)).getAll("p02")[0][0];
                document.getElementById("v02").textContent = (new URLSearchParams(window.location.search)).getAll("p02")[0][1];
                document.getElementById("k03").textContent = (new URLSearchParams(window.location.search)).getAll("p03")[0][0];
                document.getElementById("v03").textContent = (new URLSearchParams(window.location.search)).getAll("p03")[0][1];
                document.getElementById("k04").textContent = (new URLSearchParams(window.location.search)).getAll("p04")[0][0];
                document.getElementById("v04").textContent = (new URLSearchParams(window.location.search)).getAll("p04")[0][1];
                document.getElementById("k05").textContent = (new URLSearchParams(window.location.search)).getAll("p05")[0][0];
                document.getElementById("v05").textContent = (new URLSearchParams(window.location.search)).getAll("p05")[0][1];
                document.getElementById("k06").textContent = (new URLSearchParams(window.location.search)).getAll("p06")[0][0];
                document.getElementById("v06").textContent = (new URLSearchParams(window.location.search)).getAll("p06")[0][1];
                document.getElementById("k07").textContent = (new URLSearchParams(window.location.search)).getAll("p07")[0][0];
                document.getElementById("v07").textContent = (new URLSearchParams(window.location.search)).getAll("p07")[0][1];
                document.getElementById("k08").textContent = (new URLSearchParams(window.location.search)).getAll("p08")[0][0];
                document.getElementById("v08").textContent = (new URLSearchParams(window.location.search)).getAll("p08")[0][1];
                document.getElementById("k09").textContent = (new URLSearchParams(window.location.search)).getAll("p09")[0][0];
                document.getElementById("v09").textContent = (new URLSearchParams(window.location.search)).getAll("p09")[0][1];
                document.getElementById("k10").textContent = (new URLSearchParams(window.location.search)).getAll("p10")[0][0];
                document.getElementById("v10").textContent = (new URLSearchParams(window.location.search)).getAll("p10")[0][1];
                document.getElementById("k11").textContent = (new URLSearchParams(window.location.search)).getAll("p11")[0][0];
                document.getElementById("v11").textContent = (new URLSearchParams(window.location.search)).getAll("p11")[0][1];
                document.getElementById("k12").textContent = (new URLSearchParams(window.location.search)).getAll("p12")[0][0];
                document.getElementById("v12").textContent = (new URLSearchParams(window.location.search)).getAll("p12")[0][1];
                document.getElementById("k13").textContent = (new URLSearchParams(window.location.search)).getAll("p13")[0][0];
                document.getElementById("v13").textContent = (new URLSearchParams(window.location.search)).getAll("p13")[0][1];
                document.getElementById("k14").textContent = (new URLSearchParams(window.location.search)).getAll("p14")[0][0];
                document.getElementById("v14").textContent = (new URLSearchParams(window.location.search)).getAll("p14")[0][1];
                document.getElementById("k15").textContent = (new URLSearchParams(window.location.search)).getAll("p15")[0][0];
                document.getElementById("v15").textContent = (new URLSearchParams(window.location.search)).getAll("p15")[0][1];
                document.getElementById("k16").textContent = (new URLSearchParams(window.location.search)).getAll("p16")[0][0];
                document.getElementById("v16").textContent = (new URLSearchParams(window.location.search)).getAll("p16")[0][1];
                document.getElementById("k17").textContent = (new URLSearchParams(window.location.search)).getAll("p17")[0][0];
                document.getElementById("v17").textContent = (new URLSearchParams(window.location.search)).getAll("p17")[0][1];
                document.getElementById("k18").textContent = (new URLSearchParams(window.location.search)).getAll("p18")[0][0];
                document.getElementById("v18").textContent = (new URLSearchParams(window.location.search)).getAll("p18")[0][1];
                document.getElementById("k19").textContent = (new URLSearchParams(window.location.search)).getAll("p19")[0][0];
                document.getElementById("v19").textContent = (new URLSearchParams(window.location.search)).getAll("p19")[0][1];
                document.getElementById("k20").textContent = (new URLSearchParams(window.location.search)).getAll("p20")[0][0];
                document.getElementById("v20").textContent = (new URLSearchParams(window.location.search)).getAll("p20")[0][1];
                document.getElementById("k21").textContent = (new URLSearchParams(window.location.search)).getAll("p21")[0][0];
                document.getElementById("v21").textContent = (new URLSearchParams(window.location.search)).getAll("p21")[0][1];
                document.getElementById("k22").textContent = (new URLSearchParams(window.location.search)).getAll("p22")[0][0];
                document.getElementById("v22").textContent = (new URLSearchParams(window.location.search)).getAll("p22")[0][1];
                document.getElementById("k23").textContent = (new URLSearchParams(window.location.search)).getAll("p23")[0][0];
                document.getElementById("v23").textContent = (new URLSearchParams(window.location.search)).getAll("p23")[0][1];
                document.getElementById("k24").textContent = (new URLSearchParams(window.location.search)).getAll("p24")[0][0];
                document.getElementById("v24").textContent = (new URLSearchParams(window.location.search)).getAll("p24")[0][1];
                document.getElementById("k25").textContent = (new URLSearchParams(window.location.search)).getAll("p25")[0][0];
                document.getElementById("v25").textContent = (new URLSearchParams(window.location.search)).getAll("p25")[0][1];
                document.getElementById("k26").textContent = (new URLSearchParams(window.location.search)).getAll("p26")[0][0];
                document.getElementById("v26").textContent = (new URLSearchParams(window.location.search)).getAll("p26")[0][1];
                const substitutionResultElement = document.querySelector(".substitution-result");
                substitutionResultElement.textContent = substitutionTransformMessage((new URLSearchParams(window.location.search)).getAll("direction")[0], subKey, messages[0]);
            } else {
                updateView(["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair", "scytale-form", "scytale-response", "playfair-form", "playfair-response", "substitution-response"], ["substitution-form"]);
            }
            break;
        case "playfair":
            let playfairMenuItem = document.querySelector(".menuitem.playfair");
            playfairMenuItem.classList.toggle("active");
            if (!pageTitle.textContent.includes("Site Plan")) {
                pageTitle.textContent = playfairMenuItem.textContent;
            }
            if (messages.length > 0) {
                updateView(["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair", "substitution-form", "substitution-response", "scytale-form", "scytale-response", "playfair-form"], ["playfair-response"]);
                const playfairMessageElement = document.querySelector(".playfair-message");
                playfairMessageElement.textContent = messages[0];
                const playKey = {};
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][0])] = {};
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][0])][((new URLSearchParams(window.location.search)).getAll("columns")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("row1")[0][0]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][0])][((new URLSearchParams(window.location.search)).getAll("columns")[0][1])] = ((new URLSearchParams(window.location.search)).getAll("row1")[0][1]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][0])][((new URLSearchParams(window.location.search)).getAll("columns")[0][2])] = ((new URLSearchParams(window.location.search)).getAll("row1")[0][2]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][0])][((new URLSearchParams(window.location.search)).getAll("columns")[0][3])] = ((new URLSearchParams(window.location.search)).getAll("row1")[0][3]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][0])][((new URLSearchParams(window.location.search)).getAll("columns")[0][4])] = ((new URLSearchParams(window.location.search)).getAll("row1")[0][4]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][1])] = {};
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][1])][((new URLSearchParams(window.location.search)).getAll("columns")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("row2")[0][0]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][1])][((new URLSearchParams(window.location.search)).getAll("columns")[0][1])] = ((new URLSearchParams(window.location.search)).getAll("row2")[0][1]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][1])][((new URLSearchParams(window.location.search)).getAll("columns")[0][2])] = ((new URLSearchParams(window.location.search)).getAll("row2")[0][2]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][1])][((new URLSearchParams(window.location.search)).getAll("columns")[0][3])] = ((new URLSearchParams(window.location.search)).getAll("row2")[0][3]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][1])][((new URLSearchParams(window.location.search)).getAll("columns")[0][4])] = ((new URLSearchParams(window.location.search)).getAll("row2")[0][4]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][2])] = {};
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][2])][((new URLSearchParams(window.location.search)).getAll("columns")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("row3")[0][0]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][2])][((new URLSearchParams(window.location.search)).getAll("columns")[0][1])] = ((new URLSearchParams(window.location.search)).getAll("row3")[0][1]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][2])][((new URLSearchParams(window.location.search)).getAll("columns")[0][2])] = ((new URLSearchParams(window.location.search)).getAll("row3")[0][2]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][2])][((new URLSearchParams(window.location.search)).getAll("columns")[0][3])] = ((new URLSearchParams(window.location.search)).getAll("row3")[0][3]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][2])][((new URLSearchParams(window.location.search)).getAll("columns")[0][4])] = ((new URLSearchParams(window.location.search)).getAll("row3")[0][4]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][3])] = {};
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][3])][((new URLSearchParams(window.location.search)).getAll("columns")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("row4")[0][0]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][3])][((new URLSearchParams(window.location.search)).getAll("columns")[0][1])] = ((new URLSearchParams(window.location.search)).getAll("row4")[0][1]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][3])][((new URLSearchParams(window.location.search)).getAll("columns")[0][2])] = ((new URLSearchParams(window.location.search)).getAll("row4")[0][2]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][3])][((new URLSearchParams(window.location.search)).getAll("columns")[0][3])] = ((new URLSearchParams(window.location.search)).getAll("row4")[0][3]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][3])][((new URLSearchParams(window.location.search)).getAll("columns")[0][4])] = ((new URLSearchParams(window.location.search)).getAll("row4")[0][4]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][4])] = {};
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][4])][((new URLSearchParams(window.location.search)).getAll("columns")[0][0])] = ((new URLSearchParams(window.location.search)).getAll("row5")[0][0]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][4])][((new URLSearchParams(window.location.search)).getAll("columns")[0][1])] = ((new URLSearchParams(window.location.search)).getAll("row5")[0][1]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][4])][((new URLSearchParams(window.location.search)).getAll("columns")[0][2])] = ((new URLSearchParams(window.location.search)).getAll("row5")[0][2]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][4])][((new URLSearchParams(window.location.search)).getAll("columns")[0][3])] = ((new URLSearchParams(window.location.search)).getAll("row5")[0][3]);
                playKey[((new URLSearchParams(window.location.search)).getAll("rows")[0][4])][((new URLSearchParams(window.location.search)).getAll("columns")[0][4])] = ((new URLSearchParams(window.location.search)).getAll("row5")[0][4]);
                document.getElementById("c01").textContent = (new URLSearchParams(window.location.search)).getAll("columns")[0][0];
                document.getElementById("c02").textContent = (new URLSearchParams(window.location.search)).getAll("columns")[0][1];
                document.getElementById("c03").textContent = (new URLSearchParams(window.location.search)).getAll("columns")[0][2];
                document.getElementById("c04").textContent = (new URLSearchParams(window.location.search)).getAll("columns")[0][3];
                document.getElementById("c05").textContent = (new URLSearchParams(window.location.search)).getAll("columns")[0][4];
                document.getElementById("r01").textContent = (new URLSearchParams(window.location.search)).getAll("rows")[0][0];
                document.getElementById("r02").textContent = (new URLSearchParams(window.location.search)).getAll("rows")[0][1];
                document.getElementById("r03").textContent = (new URLSearchParams(window.location.search)).getAll("rows")[0][2];
                document.getElementById("r04").textContent = (new URLSearchParams(window.location.search)).getAll("rows")[0][3];
                document.getElementById("r05").textContent = (new URLSearchParams(window.location.search)).getAll("rows")[0][4];
                document.getElementById("v01-01").textContent = (new URLSearchParams(window.location.search)).getAll("row1")[0][0];
                document.getElementById("v01-02").textContent = (new URLSearchParams(window.location.search)).getAll("row1")[0][1];
                document.getElementById("v01-03").textContent = (new URLSearchParams(window.location.search)).getAll("row1")[0][2];
                document.getElementById("v01-04").textContent = (new URLSearchParams(window.location.search)).getAll("row1")[0][3];
                document.getElementById("v01-05").textContent = (new URLSearchParams(window.location.search)).getAll("row1")[0][4];
                document.getElementById("v02-01").textContent = (new URLSearchParams(window.location.search)).getAll("row2")[0][0];
                document.getElementById("v02-02").textContent = (new URLSearchParams(window.location.search)).getAll("row2")[0][1];
                document.getElementById("v02-03").textContent = (new URLSearchParams(window.location.search)).getAll("row2")[0][2];
                document.getElementById("v02-04").textContent = (new URLSearchParams(window.location.search)).getAll("row2")[0][3];
                document.getElementById("v02-05").textContent = (new URLSearchParams(window.location.search)).getAll("row2")[0][4];
                document.getElementById("v03-01").textContent = (new URLSearchParams(window.location.search)).getAll("row3")[0][0];
                document.getElementById("v03-02").textContent = (new URLSearchParams(window.location.search)).getAll("row3")[0][1];
                document.getElementById("v03-03").textContent = (new URLSearchParams(window.location.search)).getAll("row3")[0][2];
                document.getElementById("v03-04").textContent = (new URLSearchParams(window.location.search)).getAll("row3")[0][3];
                document.getElementById("v03-05").textContent = (new URLSearchParams(window.location.search)).getAll("row3")[0][4];
                document.getElementById("v04-01").textContent = (new URLSearchParams(window.location.search)).getAll("row4")[0][0];
                document.getElementById("v04-02").textContent = (new URLSearchParams(window.location.search)).getAll("row4")[0][1];
                document.getElementById("v04-03").textContent = (new URLSearchParams(window.location.search)).getAll("row4")[0][2];
                document.getElementById("v04-04").textContent = (new URLSearchParams(window.location.search)).getAll("row4")[0][3];
                document.getElementById("v04-05").textContent = (new URLSearchParams(window.location.search)).getAll("row4")[0][4];
                document.getElementById("v05-01").textContent = (new URLSearchParams(window.location.search)).getAll("row5")[0][0];
                document.getElementById("v05-02").textContent = (new URLSearchParams(window.location.search)).getAll("row5")[0][1];
                document.getElementById("v05-03").textContent = (new URLSearchParams(window.location.search)).getAll("row5")[0][2];
                document.getElementById("v05-04").textContent = (new URLSearchParams(window.location.search)).getAll("row5")[0][3];
                document.getElementById("v05-05").textContent = (new URLSearchParams(window.location.search)).getAll("row5")[0][4];
                const playfairResultElement = document.querySelector(".playfair-result");
                playfairResultElement.textContent = playfairTransformMessage((new URLSearchParams(window.location.search)).getAll("direction")[0], playKey, messages[0]);
            } else {
                updateView(["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair", "substitution-form", "substitution-response", "scytale-form", "scytale-response", "playfair-response"], ["playfair-form"]);
            }
            break;
        default:
            let homeMenuItem = document.querySelector(".menuitem.home");
            homeMenuItem.classList.toggle("active");
            if (!pageTitle.textContent.includes("Site Plan")) {
                pageTitle.textContent = homeMenuItem.textContent;
            }
            updateView(["scytale-form", "scytale-response", "substitution-form", "substitution-response", "playfair-form", "playfair-response"], ["hero", "home-card.scytale", "home-card.substitution", "home-card.playfair"]);
    }
}

function updateView(hideList, showList) {
    window.addEventListener("DOMContentLoaded", () => {
        hideList.forEach(name => {
            console.log(document.querySelector(`.${name}`).classList);
            if (!document.querySelector(`.${name}`).classList.contains("hide")) {
                document.querySelector(`.${name}`).classList.toggle("hide");
                console.log(document.querySelector(`.${name}`).classList);
            }
            if (document.querySelector(`.${name}`).classList.contains("show")) {
                document.querySelector(`.${name}`).classList.toggle("show");
                console.log(document.querySelector(`.${name}`).classList);
            }
        });
        showList.forEach(name => {
            console.log(document.querySelector(`.${name}`).classList);
            if (document.querySelector(`.${name}`).classList.contains("hide")) {
                document.querySelector(`.${name}`).classList.toggle("hide");
                console.log(document.querySelector(`.${name}`).classList);
            }
            if (!document.querySelector(`.${name}`).classList.contains("show")) {
                document.querySelector(`.${name}`).classList.toggle("show");
                console.log(document.querySelector(`.${name}`).classList);
            }
        });
    });    
}

const search = window.location.search;
const urlParams = new URLSearchParams(search);
const tabs = urlParams.getAll("tab");
const messages = urlParams.getAll("message");
if (tabs.length>0) {
    tabConfig(tabs[0], messages)
} else {
    tabConfig("home", messages);
}
function proposedSubstitutionPairValid(proposedPair, proposingElementID) {
    const proposedKey = proposedPair[0];
    const proposedValue = proposedPair[1];
    if (proposedKey === proposedValue) {
        return false;
    }
    substitutionInputFieldIDs.filter(substitutionInputFieldID => { return substitutionInputFieldID !== proposingElementID }).forEach(substitutionInputFieldID => {
        const pair = document.getElementById(substitutionInputFieldID).value;
        if (proposedKey === pair[0]) {
            return false;        
        }
        if (proposedValue === pair[1]) {
            return false;        
        }
    });
    return true;
}
substitutionInputFieldIDs.forEach(substitutionInputFieldID => {
    document.getElementById(substitutionInputFieldID).addEventListener('input', (event) => {
        const proposedPair = event.target.value;
        const proposingElementID = event.target.id;
        if (proposedSubstitutionPairValid(proposedPair, proposingElementID)) {
            event.target.setCustomValidity('');
        } else {
            event.target.setCustomValidity('Invalid key/value pair.');
        }
    });
});
function proposedPlayfairKeyValid(proposedSet) {
    return new Set(proposedSet).size === proposedSet.length;
}
function proposedPlayfairSetValid(proposedSet, proposingElementID) {
    const proposedItem1 = proposedSet[0];
    const proposedItem2 = proposedSet[1];
    const proposedItem3 = proposedSet[2];
    const proposedItem4 = proposedSet[3];
    const proposedItem5 = proposedSet[4];
    let result = true;
    playfairInputFieldIDs.filter(playfairInputFieldID => { return (playfairInputFieldID != proposingElementID) && (playfairInputFieldID != "columns") && (playfairInputFieldID != "rows"); }).forEach(playfairInputFieldID => {
        const set = document.getElementById(playfairInputFieldID).value;
        if (proposedPlayfairKeyValid(proposedSet)) {
            if (set.includes(proposedItem1)||set.includes(proposedItem2)||set.includes(proposedItem3)||set.includes(proposedItem4)||set.includes(proposedItem5)) {
                result = false;        
            }
        } else {
            result = false;
        }
    });
    return result;
}
playfairInputFieldIDs.forEach(playfairInputFieldID => {
    document.getElementById(playfairInputFieldID).addEventListener('input', (event) => {
        const proposedSet = event.target.value;
        const proposingElementID = event.target.id;
        switch (proposingElementID) {
            case "columns":
                if (proposedPlayfairKeyValid(proposedSet)) {
                    event.target.setCustomValidity('');
                } else {
                    event.target.setCustomValidity('Invalid columns key values.');
                }
                break;
            case "rows":
                if (proposedPlayfairKeyValid(proposedSet)) {
                    event.target.setCustomValidity('');
                } else {
                    event.target.setCustomValidity('Invalid rows key values.');
                }
                break;
            default:
                const test = proposedPlayfairSetValid(proposedSet, proposingElementID);
                if (test) {
                    event.target.setCustomValidity('');
                } else {
                    event.target.setCustomValidity('Invalid row values.');
                }
        }
    });
});