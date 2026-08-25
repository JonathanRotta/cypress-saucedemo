describe('Visualizando produtos na tela inventory', ()=>{

    beforeEach(()=>{

        cy.login()

    
    });

    
    it('deve apresentar a lista de produtos', () => {
        cy.get('.inventory_list')
        .should('be.visible')
    })

    it('quando adicionar item no carrinho, deve ser exibido a quantidade no ícone', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

        cy.get('[data-test="remove-sauce-labs-backpack"]')
        .should('be.visible')
        .and('have.text', 'Remove')

    });

    





})
