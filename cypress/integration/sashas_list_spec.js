describe("Localhost test", () => {
  it("visits app running on localhost and checks for 'Sasha's List'", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Sasha's List");
  });

  it("visits app running on localhost and checks for 'Your Guide to Dogfriendly St. Pete'", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Your Guide to Dogfriendly St. Pete");
  });

  it("checks for 'Pinellas Ale Works'", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Pinellas Ale Works");
  });

  it("clicks the link containing 'Pinellas Ale Works'", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Pinellas Ale Works").click();
  });

  it("checks for 'Login/Signup", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Login/Signup");
  });

  it("clicks the 'Login/Signup' link", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Login/Signup").click();
  });

  // describe("My Sixth Test", () => {
  //   it("clicking 'type' navigates to a new url", () => {
  //     cy.visit("http://localhost:3000");

  //     cy.contains("Login/Signup").click();

  //     cy.url().should("include", "/auth");

  //     cy.get("email")
  //       .type("fake@email.com")
  //       .should("have.value", "fake@email.com");
  //   });
  // });
});
