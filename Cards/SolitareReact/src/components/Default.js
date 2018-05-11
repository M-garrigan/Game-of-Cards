import React from 'react';
import { Card, Deck, Solitaire } from './deck-of-cards';


export default class Default extends React.Component {
  // state = {
  //   game = ''
  // };
  // startKlondike = () => {
  //   let d = new Deck();

  //   d.initRandom();
  //   this.setState = {
  //     game = new Solitaire(d)
  //   }
  //   conosole.log(this.state.game);
  // };

  render () {
    return (
    <div>
      <div id="header">
        <p id='header-text'>lets play ... Solitaire</p>
      </div>

      <div id='subHeader'>
        <button onClick={this.state.startKlondike} 
                id="startKlondike"
                className="subHeaderButtons"
                >Start Klondike
        </button>
        <button onClick={''} 
                id="newDeal"
                className="subHeaderButtons"
                >New Deal
        </button>
        <button onClick={''} 
                id="startKlondike"
                className="subHeaderButtons"
                >How To Play?
        </button>
        <button onClick={''} 
                id="newDeal"
                className="subHeaderButtons"
                >Customize
        </button>
      </div>

      <div id="solitHead">
        <div id='stock' className="card"></div>
        <div id='talon' className="card"></div>
        <button id="flipStock">Flip</button>
        <div id='fH' className="card foundations"></div>
        <div id='fD' className="card foundations"></div>
        <div id='fC' className="card foundations"></div>
        <div id='fS' className="card foundations"></div>
      </div>
      <div id="solitBody">
        <div id="t1" className="card tableau"></div>
        <div id="t2" className="card tableau"></div>
        <div id="t3" className="card tableau"></div>
        <div id="t4" className="card tableau"></div>
        <div id="t5" className="card tableau"></div>
        <div id="t6" className="card tableau"></div>
        <div id="t7" className="card tableau"></div>
      </div>
    </div>
  );
}
}