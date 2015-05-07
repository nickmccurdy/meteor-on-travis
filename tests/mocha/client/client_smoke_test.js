if (MochaWeb) {
  MochaWeb.testOnly(function () {
    describe("client side smoke test", function () {
      it("runs successfully", function () {
        chai.assert(true);
      });
    });
  });
}
