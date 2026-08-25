describe('Visualizando produtos na tela inventory', () => {
  const adicionarProdutoPorPosicao = (posicao) => {
    cy.get('[data-test="inventory-item"]')
      .eq(posicao)
      .within(() => {
        cy.get('[data-test^="add-to-cart"]').click()
        cy.get('[data-test^="remove"]')
          .should('be.visible')
          .and('have.text', 'Remove')
      })
  }

  beforeEach(() => {
    cy.login()
  })

  it('deve apresentar a lista com 6 produtos', () => {
    cy.get('.inventory_list')
      .find('[data-test="inventory-item"]')
      .should('have.length', 6)
  })

  it('deve adicionar o primeiro e o segundo produto ao carrinho', () => {
    adicionarProdutoPorPosicao(0)

    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '1')

    adicionarProdutoPorPosicao(1)

    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '2')
  })

  it('quando adicionar item no carrinho, deve ser exibido a quantidade no ícone', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '1')

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Remove')
  })
})
