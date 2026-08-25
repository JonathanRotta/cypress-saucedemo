# Casos de teste — Inventário

Este documento registra os casos de teste atualmente automatizados para a tela de inventário do Sauce Demo.

## Pré-condição

O usuário deve realizar login com credenciais válidas e acessar a página `/inventory.html`.

## Casos automatizados

### CT-INV-001 — Exibir a lista de produtos

**Ação:** acessar a tela de inventário.

**Resultado esperado:** a lista de produtos deve estar visível.

### CT-INV-002 — Adicionar um produto ao carrinho

**Ação:** adicionar o produto `Sauce Labs Backpack` ao carrinho.

**Resultado esperado:** o ícone do carrinho deve exibir a quantidade `1`.

### CT-INV-003 — Remover um produto dentro do carrinho

**Ações:**

1. Adicionar o produto `Sauce Labs Backpack` ao carrinho.
2. Acessar a página do carrinho.
3. Remover o produto.

**Resultados esperados:**

- O produto deve desaparecer do carrinho.
- O indicador de quantidade do carrinho não deve mais ser exibido.
