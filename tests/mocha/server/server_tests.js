if (MochaWeb) {
  MochaWeb.testOnly(function () {
    describe("server side test suite", function () {
      it("runs successfully", function () {
        chai.assert(true);
      });
    });
  });
}
