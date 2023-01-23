const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://192.168.1.222:8080/bank_client",
		specPattern: "cypress/idbank/**/*.cy.{js,jsx,ts,tsx}",
	},
});
