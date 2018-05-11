import React from 'react';

export default class PlayArea extends React.Component {
  render() {
    return (
    <div>
      <div id="solitHead">
        <div className="cardBox"></div>
        <div id='flip' className="cardBox"></div>
        <button onClick={flipPile} id="flipButton">Flip</button>
        <div className="cardBox">H</div>
        <div className="cardBox">D</div>
        <div className="cardBox">C</div>
        <div className="cardBox">S</div>
      </div>
      <div id="solitBody">
        <div id="sOne" className="cardBox"></div>
        <div id="sTwo" className="cardBox"></div>
        <div id="sThree" className="cardBox"></div>
        <div id="sFour" className="cardBox"></div>
        <div id="sFive" className="cardBox"></div>
        <div id="sSix" className="cardBox"></div>
        <div id="sSeven" className="cardBox"></div>
      </div> 
    </div>
    )
  }  
}