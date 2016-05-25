import Tank from './tank';

class Player extends Tank {
  constructor(options) {
    super();
    this.health   = 100;
    this.color    = options.color; 
    this.gunType  = options.tankClass;
    this.name     = options.name;
  }

}

module.exports = Player;

// Class Responsibilities:
  // handling player options 
  // handling player movement 
