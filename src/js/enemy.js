import Tank from './tank';

class Enemy extends Tank {
  constructor(x, y) {
    super();
    this.seesUser = false;
  }

  // determine if enemy can see player
  seesUser() {
    // if within certain range of vision 
      // return true
    // else 
      // return false
  }

  


}

module.exports = Enemy;

// Class Responsibilities:
  // Enemy movement 