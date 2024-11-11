export class DashboardPage {
  verifyAccountDashboard() {
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
    cy.get('.page-title').should('contain.text', 'My Account');
  }

  logout() {
    // Click the "Change" button to open the dropdown menu
    cy.get('.customer-welcome button[data-action="customer-menu-toggle"]').first().click();

    // Wait for the menu to appear
    cy.get('.customer-menu', { timeout: 5000 });

    // Click the "Sign Out" link within the dropdown menu
    cy.get('.authorization-link').children().last().click({force: true})

    // Verify the user is logged out
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/');
  }
}
