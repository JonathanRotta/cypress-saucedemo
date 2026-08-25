# Casos de teste — Login

Este documento registra os casos de teste atualmente automatizados para a tela de login do Sauce Demo.

## Pré-condição

O usuário deve acessar a página inicial da aplicação.

## Casos automatizados

### CT-LOGIN-001 — Realizar login com credenciais válidas

**Ações:**

1. Informar um usuário válido.
2. Informar a senha válida.
3. Clicar no botão de login.

**Resultado esperado:** o usuário deve ser autenticado e direcionado para a página `/inventory.html`.

### CT-LOGIN-002 — Tentar login com senha inválida

**Ações:**

1. Informar um usuário válido.
2. Informar uma senha inválida.
3. Clicar no botão de login.

**Resultados esperados:**

- Uma mensagem deve informar que o usuário e a senha não correspondem.
- O usuário deve permanecer na página inicial.

### CT-LOGIN-003 — Tentar login com usuário inválido

**Ações:**

1. Informar um usuário inválido.
2. Informar a senha válida.
3. Clicar no botão de login.

**Resultados esperados:**

- Uma mensagem deve informar que o usuário e a senha não correspondem.
- O usuário deve permanecer na página inicial.

### CT-LOGIN-004 — Tentar login com usuário e senha inválidos

**Ações:**

1. Informar um usuário inválido.
2. Informar uma senha inválida.
3. Clicar no botão de login.

**Resultados esperados:**

- Uma mensagem deve informar que o usuário e a senha não correspondem.
- O usuário deve permanecer na página inicial.

### CT-LOGIN-005 — Tentar login sem informar credenciais

**Ação:** clicar no botão de login sem preencher os campos de usuário e senha.

**Resultados esperados:**

- Uma mensagem deve informar que o usuário é obrigatório.
- O usuário deve permanecer na página inicial.
