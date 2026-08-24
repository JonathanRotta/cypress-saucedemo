describe('Testes do site Sauce Demo', ()=>{

    beforeEach(()=>{

        cy.login()

        

    });

    
    it('deve apresentar a lista de produtos', () => {
    cy.get('.inventory_list')
      .should('be.visible')
  })




})