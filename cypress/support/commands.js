Cypress.Commands.add('login', () => {
      
    cy.visit('/')

    cy.get('#user-name')
        .type('standard_user')

    cy.get('#password')
        .type('secret_sauce', { log: false })

    cy.get('#login-button')
        .click()

    cy.location('pathname')
        .should('eq', '/inventory.html')
    
    
  
})