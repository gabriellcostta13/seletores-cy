///<reference types = "cypress"/>

describe('Seletores avançados com cypress', () => {

  beforeEach(() => {
    cy.visit('../../seletores.html')
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
    cy.contains('Prima Beatriz').should('have.attr', 'class', 'filho-3')

  });

  it('Seleciona o elemento com a classe pai', () => {
    cy.get('.pai').should('exist')
  })

  it('Seleciona o elemento com o id Filho', () => {
    cy.get('#id-filho').should('exist')
  })

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    cy.get('.pai').find('.filho-2').should('contain', 'Tio Marcos')
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    cy.get('.irmao + .irmao').should('contain', 'Irmão Rafael')
  });

  it('Seleciona o próximo elemento irmão', () => {
    cy.get('#irmao-1').next().should('contain', 'Irmão Rafael')
  });

  it('Seleciona o elemento irmão anterior', () => {
    cy.get('#irmao-2').prev().should('contain', 'Irmã Camila')
  });

  it('Seleciona o irmão da div anterior', () => {
    cy.get('[name="nome-do-atributo"]').prev().should('contain', 'Vovó Helena')
  });

  it('Seleciona o segundo elemento <li> encontrado', () => {
    cy.get('li').eq(1).should('contain', 'Tio Marcos')
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    cy.get('[data-test="div-pai"]').should('exist')
  });

  it('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    cy.get('.filho-4').parent('[data-test="div-pai"]').should('exist')
  });

  it('Seleciona o elemento com um valor em um select', () => {
    cy.get('[name="opcao"]').select('Muito').should('have.value', 'muito')
    cy.get('#id-enviar').click()
    cy.get('#mensagemFeedback').should('have.text', 'Obrigado por compartilhar conosco!')
  });

})