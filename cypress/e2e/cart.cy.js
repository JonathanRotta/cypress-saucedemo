describe('Verificando carrinho', ()=>{

    beforeEach(()=>{

        cy.login()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.location('pathname').should('eq','/cart.html')


    });

    
    it('verificando se item foi adicionado ao carrinho', () => {
        cy.get('[data-test="inventory-item"]')
        .should('have.length', 1)
        .within(()=>{
            cy.get('[data-test="inventory-item-name"]')
            .should('have.text','Sauce Labs Backpack')
        })

    });

    it('removendo item do carrinho', () => {
        
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
    
    
});