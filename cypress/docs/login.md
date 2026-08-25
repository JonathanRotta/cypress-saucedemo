# Casos de teste — Login

Este documento registra somente os cenários automatizados em `cypress/e2e/login.cy.js`.

## Pré-condição

O usuário deve acessar a página inicial da aplicação.

## Casos automatizados

### CT-LOGIN-001 — Autenticar com credenciais válidas

**Ações:**

1. Informar o usuário `standard_user`.
2. Informar a senha `secret_sauce`.
3. Clicar no botão de login.

**Resultado esperado:** o usuário deve ser direcionado para `/inventory.html`.

### CT-LOGIN-002 — Tentar autenticar com senha inválida

**Ações:**

1. Informar o usuário `standard_user`.
2. Informar uma senha inválida.
3. Clicar no botão de login.

**Resultados esperados:**

- A mensagem de erro deve estar visível e informar que o usuário e a senha não correspondem.
- O usuário deve permanecer na página inicial (`/`).

### CT-LOGIN-003 — Tentar autenticar com usuário inválido

**Ações:**

1. Informar um usuário inválido.
2. Informar a senha `secret_sauce`.
3. Clicar no botão de login.

**Resultados esperados:**

- A mensagem de erro deve estar visível e informar que o usuário e a senha não correspondem.
- O usuário deve permanecer na página inicial (`/`).

### CT-LOGIN-004 — Tentar autenticar com usuário e senha inválidos

**Ações:**

1. Informar um usuário inválido.
2. Informar uma senha inválida.
3. Clicar no botão de login.

**Resultados esperados:**

- A mensagem de erro deve estar visível e informar que o usuário e a senha não correspondem.
- O usuário deve permanecer na página inicial (`/`).

### CT-LOGIN-005 — Tentar autenticar sem credenciais

**Ação:** clicar no botão de login sem preencher usuário e senha.

**Resultados esperados:**

- A mensagem de erro deve estar visível e informar que o usuário é obrigatório.
- O usuário deve permanecer na página inicial (`/`).
