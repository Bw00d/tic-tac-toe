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
      var testPlayer = Player.create("Patti","X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Player", function() {
  describe("initialize", function() {
    it("sets a player with a name and a value of X or O", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("Bwood", "X");
      testPlayer.playerName.should.equal("Bwood");
      testPlayer.playerValue.should.equal("X");
    });
  });

  describe("create", function() {
    it("should initialize a player", function() {
      var testPlayer = Player.create("Bwood","X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});



// describe("board", function() {
//   it("contains nine spaces", function() {
//     board.length.should.equal(9);
//   });
// });
