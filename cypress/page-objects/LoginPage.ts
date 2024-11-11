export class LoginPage {
  navigate() {
    cy.visit('/customer/account/login/');
  }

  fillLoginForm(user) {
    cy.get('#email').type(user.email);
    cy.get('#pass').type(user.password);
  }

  submitForm() {
    cy.get('#send2').click(); // Updated selector
  }

  verifyLoginSuccess() {
    cy.contains('Welcome,').should('be.visible');
  }
}
