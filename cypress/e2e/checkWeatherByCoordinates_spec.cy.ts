describe("Map Coordinates", () => {
	it("should load the map and set location and view all the weather info", () => {
		// Visit the homepage
		cy.visit("http://localhost:3000");

		// Find the Leaflet map container
		cy.get(".leaflet-container").as("mapContainer");

		// click on a location on the map
		cy.get("@mapContainer").click(200, 200);

		// click on a location confirm coordinates
		cy.get('[data-testid="confirm-coordinates"]').click();

		// Check if a marker is added to the clicked location
		cy.get(".leaflet-marker-icon").should("have.length", 1);

		// // Check if the weather info is visible
		cy.get('[data-testid="weather-info"]').should("be.visible");

		// // Check if today temperature is visible
		cy.get('[data-testid="today-temp"]').should("be.visible");

		// // Check map popup is visible
		cy.get('[data-testid="map-popup"]').should("be.visible");

		// // Check today hourly forecat to be visible
		cy.get('[data-testid="hourly-forecast"]').should("be.visible");

		// // Check today air pollution to be visible
		cy.get('[data-testid="aqi"]').should("be.visible");

		// // Check today daily forecast to be visible
		cy.get('[data-testid="daily-forecast"]').should("be.visible");
	});
});
