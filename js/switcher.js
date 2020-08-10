// Add event handler to each of the buttons in the dropdown
$(".dropdown-item").click(function (){
    let replacementSet = getReplacementSet($(this).text());
    setReplacementSet(replacementSet);
})

// Function to get array of words to replace in the current document
function getReplacementSet(setName){
    switch (setName) {
        case "Default":
            return ["Ghaul", "the Traveler", "you and your clan are", "clan", "the Vanguard", "Guardians"];
        case "WW2":
            return ["Hitler", "France", "you and your platoon are", "war", "the Allies", "soldiers"];
        case "Conspirator":
            return ["Calus", "Ghaul", "you and your fellow Legionaries are", "Red Legion", "Torobatl", "Cabal"]
    }
}

// Function to put into action the actual replacement of words in the current document
function setReplacementSet(replacementSet) {
    // Loop from 1 to 6, as this is how many "replaceX" spans there are
    for (let i=1; i<7; i++){
        $("#replace"+i.toString()).text(replacementSet[i-1]);
    }
}