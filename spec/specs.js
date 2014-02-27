describe("Game", function() {
  describe("initialize", function() {
    it("creates the board and two players when it is initialized", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      // testGame.gameBoard.length.should.equal(9);
      testGame.player1.should.equal("X");
      testGame.player2.should.equal("O");
    });
  });
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates 9 spaces when it is initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      console.log(testBoard.boardSpaces);
      testBoard.boardSpaces.length.should.equal(9);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoord.should.equal(1);
      testSpace.yCoord.should.equal(2);
    });
  });

  describe("create", function() {
    it("should initialze a space", function() {
      var testSpace = Space.create(1, 2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
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

