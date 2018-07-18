//////////////////////////////////////////////////////
// Count a certain element and do assertions
/////////////////////////////////////////////////////

// Equal
cy
  .get('.search-result')
  .its('length')
  .should('eq', 15);

// Greater than
cy
  .get('.search-result')
  .its('length')
  .should('be.gt', 10);

// More assertions:
// https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions
