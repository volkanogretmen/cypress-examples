//////////////////////////////////////////////////////
// Login without using the UI
/////////////////////////////////////////////////////

Cypress.Commands.add('login', () => {
  cy.request('/account/login')
      .its('body')
      .then((body) => {
        const $html = Cypress.$(body)
        const csrf  = $html.find("input[name=login\\[_token\\]]").val()
        cy.request({
            method: 'POST',
            url: '/account/login',
            form: true,
            body: {
              'login[username]': 'user1@example.com',
              'login[password]': 'test',
              'login[submit]': null,
              'login[_token]': csrf
            }
          })

      })
  })

// Cypress code
cy.login();

//////////////////////////////////////////////////////
// Login with Basic Auth
/////////////////////////////////////////////////////

cy.visit('http://localhost:8888', {
            auth: {
                username: 'user',
                password: 'test'
            }
})
