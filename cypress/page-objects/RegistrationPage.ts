export class RegistrationPage {
    navigate() {
      cy.visit('/customer/account/create/');
    }
  
    fillRegistrationForm(user) {
      cy.get('#firstname').type(user.firstName);
      cy.get('#lastname').type(user.lastName);
      cy.get('#email_address').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('#password-confirmation').type(user.password);
    }
  
    submitForm() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    verifySuccessMessage() {
      cy.contains('Thank you for registering').should('be.visible');
    }
  }
  