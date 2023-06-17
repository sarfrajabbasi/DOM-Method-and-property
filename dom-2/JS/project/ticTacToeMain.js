import Game from "./ticTacToeGame.js";
import GameView from "./ticTacToeGameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions
gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
};

gameView.update(game);