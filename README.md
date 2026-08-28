# Seletores CSS com Cypress

Projeto de estudo desenvolvido para praticar automação de testes end-to-end com Cypress.

A aplicação utiliza uma página HTML simples com elementos de uma família e um formulário de avaliação. O foco principal é explorar diferentes formas de localizar elementos na interface durante os testes.

## Objetivo

Praticar a criação de testes automatizados utilizando seletores CSS, textos, atributos, IDs e relações entre elementos no DOM.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Cypress

## Conceitos praticados

Os testes presentes no projeto utilizam:

- `cy.contains()` para localizar elementos por texto;
- `cy.get()` para localizar elementos por classe, ID e atributo;
- `find()` para buscar elementos filhos;
- Seletores de irmãos adjacentes (`+`);
- `next()` e `prev()` para navegar entre elementos irmãos;
- `eq()` para selecionar elementos pela posição;
- Seletores por atributos, como `data-test` e `name`;
- Interação com `select`, botão de envio e mensagem de feedback.

## Estrutura do projeto

```text
seletores-cy/
├── cypress/
│   └── e2e/
│       └── seletores.cy.js
├── seletores.html
└── package.json
```

## Como executar

Instale as dependências:

```bash
npm install
```

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```

## Autor

Gabriel Costa  
Quality Assurance (QA).