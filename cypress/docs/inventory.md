# Casos de teste — Inventário

## Escopo

Este documento cobre a página `inventory.html` do Sauce Demo e os comportamentos iniciados nela: exibição do catálogo, ordenação, detalhes dos produtos, interação com o carrinho e menu lateral.

Os fluxos completos de login e checkout devem ser documentados separadamente em `login.md` e `checkout.md`.

## Dados e pré-condições

- URL: `https://www.saucedemo.com/`
- Usuário padrão: `standard_user`
- Senha: `secret_sauce`
- Salvo quando indicado o contrário, o usuário deve estar autenticado e na página `/inventory.html`.
- Cada caso deve começar com o carrinho vazio e sem depender da execução de outro caso.

## Acesso e estrutura da página

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-INV-001 | Acessar o inventário após login válido | Autenticar com o usuário padrão. | O usuário é direcionado para `/inventory.html` e a lista de produtos é exibida. |
| CT-INV-002 | Tentar acessar o inventário sem autenticação | Abrir `/inventory.html` sem realizar login. | O acesso é negado e uma mensagem informa que o usuário precisa estar autenticado. |
| CT-INV-003 | Exibir os componentes principais | Acessar o inventário. | Cabeçalho, logotipo, menu lateral, título `Products`, ordenação, lista de produtos e carrinho são apresentados. |
| CT-INV-004 | Exibir o carrinho vazio | Acessar o inventário sem adicionar produtos. | O ícone do carrinho é exibido sem badge de quantidade. |
| CT-INV-005 | Recarregar a página do inventário | Recarregar `/inventory.html` após autenticar. | A página continua acessível e o catálogo volta a ser apresentado sem erro. |

## Catálogo de produtos

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-INV-006 | Exibir todos os produtos | Acessar o inventário e contar os cards. | São apresentados 6 produtos. |
| CT-INV-007 | Exibir as informações de cada produto | Examinar todos os cards. | Cada produto apresenta imagem, nome, descrição, preço e botão `Add to cart`. |
| CT-INV-008 | Exibir nomes de produtos únicos | Capturar os nomes dos produtos. | Todos os nomes são preenchidos e não existem nomes duplicados. |
| CT-INV-009 | Exibir preços válidos | Capturar os preços dos produtos. | Todos os preços estão preenchidos, usam o formato monetário esperado e possuem valor maior que zero. |
| CT-INV-010 | Exibir imagens dos produtos | Examinar a imagem de cada card. | Cada imagem é carregada, possui descrição acessível e corresponde ao produto apresentado. |
| CT-INV-011 | Abrir produto pelo nome | Clicar no nome de um produto. | A página de detalhes do produto selecionado é aberta. |
| CT-INV-012 | Abrir produto pela imagem | Clicar na imagem de um produto. | A página de detalhes do mesmo produto é aberta. |
| CT-INV-013 | Apresentar dados corretos nos detalhes | Abrir um produto e comparar nome, descrição e preço com o card. | Os dados da página de detalhes correspondem aos dados exibidos no inventário. |
| CT-INV-014 | Voltar dos detalhes para o inventário | Abrir um produto e clicar em `Back to products`. | O usuário retorna para `/inventory.html` e o catálogo é apresentado. |
| CT-INV-015 | Validar os detalhes de todos os produtos | Repetir a abertura e a conferência para os 6 produtos. | Cada produto abre sua própria página e apresenta informações correspondentes ao card selecionado. |

