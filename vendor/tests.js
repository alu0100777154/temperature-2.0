var expect = chai.expect;

var sandbox;
  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });


describe("Tests temperature", function() {
  describe("constructor", function() {
    it("should have a default temp", function() {
      var temp = new Temperatura();
      expect(temp.valor).to.equal(0);
    });
    it("should set temp's type if provided", function() {
      var temp = new Temperatura(5,"C");
      expect(temp.tipo).to.equal("C");
    });
  });
/*
  describe("#tipo", function() {
    it("should throw if no type is passed in", function() {
      expect(function() {
        (new Temperatura()).devolver();
      }).to.throw(Error);
    });
  });
*/
    describe("#tipo", function() {
    it("should log an error if no type is passed in", function() {
      (new Temperatura()).devolver();

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing type");
    });
   });
});