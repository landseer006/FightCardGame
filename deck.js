let Deck = {
    cardArray: [],
    load: function () {
        for (let suitCount = 1; suitCount < 5; suitCount++) {
            console.log(suitCount)
            for (let rankCount = 2; rankCount < 15;rankCount++) {
                this.cardArray.push(new Card(suitCount, rankCount));
            }
        }
        console.log(this.cardArray);
    }

    

}