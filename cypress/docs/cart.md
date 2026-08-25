# Casos de teste — Carrinho

Este documento registra somente os cenários automatizados em `cypress/e2e/cart.cy.js`.

## Pré-condições

Antes de cada cenário automatizado:

1. O usuário é autenticado com credenciais válidas.
2. O produto `Sauce Labs Backpack` é adicionado ao carrinho.
3. O usuário acessa a página `/cart.html`.
4. O endereço da página é validado.

## Casos automatizados

### CT-CART-001 — Exibir o produto adicionado ao carrinho

**Ação:** visualizar os produtos presentes no carrinho.

**Resultados esperados:**

- O carrinho deve conter exatamente um item.
- O item deve ser o produto `Sauce Labs Backpack`.

### CT-CART-002 — Remover o produto do carrinho

**Ações:**

1. Confirmar que o carrinho contém exatamente um item.
2. Confirmar que o item é o produto `Sauce Labs Backpack`.
3. Verificar se o botão de remoção está visível.
4. Clicar no botão de remoção.

**Resultados esperados:**

- Nenhum produto deve permanecer na lista do carrinho.
- O indicador de quantidade do carrinho não deve mais existir.
