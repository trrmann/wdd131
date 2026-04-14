const hamButton = document.querySelector("#hamburgerMenu");
const navigation = document.querySelector(".menulist");
const menuItems = document.querySelectorAll(".menuitem");
const pageTitle = document.querySelector("h1");
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
const search = window.location.search;
const urlParams = new URLSearchParams(search);
const tabs = urlParams.getAll("tab");
const messages = urlParams.getAll("message");
if (tabs.length>0) {
    tabConfig(tabs[0], messages)
} else {
    tabConfig("home", messages);
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