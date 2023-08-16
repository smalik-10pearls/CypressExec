import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../MyTests/pages/LoginPage';
// import cypress from 'cypress';

Given('User is at the login page', () => {
  // Code to navigate to the login page
  cy.visit("https://petstore.octoperf.com");
  cy.contains('Enter the Store').click();
  cy.contains('Sign In').click();
});

When('I enter credentials username as {string} and password as {string}', (username, password)=> {
  // Code to enter username and password
    LoginPage.login(username, password)
});

Then('I select dropdown as {string}', (dropdownValue) => {
  // Code to click the login button
  LoginPage.selectDropdown(dropdownValue)
});