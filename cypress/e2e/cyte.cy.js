describe('Testes do site Sauce Demo', ()=>{

    beforeEach(()=>{

        cy.visit('https://www.saucedemo.com/')

    })

    it('deve autenticar o usuário ao informar credenciais válidas', () => {
    
        cy.get('#user-name')
        .should('be.visible')
        .type('standard_user')
        .should('have.value','standard_user')

        cy.get('#password')
        .should('be.visible')
        .type('secret_sauce')
        .should('have.value','secret_sauce')

        cy.get('#login-button')
        .click()

        cy.location('pathname').should('eq', '/inventory.html')
        


    });


})