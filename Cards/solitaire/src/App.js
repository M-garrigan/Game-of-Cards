import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Card (suit, rank) {
  this.suit = suit;
  this.rank = rank;
  if (this.suit === 'Diamonds' || this.suit === 'Hearts')
      this.color = 'Red';
  if (this.suit === 'Spades' || this.suit === 'Clubs')
      this.color = 'Black';
  
}

function Deck () {
  this.suitArr = [{name: 'Clubs', count: 13}, {name: 'Diamonds', count: 13},
                  {name: 'Hearts', count: 13}, {name: 'Spades', count: 13} ];
  this.rankArr = [{name: 'Two', alias: '2', value: 2, count: 4}, 
                  {name: 'Three', alias: '3', value: 3, count: 4}, 
                  {name: 'Four', alias: '4', value: 4, count: 4}, 
                  {name: 'Five', alias: '5', value: 5, count: 4},
                  {name: 'Six', alias: '6', value: 6, count: 4}, 
                  {name: 'Seven', alias: '7', value: 7, count: 4}, 
                  {name: 'Eight', alias: '8', value: 8, count: 4}, 
                  {name: 'Nine', alias: '9', value: 9, count: 4},
                  {name: 'Ten', alias: '10', value: 10, count: 4}, 
                  {name: 'Jack', alias: 'J', value: 11, count: 4}, 
                  {name: 'Queen', alias: 'Q', value: 12, count: 4}, 
                  {name: 'King', alias: 'K', value: 13, count: 4},
                  {name: 'Ace', alias: 'A', value: 14, count: 4}
              ];

  this.Cards = [];
}

// Build a 52 card deck that is randomized and put into Cards array
Deck.prototype.initRandom = function () {

  while (this.suitArr.length !== 0 && this.rankArr.length !== 0) {
      let suit = Math.floor(Math.random() * this.suitArr.length);
      let rank = Math.floor(Math.random() * this.rankArr.length);

      this.Cards.push(new Card(this.suitArr[suit].name, this.rankArr[rank].alias));

      this.suitArr[suit].count -= 1;
      this.rankArr[rank].count -= 1;

      if (this.suitArr[suit].count === 0)
          this.suitArr.splice(suit, 1);
      if (this.rankArr[rank].count === 0)
          this.rankArr.splice(rank, 1);

  }
}

// A game of solitaire
function Solitaire (deck) {
  
  this.pile = deck.Cards.slice(28);
  this.flipPile = [];
  this.playableFlip = this.flipPile.length === 0 ? 0 : this.flipPile[this.flipPile.length - 1].rank + this.flipPile[this.flipPile.length - 1].name.slice(0,1);

  this.finishHearts = [];
  this.finishDiamonds = [];
  this.finishClubs = [];
  this.finishSpades = [];

  this.one = [deck.Cards[0]];
  this.displayOne = this.one[this.one.length - 1].rank + this.one[this.one.length - 1].suit.slice(0,1);

  this.two = [deck.Cards[1], deck.Cards[7]];
  this.displayTwo = this.two[this.two.length - 1].rank + this.two[this.two.length - 1].suit.slice(0,1);

  this.three = [deck.Cards[2], deck.Cards[8], deck.Cards[13]];
  this.displayThree = this.three[this.three.length - 1].rank + this.three[this.three.length - 1].suit.slice(0,1);

  this.four = [deck.Cards[3], deck.Cards[9], deck.Cards[14], deck.Cards[18]];
  this.displayFour = this.four[this.four.length - 1].rank + this.four[this.four.length - 1].suit.slice(0,1);

  this.five = [deck.Cards[4], deck.Cards[10], deck.Cards[15], deck.Cards[19], deck.Cards[22]];
  this.displayFive = this.five[this.five.length - 1].rank + this.five[this.five.length - 1].suit.slice(0,1);

  this.six = [deck.Cards[5], deck.Cards[11], deck.Cards[16], deck.Cards[20], deck.Cards[23], deck.Cards[25]];
  this.displaySix = this.six[this.six.length - 1].rank + this.six[this.six.length - 1].suit.slice(0,1);

  this.seven = [deck.Cards[6], deck.Cards[12], deck.Cards[17], deck.Cards[21], deck.Cards[24], deck.Cards[26], deck.Cards[27]];
  this.displaySeven = this.seven[this.seven.length - 1].rank + this.seven[this.seven.length - 1].suit.slice(0,1);

  // methods
  this.flip = function () {
      if (this.pile.length === 0) {
          this.pile = this.flipPile.splice(0);
      }
      else if (this.pile.length === 1 || this.pile.length === 2) {
          let arr = this.pile.splice(0);
          arr.forEach( x => { this.flipPile.push(x) });
      } else {
          let arr = this.pile.splice(0, 3);
          arr.forEach( x => { this.flipPile.push(x) });
      }
  };
}

let game;
let start = document.getElementById('startSolitaire');

function initializeGame () {
  let deck = new Deck();
  deck.initRandom();
  game = new Solitaire(deck);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">lets play ... Solitaire</h1>
        </header>
        <section id='playField'>
          <div id='titleBar'>
            <span id='greeting'>to start or reset...</span>
            <button id='startSolitaire' onClick={initializeGame()}>Start</button>
          </div>
          <div id='upperPlay'>
            <div id='left'>
              <div id='pile' className='App-card'></div>
              <div id='flip' className='App-card'>{game.playableFlip}</div>
              <button id='flipButton' onClick={game.flip()}>Flip</button>
            </div>
            <div id='right'>
              <div id='Hearts' className='App-card'>H</div>
              <div id='Diamonds' className='App-card'>D</div>
              <div id='Clubs' className='App-card'>C</div>
              <div id='Spades' className='App-card'>S</div>
            </div>
          </div>
          <div id='lowerPlay'>
            <div id='tiered'>
              <div id='One' className='App-card'>{game.displayOne}</div>
              <div id='Two' className='App-card'>{game.displayTwo}</div>
              <div id='Three' className='App-card'>{game.displayThree}</div>
              <div id='Four' className='App-card'>{game.displayFour}</div>
              <div id='Five' className='App-card'>{game.displayFive}</div>
              <div id='Six' className='App-card'>{game.displaySix}</div>
              <div id='Seven' className='App-card'>{game.displaySeven}</div>
            </div>
          </div>
        </section>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}
console.log(App);
export default App;
