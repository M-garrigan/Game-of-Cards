
// Click event binding
let startButton = document.getElementById('startGame');
let game; 
startButton.addEventListener('click', function () {
    let d = new Deck();
    d.initRandom();

    game = new Solitaire(d);

    let One = document.getElementById('sOne');
    One.innerHTML = game.displayOne;

});

// game dom to Solitaire obj binding
