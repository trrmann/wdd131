function mod(n, d) {
    const f = (n/d);
    const u = (f * d);
    const r = n - u;
    return r;
}
function scytaleTransformMessage(direction, keyString, message) {
    let key = parseInt(keyString, 10);
    let rodLength = Math.ceil(message.length / key);
    let grid = Array(key);
    let result = "";
    let row = 0;
    let col = 0;
    switch (direction) {
        case "Encrypt":
            row = 0;
            col = 0;
            message.split("").forEach((letter) => {
                if (col === rodLength) {
                    col = 0;
                    row++;
                }
                if (!Array.isArray(grid[row])) {
                    grid[row] = Array(rodLength).fill(" ");
                }
                grid[row][col] = letter;
                console.log(`r=${row} c=${col} t=${letter} k=${key} s=${rodLength} l=${message.length}`)
                col++;
            });
            row = 0;
            col = 0;
            while ((row < key) || (col < rodLength)) {
                if (row === key) {
                    row = 0;
                    col++;
                }
                result = `${result}${grid[row][col]}`;
                row++                
            }
            return result;
        default:
            row = 0;
            col = 0;
            message.split("").forEach((letter) => {
                if (row === key) {
                    row = 0
                    col++;
                }
                if (!Array.isArray(grid[row])) {
                    grid[row] = Array(rodLength).fill(" ");
                }
                grid[row][col] = letter;
                console.log(`r=${row} c=${col} t=${letter} k=${key} s=${rodLength} l=${message.length}`)
                row++;
            });
            row = 0;
            col = 0;
            while ((row < key) || (col < rodLength)) {
                if (col === rodLength) {
                    col = 0;
                    row++;
                }
                result = `${result}${grid[row][col]}`;
                col++;
            }
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