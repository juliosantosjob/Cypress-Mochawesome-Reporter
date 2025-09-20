require("dotenv").config();

const { defineConfig } = require("cypress");
const { setupEnv } = require("./cypress/utils/enviroments");

module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        reportPageTitle: "Relatório de Testes",
        embeddedScreenshots: true
    },
    e2e: {
        setupNodeEvents(on, config) {
            setupEnv(config);
            require("cypress-mochawesome-reporter/plugin")(on);
            return config;
        },
    },
    env: {
        SECRET_EMAIL: process.env.SECRET_EMAIL,
        SECRET_PASSWORD: process.env.SECRET_PASSWORD
    }
});
