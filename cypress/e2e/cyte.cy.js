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

    it('deve notificar o usuário ao informar senha inválida', () => {

        cy.get('#user-name')
        .type('standard_user')

        cy.get('#password')
        .type('senha_invalida', { log: false })

        cy.get('#login-button')
        .click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password do not match')

        cy.location('pathname').should('eq', '/')

    });

    it('deve notificar o usuário ao informar login inválido', () => {

        cy.get('#user-name')
        .type('usuario_invalido')

        cy.get('#password')
        .type('secret_sauce', { log: false })

        cy.get('#login-button')
        .click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password do not match')

        cy.location('pathname').should('eq', '/')

    });


})
