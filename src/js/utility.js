import $ from 'jquery';

/**
  * Module that handles basic DOM events and other functions that are needed across classes
  * @module Utility 
*/
module.exports = {

  /**
    * @function handleStartGameInput
    * @param {object} - options Represents user choices for the settings of the game 
    * @param {event}  - DOM event that is dispatched to tell that user has selected event 
    * @returns {object} - options What the user has chosen 
  */
  handleStartGameInput() {  
    let options = {};

    $('.start-modal-submit').on('click', (e) => {
      e.preventDefault();

      let name = $('#name').val();
      let tankClass = $('input[name=tank-class]:checked').val();
      let color = $('input[name=tank-color]:checked').val();

      if (name === '' || name === undefined) {
        alert('You must select a name!');
        
        $('#name').addClass('invalid-input');

        return false;
      }

      options['name'] = name;
      options['tankClass'] = tankClass;
      options['color'] = color;

      $(document).trigger({
        type: 'start',
        options: options
      });

    });

  },

  hideStartModal() {
    $('#modal-start').hide();
  }


}