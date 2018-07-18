//////////////////////////////////////////////////////
// Loop through all elements containing a certain class/attribute
/////////////////////////////////////////////////////

cy.get('.myclass .input-element[data-required="true"]').each(($el) => {

    cy.wrap($el).should('have.class', 'input-element--error');

});
