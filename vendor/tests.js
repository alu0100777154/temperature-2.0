var expect = chai.expect;
var assert = chai.assert;

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

describe('Temperatura', function() {
    it('valor', function() {
        var temp = new Temperatura;
        temp.set_valor(5);
        expect(temp.get_valor()).to.equal(5);
    });
    it('tipo', function() {
        var temp = new Temperatura;
        temp.set_tipo("F");
        expect(temp.get_tipo()).to.equal("F");
    });
    it('CtoF', function() {
        var temp = new Temperatura;
        temp.set_valor(45);
        temp.set_tipo("C");
        expect(temp.CtoF()).to.equal(113);
    });
    it('FtoC', function() {
        var temp = new Temperatura;
        temp.set_valor(113);
        temp.set_tipo("F");
        expect(temp.FtoC()).to.equal(45);
    });
});


describe("Blanket", function() {
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