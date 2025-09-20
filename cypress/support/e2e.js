// Import commands.js using ES2015 syntax:
import "cypress-mochawesome-reporter/register";
import "./commands";

// screenshot after each tests
afterEach(() => cy.screenshot({ overwrite: true }));

// Help hiding requests in command logs
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
    if (opts.displayName === "script" || opts.name === "request") { return; }
    return origLog(opts, ...other);
};