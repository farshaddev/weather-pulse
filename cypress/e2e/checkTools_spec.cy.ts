describe("Check Tools", () => {
	it("should open and close the menu", () => {
		// Visit the homepage
		cy.visit("http://localhost:3000");

		// Find and click on the menu button
		cy.get('[data-testid="toggle-menu-btn"]').click();

		// Check if the menu is open
		cy.get('[data-testid="menu"]').should("have.class", "opacity-100");

		// Find and click on the close menu button
		cy.get('[data-testid="toggle-menu-btn"]').click();

		// Check if the menu is closed
		cy.get('[data-testid="menu"]').should("have.class", "opacity-0");
	});
	it("should switch theme to light or dark", () => {
		// Visit the homepage
		cy.visit("http://localhost:3000");

		// Find and click on the switch theme button
		cy.get('[data-testid="switch-theme-button"]').click();

		// Check if the theme is white
		cy.get('[data-testid="app"]').should("not.have.class", "dark");

		// Find and click on the close menu button
		cy.get('[data-testid="switch-theme-button"]').click();

		// Check if the menu is closed
		cy.get('[data-testid="app"]').should("have.class", "dark");
	});
});
