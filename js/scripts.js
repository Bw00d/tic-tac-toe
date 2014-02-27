

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
  create: function (playerName, playerValue) {
    var player = Object.create(Player);
    player.initialize(playerName, playerValue);
    return player;
  },

  initialize: function (playerName, playerValue) {
    this.playerName  = playerName;
    this.playerValue = playerValue;
  }
};

