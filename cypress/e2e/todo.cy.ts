/// <reference types="cypress" />

describe('todo e2e', () => {
    beforeEach(() => {
        cy.login()
        cy.visit(`${Cypress.config().baseUrl}todo/list`)
    })

    it('should be able to add a todo', () => {
        const todoName = "nouvelle todo"
        
        cy.get('.todo-list').then(($el) => {
            const todoListLength = Cypress.$('.todo-list li').length
            cy.get('.todo-name-input').focus().type(todoName)
            cy.get('.tag').first().click()
            cy.get('button[type="submit"]').focus().click()
            cy.get('.todo-list li').should('have.length', todoListLength + 1)
            cy.get('.todo-name-input').should('have.value', '')
        })
    })
})