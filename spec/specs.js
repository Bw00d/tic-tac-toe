describe("Game", function() {
  describe("initialize", function() {
    it("creates the board and two players when it is initialized", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.player1.playerValue.should.equal("X");
      testGame.player2.playerValue.should.equal("O");
      testGame.gameBoard.boardSpaces[0].square.should.eql(1);
    });
    it("creates arraysfor player moves", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.moves.should.eql([]);
    });
    it("push the square to the appropriate player array", function() {
      var testGame  = Object.create(Game);
      testGame.initialize();
      testGame.gameBoard.boardSpaces[0].markBy(testGame.player1);
      testGame.player1.moves.length.should.equal(1);
    });
  // describe("winCondition", function() {
  //   it("checks if any player is on three consecutive spaces", function() {
  //     var testWin =
  //   });
  });
  describe("findSpace", function() {
    it("takes the user click and marks that spot for them", function() {
      var testGame = Object.create(Game);
      var testSpace = testGame.gameBoard.boardSpaces[1]
      testGame.initialize();
      testGame.findSpace(2).should.equal(player);

    })
  })
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates 9 spaces when it is initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.boardSpaces.length.should.equal(9);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with a number", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(2);
      testSpace.square.should.equal(2);
    });
  });

  describe("create", function() {
    it("should initialze a space", function() {
      var testSpace = Space.create(2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
      console.log(testSpace.markedBy);
    });
  });
});

describe("Player", function() {
  describe("initialize", function() {
    it("sets a player with a value of X or O", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.playerValue.should.equal("X");
    });
  });

  describe("create", function() {
    it("should initialize a player", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

