//////////////////////////////////////////////////////
// Create a server and a route to wait for a certain
// XHR request to finish before moving on with your test
/////////////////////////////////////////////////////

cy.server();
cy.route('**/my/xhr/route=**').as('myXhr'); //.as creates an alias

cy.wait('@myXhr')
