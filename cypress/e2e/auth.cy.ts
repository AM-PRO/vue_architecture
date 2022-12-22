/// <reference types="cypress" />

describe('auth e2e', () => {
  it('should redirect to login when not authenticated', () => {
    cy.visit(`${Cypress.config().baseUrl}todo/list`)
    cy.url().should(
      'be.equal',
      `${Cypress.config().baseUrl}login`
    )
  })

  it('should not redirect to login when not authenticated', () => {
    cy.visit(`${Cypress.config().baseUrl}`)
    cy.url().should(
      'be.equal',
      `${Cypress.config().baseUrl}`
    )
  })

  it('should not be able to login', () => {
    cy.badLogin()
    cy.get(".error-login").should('be.visible')
  })

  it('should redirect to do list', () => {
    cy.login()
    cy.url().should(
      'be.equal',
      `${Cypress.config().baseUrl}todo/list`
    )
  })

  it('should be able to logout', () => {
    cy.login()
    cy.get('.logout-link').focus().click()
    cy.url().should(
      'be.equal',
      `${Cypress.config().baseUrl}login`
    )
  })
})