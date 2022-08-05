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
import "cypress-localstorage-commands"

Cypress.Commands.add('getToken', () => { 

    cy.request({
        method: 'POST',
        url: '/login/auth',
        headers: {
            'Content-Type':'application/json',
        },
        body: {
            "email": "email@email.com",
            "password": "Senha@123"
        }

    })
    .then(body => {
        const tokenAuth = body.accessToken;
        cy.setLocalStorage("auth", tokenAuth);
    })
})
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
