//////////////////////////////////////////////////////
// Use actual date/time with moment()
/////////////////////////////////////////////////////

const tomorrow = Cypress.moment().add(1, 'day').format('YYYY-MM-DD');

// Example assertion
cy.url().should('contain', tomorrow);

// More info:
// https://momentjs.com/
