# Casos de teste — Inventário

Este documento registra somente os cenários automatizados em `cypress/e2e/inventory.cy.js`.

## Pré-condição

O usuário deve estar autenticado e na página `/inventory.html`.

## Casos automatizados

### CT-INV-001 — Exibir a lista de produtos

**Ação:** acessar a tela de inventário.

**Resultado esperado:** a lista deve conter exatamente seis produtos.

### CT-INV-002 — Adicionar os dois primeiros produtos ao carrinho

**Ações:**

1. Adicionar o primeiro produto da lista ao carrinho.
2. Verificar o indicador de quantidade do carrinho.
3. Adicionar o segundo produto da lista ao carrinho.
4. Verificar novamente o indicador de quantidade do carrinho.

**Resultados esperados:**

- Após a primeira adição, o indicador do carrinho deve exibir `1`.
- O botão do primeiro produto deve estar visível com o texto `Remove`.
- Após a segunda adição, o indicador do carrinho deve exibir `2`.
- O botão do segundo produto deve estar visível com o texto `Remove`.

### CT-INV-003 — Adicionar o Sauce Labs Backpack ao carrinho

**Ação:** adicionar o produto `Sauce Labs Backpack` ao carrinho.

**Resultados esperados:**

- O indicador de quantidade do carrinho deve exibir `1`.
- O botão de remoção do produto deve estar visível com o texto `Remove`.