## Ordenação

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-SORT-001 | Exibir a ordenação inicial | Acessar o inventário sem alterar o seletor. | A opção padrão é `Name (A to Z)` e os nomes aparecem em ordem alfabética crescente. |
| CT-SORT-002 | Ordenar nomes de A a Z | Selecionar `Name (A to Z)`. | Todos os produtos são reorganizados em ordem alfabética crescente. |
| CT-SORT-003 | Ordenar nomes de Z a A | Selecionar `Name (Z to A)`. | Todos os produtos são reorganizados em ordem alfabética decrescente. |
| CT-SORT-004 | Ordenar preços do menor para o maior | Selecionar `Price (low to high)`. | Os produtos são reorganizados por preço crescente. |
| CT-SORT-005 | Ordenar preços do maior para o menor | Selecionar `Price (high to low)`. | Os produtos são reorganizados por preço decrescente. |
| CT-SORT-006 | Trocar entre critérios de ordenação | Aplicar dois ou mais critérios em sequência. | A lista é atualizada corretamente após cada seleção e continua exibindo os 6 produtos. |
| CT-SORT-007 | Manter os dados associados após ordenar | Ordenar a lista e conferir os cards. | Nome, imagem, descrição, preço e botão continuam associados ao produto correto. |

## Adição de produtos ao carrinho

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-CART-001 | Adicionar um produto | Clicar em `Add to cart` na mochila. | O badge apresenta `1` e o botão do produto muda para `Remove`. |
| CT-CART-002 | Adicionar o primeiro produto apresentado | Identificar o primeiro card e clicar em seu botão. | O badge apresenta `1` e o mesmo produto aparece no carrinho. |
| CT-CART-003 | Adicionar dois produtos diferentes | Adicionar dois produtos. | O badge apresenta `2` e ambos os botões mudam para `Remove`. |
| CT-CART-004 | Adicionar todos os produtos | Adicionar os 6 produtos. | O badge apresenta `6` e todos os produtos passam a exibir `Remove`. |
| CT-CART-005 | Impedir adição duplicada pelo inventário | Adicionar um produto e observar seu card. | O botão muda para `Remove`, não permitindo adicionar novamente o mesmo produto. |
| CT-CART-006 | Adicionar produto após ordenar | Alterar a ordenação e adicionar um produto. | O produto selecionado é adicionado corretamente e o badge é atualizado. |
| CT-CART-007 | Adicionar produto pela página de detalhes | Abrir um produto e clicar em `Add to cart`. | O badge é atualizado e, ao abrir o carrinho, o produto correto é apresentado. |
| CT-CART-008 | Manter item ao voltar dos detalhes | Adicionar um produto nos detalhes e voltar ao inventário. | O badge mantém a quantidade e o card do produto apresenta `Remove`. |
| CT-CART-009 | Manter itens após recarregar a página | Adicionar produtos e recarregar o inventário. | Os itens permanecem no carrinho, o badge mantém a quantidade e os botões permanecem como `Remove`. |

## Remoção de produtos

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-CART-010 | Remover o único produto pelo inventário | Adicionar um produto e clicar em `Remove` no mesmo card. | O botão volta para `Add to cart` e o badge desaparece. |
| CT-CART-011 | Remover um produto entre dois | Adicionar dois produtos e remover apenas um. | O produto escolhido volta a exibir `Add to cart`, o outro permanece como `Remove` e o badge muda para `1`. |
| CT-CART-012 | Remover todos os produtos pelo inventário | Adicionar vários produtos e removê-los. | O badge diminui após cada remoção e desaparece quando o carrinho fica vazio. |
| CT-CART-013 | Remover produto pela página de detalhes | Adicionar um produto, abrir seus detalhes e clicar em `Remove`. | O badge é atualizado e o produto deixa de constar no carrinho. |
| CT-CART-014 | Remover o único produto dentro do carrinho | Adicionar um produto, abrir o carrinho e clicar em `Remove`. | O item desaparece da lista e o badge desaparece. |
| CT-CART-015 | Remover um produto entre vários dentro do carrinho | Adicionar dois produtos, abrir o carrinho e remover um deles. | Somente o produto selecionado desaparece, o outro permanece e o badge muda para `1`. |

