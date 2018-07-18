//////////////////////////////////////////////////////
// Log all contents of cookies in the Cypress log
// We need to using stringify as .getCookies() returns an object
/////////////////////////////////////////////////////

cy.getCookies().then((cookies) => {
            cy.log(JSON.stringify(cookies))
          })
      });
