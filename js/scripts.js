var Game = {
  initialize: function() {
    this.player1 = Player.create("X");
    this.player2 = Player.create("O");
    this.gameBoard = Object.create(Board);
    this.gameBoard.initialize();

    this.turnCounter = 1;
    this.whoseTurn = "X";

  },
  turn: function() {

    if (this.turnCounter <= 9) {
      if (this.turnCounter % 2 === 0) {
        this.whoseTurn = "O";
      } else {
        this.whoseTurn ="X";
      }
      this.turnCounter++
    } else {
      return "Cat's Game";
   }
  }

};

var Board = {
  initialize: function() {
    this.boardSpaces = [];
    for (var square = 1; square <= 9; square++) {
      this.boardSpaces.push(Space.create(square));
    }
  }
};

var Space = {
  all: [],
    initialize: function (square) {
    this.square = square;
    this.markedBy;
  },
  create: function (square) {
    var space = Object.create(Space);
    space.initialize(square);
    Space.all.push(space);
    return space;
  },
  findSpace: function(number) {
   var result;

   for(var i = 0; i < 9; i++) {
    if (Space.all[i].square === number) {
      result = Space.all[i];
    } else {
      result = false;
    };
     return result;
   };

   console.log(result);
  },

  markBy: function (player) {
    this.markedBy = player;
    player.moves.push(this.square);

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
    this.moves = [];
  }
};

$(document).ready(function() {
  var game = Object.create(Game);
  var winningCombo = [[1,2.3],[4,5,6],[7,8,9],
                      [1,4,7],[2,5,8],[3,6,9],
                      [1,5,9],[3,5,7]];

  $('.spaces').click(function() {
    var clickedCell = $(this).data('cell');
    Space.markBy();
  });
});
