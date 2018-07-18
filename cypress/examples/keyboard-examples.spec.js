//////////////////////////////////////////////////////
// Use keyboard functions inside tests
/////////////////////////////////////////////////////

// Type "hello" and press <ENTER>
cy.get('.certainInput').type('hello').type('{enter}');

// More info:
// https://docs.cypress.io/api/commands/type.html#Arguments
