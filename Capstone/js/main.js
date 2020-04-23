let myDeck = {
    cardsSelected: [],
    clearDeck : function() {
        while (myDeck.cardsSelected.length > 0) {
            removeCard(myDeck.cardsSelected[0]);
            myDeck.cardsSelected.shift()
        }
    }
}

function removeCard(card) {
    let pickCards = document.querySelector('#pickCards');
    pickCards.appendChild(card);
}

function removeDeck() {
    myDeck.clearDeck();
    document.querySelector('#instructions').textContent = ``
}

async function getCards() {
    let response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
    let data = await response.json()
    return data;
}
getCards().then(data => showCards(data));

function showCards(cards) {
    console.log(cards)
    cards.data.forEach(showCard);
}

function showCard(card) {
    cardDiv = defineCard(card);
    document.querySelector('#pickCards').appendChild(cardDiv)
}

function defineCard(card) {
    var cardDiv = document.createElement('DIV');
    var cardImage = document.createElement('IMG');
    cardImage.setAttribute("src", card.card_images[0].image_url_small)
    cardDiv.classList.add("card")
    cardDiv.appendChild(cardImage)

     cardDiv.addEventListener('click', function(event) {
        let deck = document.querySelector('#deckArea')
        if (deck.children.length < 10) {
            deck.appendChild(cardDiv)
            myDeck.cardsSelected.push(cardDiv)
            document.querySelector('#instructions').textContent = `You just added ${card.name} to your deck!`
        } else {
            document.querySelector('#instructions').textContent = `Your deck is full! You can only have 10 cards in your deck.`
        }       
    });
    return cardDiv;
}