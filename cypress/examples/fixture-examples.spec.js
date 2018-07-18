//////////////////////////////////////////////////////
// Checking status for all URL's
/////////////////////////////////////////////////////

// fixtures/example.json
{
  "Google": "https://www.google.com",
  "Amazon": "https://www.amazon.com",
  "Facebook": "https://www.facebook.com"
}

// Cypress code
cy.fixture('example.json').each((items) => {

  Object.keys(items).forEach((item) => {

    // Just curl the urls provided
    cy.request(`${items[item]}`);

    // OR expect to return a 200
    cy.request(`${items[item]}`).then((response) => {

      expect(response.status).to.eq(200)

    })
  });
});

//////////////////////////////////////////////////////
// Usage with different JSON tree structure
/////////////////////////////////////////////////////

// fixtures/example.json
{
  "add": {
  "method": "POST",
  "url": "/test",
  "requestPayload": {
    "note": "test",
    "pileType": {
      "pileTypeKey": "RECL ",
      "pileTypeDescr": "Out of reclaim",
      "isAlwaysZeroTonnes": 0,
      "volumeType": null,
      "requiresBrand": null
      },
    "reclaimOnly": false,
    "dumpOnly": false
    }
  }
}

// Cypress code
cy.fixture('example.json').as('myExample');

  cy.get('@myExample').then((example) =>

      cy.request(example.add.method, example.add.url)
  )

});

//////////////////////////////////////////////////////
// Using fixture to fill in form
/////////////////////////////////////////////////////

// fixtures/example.json

// Given that input fields are structured like this:
// #prefix_firstname
// #prefix_lastname
// #prefix_email

{
  "firstname": "Volkan",
  "lastname": "Ogretmen",
  "email": "cypress-examples@example.com"
}

// Cypress code
cy.fixture('example.json').each((items) => {

  Object.keys(items).forEach((item) => {

      cy.get(`#prefix_${item}`).type(items[item]);

  });

});