## Navegação do carrinho

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-CART-016 | Abrir o carrinho vazio | Clicar no ícone do carrinho sem adicionar produtos. | O usuário acessa `/cart.html` e nenhum item é apresentado. |
| CT-CART-017 | Abrir o carrinho com um produto | Adicionar um produto e clicar no carrinho. | O usuário acessa `/cart.html`, encontra um item e os dados correspondem ao produto selecionado. |
| CT-CART-018 | Abrir o carrinho com vários produtos | Adicionar produtos diferentes e clicar no carrinho. | Todos e somente os produtos selecionados aparecem no carrinho. |
| CT-CART-019 | Voltar do carrinho para o inventário | Abrir o carrinho e clicar em `Continue Shopping`. | O usuário retorna para `/inventory.html`. |
| CT-CART-020 | Manter os itens ao continuar comprando | Adicionar produtos, abrir o carrinho e clicar em `Continue Shopping`. | Os produtos continuam adicionados e o badge mantém a quantidade correta. |

## Menu lateral

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-MENU-001 | Abrir o menu lateral | Clicar no botão do menu. | O menu é aberto com as opções `All Items`, `About`, `Logout` e `Reset App State`. |
| CT-MENU-002 | Fechar o menu lateral | Abrir o menu e clicar no botão de fechar. | O menu é recolhido e o inventário permanece acessível. |
| CT-MENU-003 | Voltar para todos os produtos | Abrir detalhes de um produto, abrir o menu e clicar em `All Items`. | O usuário retorna para `/inventory.html`. |
| CT-MENU-004 | Acessar a opção About | Abrir o menu e clicar em `About`. | O usuário é direcionado para a página institucional configurada. |
| CT-MENU-005 | Realizar logout | Abrir o menu e clicar em `Logout`. | A sessão é encerrada e o usuário retorna para a página de login. |
| CT-MENU-006 | Impedir acesso após logout | Realizar logout e tentar acessar `/inventory.html`. | O acesso é negado até que um novo login seja realizado. |
| CT-MENU-007 | Limpar o estado da aplicação | Adicionar produtos, abrir o menu e clicar em `Reset App State`. | O badge desaparece e todos os cards voltam a apresentar `Add to cart`. |

## Usabilidade, acessibilidade e compatibilidade

| ID | Cenário | Passos principais | Resultado esperado |
| --- | --- | --- | --- |
| CT-UX-001 | Navegar pelos controles com teclado | Usar `Tab`, `Shift+Tab`, `Enter` e `Space` no inventário. | Os controles interativos recebem foco visível e podem ser acionados pelo teclado. |
| CT-UX-002 | Identificar controles por nome acessível | Inspecionar menu, ordenação, links de produtos, botões e carrinho. | Todos os controles possuem nome acessível coerente com sua função. |
| CT-UX-003 | Exibir imagens com texto alternativo | Inspecionar as imagens dos produtos. | As imagens informativas possuem texto alternativo correspondente. |
| CT-UX-004 | Manter legibilidade em tela pequena | Abrir o inventário em viewport de celular. | Não existe sobreposição, corte de conteúdo ou rolagem horizontal indevida; os controles continuam utilizáveis. |
| CT-UX-005 | Manter funcionamento em diferentes navegadores | Executar os fluxos principais nos navegadores suportados. | Catálogo, ordenação, menu e carrinho funcionam de forma consistente. |
| CT-PERF-001 | Carregar o inventário com usuário de desempenho lento | Autenticar com `performance_glitch_user` e aguardar o inventário. | A página termina de carregar, apresenta todos os produtos e permanece funcional dentro do limite definido pelo projeto. |

## Critérios gerais de automação

- Cada teste automatizado deve ser independente e preparar seu próprio estado.
- Seletor `data-test` deve ser preferido quando estiver disponível.
- Toda ação deve possuir uma asserção sobre seu resultado; clicar no elemento, isoladamente, não comprova o comportamento.
- Casos parametrizáveis, como detalhes de todos os produtos, podem usar uma massa de dados para evitar duplicação.
- Ordenações devem comparar a lista completa com uma cópia ordenada, e não apenas o primeiro item.
- Casos de layout, acessibilidade e compatibilidade podem exigir ferramentas ou estratégias específicas além das asserções funcionais do Cypress.
