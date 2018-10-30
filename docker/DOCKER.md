```
main repo
  |
  cypress
  |
  └───config
  │   │   
  │   └───fixtures                  // Json files to use within your tests
  |   └───plugins                   // Installed plugins
  |   └───support                   
  |     │   commands.js             // To create awesome functions to use within your tests
  |     │   index.js                // This file is loaded before the tests run
  │   
  └───tests
  │   │   
  │   └───features                  // All Gherkin files go here
  |   └───step_definitions          // The actual tests (Read from the Gherkin files)
  |
  |   README.MD                     // You are looking at it!

cypress.json                        // Cypress config file
```

## Remove all docker images
`docker rm -f $(docker ps -a -q)`

`docker rmi -f $(docker images -q)`

## Error: Couldn't connect to Docker daemon. Is it running?
It's probably because you are running Docker version 18.09*. Try installing an older version.

To see all docker installations. Probably docker-ce and docker-ce-cli are visible.

`dpkg -l | grep -i docker`

`sudo apt-get purge docker-ce`

`sudo apt-get purge docker-ce-cli`

## Check again if everything is uninstalled:

`dpkg -l | grep -i docker`

`sudo apt-get update`

`sudo apt install docker-ce=18.03.1~ce~3-0~ubuntu`

## Check if docker is running:

`docker ps`
