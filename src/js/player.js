import Tank  from './tank';
import Board from './board';
import Game  from './game';
import App   from './app';

class Player extends Tank {
  constructor(options) {
    super();
    this.color    = options.color || 'red'; 
    this.gunType  = options.tankClass || 'basic';
    this.name     = options.name || 'guest'; 
    this.score    = 0;
  }

  // shouldn't have to pass board instance through
  // codesmell 
  move(direction, board) {
    let currentXPosition = this.x;
    let currentYPosition = this.y;

    switch(direction) {
      case 'left':
        this.x -= 10;
        break;
      case 'down':
        this.y -= 10;
        break;
      case 'right':
        this.x += 10;
        break;
      case 'up':
        this.y += 10;
        break;
    }

    // if not within bounds, reset 
    if (!board.isWithinBounds(this)) {
      this.x = currentXPosition;
      this.y = currentYPosition;
    }

    console.log(`x: ${this.x} | y: ${this.y}`);
  }

}

module.exports = Player;

