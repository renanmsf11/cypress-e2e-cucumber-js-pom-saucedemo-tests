// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default

// module.exports = defineConfig({
//   e2e: {
//     chromeWebSecurity: false,
//     defaultCommandTimeout:10000,
//     viewPortHeight:900,
//     viewportWidth:1400,
//     // "specPattern": "**/*.feature",
//     specPattern: [
//       'cypress/e2e/api/**/*.cy.{js,ts}',          // Testes de API tradicionais
//       '**/*.feature',        // Testes com Cucumber
//     ],
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', cucumber())
//     },
//   },
// });
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewPortHeight: 900,
    viewportWidth: 1400,
    specPattern: [
      'cypress/e2e/api/**/*.cy.{js,ts}',  // API tests
      '**/*.feature',                     // Cucumber tests
    ],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    video: true, // 
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true, 

    // Configuração para indicar onde estão os step definitions
    env: {
      cucumber: {
        step_definitions: "cypress/support/step_definitions"
      }
    }
  },
});
