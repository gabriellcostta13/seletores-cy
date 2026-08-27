# Seletores CSS/Cypress — Exercícios de Automação

Repositório de estudo focado em praticar **estratégias de seleção de elementos** com Cypress: classes, IDs, atributos customizados (`data-test`), hierarquia entre elementos (pai/filho/irmão) e boas práticas de seletores resilientes.

Exercício desenvolvido durante o curso de **Qualidade de Software (QA)** da EBAC, módulo de Automação de UI com Cypress.

## Sobre o projeto

O arquivo `seletores.html` simula uma estrutura de página com diferentes formas de acessar os mesmos elementos (classe, id, atributo, posição na hierarquia), permitindo comparar na prática qual estratégia de seletor é mais adequada em cada cenário — e por quê.

Os testes em `cypress/e2e/seletores.cy.js` cobrem casos como:
- Seleção por texto contido (`cy.contains`)
- Seleção por classe vs. atributo customizado (`data-test`)
- Verificação de atributos (`have.attr`) vs. classes (`have.class`)
- Navegação entre elementos irmãos (`+`, `next`, `prev`)
- Seleção por posição (`.eq()`)
- Interação com formulários (`select`, `click`) e validação de mensagens de feedback

## Clonando e executando localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/download) (ou outro editor de sua preferência)
- [Git](https://git-scm.com/downloads)

### Passos

\`\`\`bash
git clone https://github.com/gabriellcostta13/seletores-cy.git
cd seletores-cy
npm install
\`\`\`

Para executar via Dashboard:

\`\`\`bash
npx cypress open
\`\`\`

Selecione um navegador (recomendado: Electron) e rode os testes.

## Tecnologias

- [Cypress](https://cypress.io/) — Framework de automação de testes E2E

---

Exercício baseado em material da EBAC (Fábio & José Ernesto), adaptado e expandido como parte dos meus estudos em QA.
