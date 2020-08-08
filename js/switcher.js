$(".dropdown-item").click(function (){
    let replacementSet = getReplacementSet($(this).text());
    setReplacementSet(replacementSet);
})

function getReplacementSet(setName){
    switch (setName) {
        case "Default":
            return ["Ghaul", "the Traveler", "you and your clan are", "clan", "the Vanguard", "Guardians"];
        case "WW2":
            return ["Hitler", "France", "you and your platoon are", "war", "platoon", "the Allies", "soldiers"];
    }
}

function setReplacementSet(replacementSet) {
    for (let i=1; i<6; i++){
        $("#replace"+i.toString()).text(replacementSet[i-1]);
    }
}