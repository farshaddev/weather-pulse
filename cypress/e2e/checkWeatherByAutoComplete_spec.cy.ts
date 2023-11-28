describe("AutoComplete Search", () => {
	it("should search throw the autocomplete and view all the weather info", () => {
		// Visit the homepage
		cy.visit("http://localhost:3000");

		// Find and click on the search autocomplete
		cy.get('[data-testid="search-input"]').click();

		// Find and type in the search input
		cy.get('[data-testid="search-input"]').type("London");

		// Find and click on the first suggestion
		cy.get('[data-testid="suggested-city"]').first().click();

		// Check if the weather info is visible
		cy.get('[data-testid="weather-info"]').should("be.visible");

		// Check if today temperature is visible
		cy.get('[data-testid="today-temp"]').should("be.visible");

		// Check map popup is visible
		cy.get('[data-testid="map-popup"]').should("be.visible");

		// Check today hourly forecat to be visible
		cy.get('[data-testid="hourly-forecast"]').should("be.visible");

		// Check today air pollution to be visible
		cy.get('[data-testid="aqi"]').should("be.visible");

		// Check today daily forecast to be visible
		cy.get('[data-testid="daily-forecast"]').should("be.visible");
	});
});
