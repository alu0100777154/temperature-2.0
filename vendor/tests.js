var expect = chai.expect,
    should = chai.should();
/*
suite('temperature', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['vendor/index.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });

    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
*/

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


  describe("#tipo", function() {
    it("should throw if no type is passed in", function() {
      expect(function() {
        (new Temperatura()).devolver();
      }).to.throw(Error);
    });
  });

});
