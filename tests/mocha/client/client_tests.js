if (MochaWeb) {
  MochaWeb.testOnly(function () {
    describe("client side test suite", function () {
      it("runs successfully", function () {
        chai.assert(true);
      });
    });
  });
}
