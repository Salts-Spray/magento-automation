import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { RegistrationPage } from '../../page-objects/RegistrationPage';
import { LoginPage } from '../../page-objects/LoginPage';
import { DashboardPage } from '../../page-objects/DashboardPage';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

let userData;

Given('I am on the registration page', () => {
  registrationPage.navigate();
});

When('I enter valid registration details', () => {
  userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: `john.doe${Date.now()}@example.com`,
    password: 'Password123',
  };
  registrationPage.fillRegistrationForm(userData);
});

When('I submit the registration form', () => {
  registrationPage.submitForm();
});

Then('I should see a registration success message', () => {
  registrationPage.verifySuccessMessage();
});

When('I log out', () => {
  dashboardPage.logout();
});

Given('I am on the login page', () => {
  loginPage.navigate();
});

When('I enter the same login credentials', () => {
  loginPage.fillLoginForm(userData);
});

When('I submit the login form', () => {
  loginPage.submitForm();
});

Then('I should be redirected to the user dashboard', () => {
  dashboardPage.verifyAccountDashboard();
});
