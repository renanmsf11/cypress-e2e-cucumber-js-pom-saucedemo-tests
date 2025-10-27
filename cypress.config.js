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

      // Suporte ao Allure Reports
      allureWriter(on, config);

      return config;
    },

    // 📹 Configurações de vídeo e evidências
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    // 📊 Configuração do Allure
    reporter: "allure-mocha",
    reporterOptions: {
      resultsDir: "allure-results",
    },

    // 📘 Caminho dos step definitions do Cucumber
    env: {
      cucumber: {
        step_definitions: "cypress/support/step_definitions",
      },
    },
  },
});
