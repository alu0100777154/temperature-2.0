var expect = chai.expect;

describe("Tests temperature", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var temp = new Temperatura();
      expect(temp.valor).to.equal(0);
    });

    it("should set cow's name if provided", function() {
      var temp = new Temperatura(5,"C");
      expect(temp.tipo).to.equal("C");
    });
  });

/*  describe("#greets", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new Cow()).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var greetings = (new Cow("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby");
    });
  });*/
});