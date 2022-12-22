/// <reference types="cypress" />

const wrongEmail = "test@wrong.fr"
const wrongPassword = "wrongpassword"

const rightEmail = "jhon.doe@gmail.com"
const rightPassword = "password"

Cypress.Commands.add('login', () => {
    cy.visit(`${Cypress.config().baseUrl}login`)
    cy.get('input[type="email"]').focus().type(rightEmail)
    cy.get('input[type="password"]').focus().type(rightPassword)
    cy.get('button[type="submit"]').focus().click()
})

Cypress.Commands.add('badLogin', () => {
  cy.visit(`${Cypress.config().baseUrl}login`)
  cy.get('input[type="email"]').focus().type(wrongEmail)
  cy.get('input[type="password"]').focus().type(wrongPassword)
  cy.get('button[type="submit"]').focus().click()
})

declare namespace Cypress {
    interface Chainable<Subject> {
      login(): Chainable<any>
      badLogin(): Chainable<any>
    }
  }