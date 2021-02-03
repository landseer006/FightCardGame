    

let playerArray = [];
let computerArray = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("next").style.visibility = "hidden";

    document.getElementById("deal").addEventListener("click", dealfunction);
    
    document.getElementById("next").addEventListener("click", OneTurn);
});

let dealfunction = function () {
    deck.load();
    //split the cards from deck.cardArray into playerArray and computerArray
    for (let i = 0; i < 26; i++) {
        playerArray[i]=deck.cardArray[i]
    }

    for (let i = 0; i < 26; i++) {
        computerArray[i] = deck.cardArray[i+26]
    }
    console.log(playerArray);
    console.log(computerArray);
}
    

let OneTurn = function () {
}
    

        
function suitConvert(someSuit) {
    switch (someSuit) {
        case 1:
            return "SPADE";
            break;
        case 2:
            return "CLUB";
            break;
        case 3:
            return "DIAMOND";
            break;
        case 4:
            return "HEART";
            break;
    }
}

function rankConvert(someRank) {
    switch (someRank) {
        case 2:
            return "2";
            break;
        case 3:
            return "3";
            break;
        case 4:
            return "4";
            break;
        case 5:
            return "5";
            break;
        case 6:
            return "6";
            break;
        case 7:
            return "7";
            break;
        case 8:
            return "8";
            break;
        case 9:
            return "9";
            break;
        case 10:
            return "10";
            break;
        case 11:
            return "JACK";
            break;
        case 12:
            return "QUEEN";
            break;
        case 13:
            return "KING";
            break;
        case 14:
            return "ACE";
            break;
    }
}

function changeClass() {
    document.getElementById('myButton').className = "changedClass";
    var button_class = document.getElementById('myButton').className;
    document.getElementById('myPara').innerHTML = "New class name: "
        + button_class;
} 
