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

    
    it('quando adicionar item, se estiver dentro do carrinho, e clicar em remover, o item deve desaparecer', () => {
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

        cy.get('[data-test="remove-sauce-labs-backpack"]')
        .should('be.visible')
        .click()

        cy.get('[data-test="inventory-item"]')
        .should('not.exist')

        cy.get('[data-test="shopping-cart-badge"]')
        .should('not.exist')


    });




})
