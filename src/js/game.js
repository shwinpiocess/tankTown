import _      from 'lodash';
import $      from 'jquery';
import Util   from './utility';
import Tank   from './tank';
import Player from './player';
import Board  from './board';
import Enemy  from './enemy';

class Game {
  constructor(options) {
    // create board 
    this.board = new Board();
    
    // create player
    this.player = new Player(options);
    this.enemies = [];

    // create several enemies 
    for (let i = 0; i < 10; ++i) {
      let coords; // get random coordinates for enemies that are far enough apart 
      let enemy = new Enemy(coords);

      this.enemies.push(enemy);

    }

    $('html').on('keydown', (event) => {

      switch(event.keyCode) {
        case 65: 
          this.player.move('left', this.board);
          break;
        case 83:
          this.player.move('down', this.board);
          break;
        case 68:
          this.player.move('right', this.board);
          break;
        case 87:
          this.player.move('up', this.board);
          break;
      }

    });

  }

  // Events (game start, player death, game end, ...)

  handleEndGame() {

  }

  handleStartGame() {
    // build board 

    // build x enemies

  }

  updateObjects() {
    // updates player mvt
    // updates enemy mvt
    // updates 
    // updates board 
  }


}

module.exports = Game;
