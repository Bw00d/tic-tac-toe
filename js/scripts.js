var Game = {
  initialize: function() {
    this.player1 = Player.create("X");
    this.player2 = Player.create("O");
    this.gameBoard = Object.create(Board);
    this.gameBoard.initialize();
  }
};
// make a win condition. idea: x = 6  && y = 6  is diagonal
// all x are equal === horizontal.  if all y are equal === vertical

// make a turn determiner when boardspace.length is odd == player1(X) turn.
// eve is player2(O)  turn.

// make a play function to take coordinates and put them in their space.
// jquery it.

// see bottom for partial code
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

// describe("whoseMove", function() {
  //   it("decides whose move it is", function() {
  //     testGame.whoseMove(9).should.equal("X");
  //   });
  // });


  // describe("play", function() {
  //   it("should assign an X or an O to a space", function() {
  //     testGame.play(1,2).should.eql(boardSpaces[1]);
  //   });
  // });
  // describe("winCondition", function() {
  //   it("checks if all three spaces horizonally, vertically, or diagonally are marked by the same player", function() {

  //   });
  // });

