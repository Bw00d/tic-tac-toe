var Game = {
  initialize: function() {
    this.player1 = Player.create("X");
    this.player2 = Player.create("O");
    this.gameBoard = Board.initialize();
  }
};

var Board = {
  initialize: function() {
    this.boardSpaces = [];
    for (var x = 1; x <= 3; x++) {
      for (var y = 1; y <= 3; y++) {
        this.boardSpaces.push(Space.create(x,y));
      }
    }
  }
};

var Space = {
  create: function (xCoord, yCoord) {
    var space = Object.create(Space);
    space.initialize(xCoord, yCoord);
    return space;
  },

  initialize: function (xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.markedBy;
  },

  markBy: function (player) {
    this.markedBy = player;
  }
};

var Player = {
  create: function (playerValue) {
    var player = Object.create(Player);
    player.initialize(playerValue);
    return player;
  },

  initialize: function (playerValue) {
    this.playerValue = playerValue;
  }
};

