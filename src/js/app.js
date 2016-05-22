'use strict';

import $ from 'jquery';

$(document).ready(() => {
  const $window = $(window);
  const windowHeight = $window.height();
  const windowWidth  = $window.width();

  let $gameBoard = $('#gameBoard');

  $gameBoard.width(windowWidth);
  $gameBoard.height(windowHeight);

});