import $    from 'jquery';
import Game from './game.js';

class Board {
  constructor() {
    let $board = document.getElementById('gameBoard').getContext('2d');
    $board.height = $(window).height() * 10;
    $board.width = $(window).width() * 10;
    this.height = $board.height;
    this.width = $board.width;
  }

  isWithinBounds(tank) {
    return true;
    // if tank is contained within bounds
      // return true
    // if tank is not contained within bounds
      // return false
  }

}

module.exports = Board;
