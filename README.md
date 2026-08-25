# Automação de testes com Cypress

Projeto de estudos de automação de testes end-to-end utilizando Cypress no site [Sauce Demo](https://www.saucedemo.com/).

Atualmente, os testes estão organizados por tela e cobrem os fluxos iniciais de login, inventário de produtos e carrinho de compras.

## Tecnologias

- JavaScript
- Node.js
- Cypress

## Pré-requisitos

Antes de começar, tenha o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd cyte
npm install
```

## Executando os testes

Para abrir a interface gráfica do Cypress:

```bash
npx cypress open
```

Para executar todos os testes pelo terminal:

```bash
npx cypress run
```

Para executar apenas um arquivo de teste:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Cenários automatizados

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de campos obrigatórios no login
- Exibição da lista de produtos
- Adição de produto ao carrinho
- Validação da quantidade de produtos no carrinho
- Exibição e remoção de produto do carrinho

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── inventory.cy.js
│   └── cart.cy.js
├── support/
│   ├── commands.js
│   └── e2e.js
└── docs/
    └── inventory.md
cypress.config.js
package.json
```

## Próximos passos

- Ampliar os testes do inventário e da ordenação de produtos
- Adicionar cenários com vários produtos no carrinho
- Automatizar o fluxo de checkout
- Adicionar relatórios de execução
- Configurar a execução dos testes em integração contínua

## Observação

Este projeto está em desenvolvimento e será atualizado conforme novos cenários forem automatizados.
