import Game from './game.js';

export default class Board {
  constructor() {
    this.height = $(window).height() * 10;
    this.width  = $(window).width() * 10;
  }

}

module.exports = Board;

// Class Responsibilities: