import $      from 'jquery';
import Game   from './game';
import Util   from './utility';

let game;

/**
  * Application entry point. Handles the creation and management of app classes
  * Calls game class to initialize game. 
*/
const App = {

  init() {

    // game starts
    $(document).on('start', (event) => {      
      Util.hideStartModal();

      game = new Game(event.options);
    });

    Util.handleStartGameInput();

    // game ends 
    $(document).on('end', (event) => {
      // show ending modal 
      // prompt to play again 
    });

  },

  end() {

  }

}

module.exports = App;

App.init();
