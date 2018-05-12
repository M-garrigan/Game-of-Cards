
// Button click event bind
const makeDeck = document.querySelector('.make-deck');


makeDeck.addEventListener('click', () => {
    let deck = new Deck();
    deck.initRandom();
    console.log(deck);
  showArea(deck);
});

// insert items into section
function showArea (deck) {


  for (let i = 0; i < deck.Cards.length; i+=1) {
    const item = document.createElement('span');
    item.innerHTML = `${deck.Cards[i].rank}${deck.Cards[i].suit.charAt(0)}`;
    item.setAttribute('class', 'show-deck-items');
    
    document.getElementsByClassName('show-deck')[0].appendChild(item);
  }

};
