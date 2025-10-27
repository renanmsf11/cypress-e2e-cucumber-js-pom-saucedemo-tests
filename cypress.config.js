const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: [
      "cypress/e2e/api/**/*.cy.{js,ts}", // API tests
      "**/*.feature",                    // Cucumber tests
    ],

    setupNodeEvents(on, config) {
      // Suporte ao Cucumber
      on("file:preprocessor", cucumber());

      // Suporte ao Allure Reports (Shelex)
      allureWriter(on, config);

      return config;
    },

    // 🎥 Evidências e artefatos
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    // 🧪 Configurações adicionais do ambiente
    env: {
      cucumber: {
        step_definitions: "cypress/support/step_definitions",
      },
      allure: true, // habilita Allure plugin
      allureResultsPath: "allure-results",
    },
  },
});
