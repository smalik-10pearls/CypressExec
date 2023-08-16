// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

import 'cypress-xpath';


Cypress.Commands.add('getCookieValue', (cookieName) => {
    cy.getCookie(cookieName).then((cookie) => {
        if (cookie) {
            return cookie.value;
        } else {
            return null;
        }
    });
});

Cypress.Commands.add('loginWithTestData', (user, password) => {

         cy.get('#loginFormEmailInput').should('be.visible').type(user);
         cy.get('#loginFormPasswordInput').should('be.visible').type(password);
         cy.get('#loginFormSubmitButton').should('be.visible').click();
});

// Cypress.Commands.add('selectDropdownUsingValue', (dropdownValue) => {

//     cy.get('').each(($el, index, $list)=>{

//         if($el.text==="")
//         {
//             $el.click();
//         }
//     })
