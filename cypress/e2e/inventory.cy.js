describe('Testes do site Sauce Demo', ()=>{

    beforeEach(()=>{

        cy.login()

    
    });

    
    it('deve apresentar a lista de produtos', () => {
        cy.get('.inventory_list')
        .should('be.visible')
    })

    it('quando adicionar item, deve exibir a quantidade e o item no carrinho', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.location('pathname').should('eq','/cart.html')

        cy.get('[data-test="inventory-item"]')
        .should('have.length', 1)
        .within(()=>{
            cy.get('[data-test="inventory-item-name"]')
            .should('have.text','Sauce Labs Backpack')
        })
        


    });






})
