class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.gamesPlayed = 0;
    this.gamesWon = 0;
    this.gamesLost = 0;
    this.gamesDrawn = 0;
  }

  static compare(a,b) {
    var res;
    if (a.points > b.points) {
      res = -1;
    } else if (a.points < b.points) {
      res = 1;
    } else {
      if (a.gamesWon > b.gamesWon) {
        res = -1;
      } else if (a.gamesWon < b.gamesWon) {
        res = 1;
      } else {
        if (a.gamesLost < b.gamesLost) {
          res = -1;
        } else if (a.gamesLost > b.gamesLost) {
          res = 1;
        } else {
          res = 0;
        }
      }
    }
    return res;
  }
}

export default Player;
