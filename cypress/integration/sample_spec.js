describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(false);
  });
});

describe("My Second Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("My Third Test", () => {
  it("finds the content 'type'", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });
});

describe("My Fourth Test", () => {
  it("clicks the link 'type'", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
  });
});

describe("My Fifth Test", () => {
  it("clicking 'type' navigates to a new url", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
  });
});
