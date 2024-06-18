/// <reference types="Cypress" />

describe('page navigation', () => {

  it('should navigate between pages', () => {
    // Visit home page
    cy.visit('http://localhost:5173/');

    // Select link "About" then click it
    cy.get('[data-cy="header-about-link"]').click();

    // Verify that we successfully switched to the new page 
    cy.location('pathname').should('equal', '/about')

    // Click on "go back" arrow
    cy.go('back');
    cy.location('pathname').should('equal', '/');

    // Select link "Home" then click it
    cy.get('[data-cy="header-home-link"]').click();

    // Check that we are on home page
    cy.location('pathname').should('equal', '/');
  });

})