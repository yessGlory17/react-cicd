describe("Youtube Test", () => {
  it("tests Youtube Test", () => {
    cy.viewport(1989, 1367);
    cy.visit("https://www.youtube.com/");
    cy.get("#masthead-container input").click();
    cy.get("#masthead-container input").type("Ozgrur kurucan");
    cy.get("#search-icon-legacy > yt-icon div").click();
    cy.get("ytd-channel-renderer:nth-of-type(2) img").click();
  });
});
