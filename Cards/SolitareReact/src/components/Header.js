import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    <div id="topBanner">
      <span id="title">lets play ... Solitaire</span>
      <br/>
      <button onClick={startGame} id="startButton">Start</button>
    </div>
    )
  }
}