if (MochaWeb) {
  MochaWeb.testOnly(function () {
    describe("server side smoke test", function () {
      it("runs successfully", function () {
        chai.assert(true);
      });
    });
  });
}
