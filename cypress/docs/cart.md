# Casos de teste — Carrinho

Este documento registra os casos de teste atualmente automatizados para a tela do carrinho do Sauce Demo.

## Pré-condições

- O usuário deve realizar login com credenciais válidas.
- O produto `Sauce Labs Backpack` deve ser adicionado ao carrinho.
- O usuário deve acessar a página `/cart.html`.

## Casos automatizados

### CT-CART-001 — Exibir o produto adicionado ao carrinho

**Ação:** visualizar os produtos presentes no carrinho.

**Resultados esperados:**

- O carrinho deve apresentar somente um item.
- O item apresentado deve ser o produto `Sauce Labs Backpack`.

### CT-CART-002 — Remover um produto do carrinho

**Ação:** clicar no botão de remoção do produto `Sauce Labs Backpack`.

**Resultados esperados:**

- O produto deve desaparecer da lista do carrinho.
- O indicador de quantidade do carrinho não deve mais ser exibido.
