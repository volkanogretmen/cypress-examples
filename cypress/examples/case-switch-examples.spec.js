//////////////////////////////////////////////////////
// Using case switch to use same code with different variables
/////////////////////////////////////////////////////

// example.feature
Then it should load the "home" page
...
Then it should load the "contact" page

// Cypress code
then(/^it should load the "(.*?)" page/, (page) => {

  switch (page) {
    case 'home':
      // Do something here

      break;

    case 'contact':
      // Do something else here

      break;

    default:
      console.log('Please fill in correct page');
  }

})
