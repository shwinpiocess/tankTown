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

    $(document).on('start', (event) => {      
      Util.hideStartModal();

      game = new Game(event.options);
    });

    Util.handleStartGameInput();

  },

  end() {

  }


}

module.exports = App;

App.init();

