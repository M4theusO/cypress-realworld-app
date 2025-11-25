describe('Configuração de usuário', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('/signup');
    cy.get('[data-test="signup-first-name"]').type('João');
    cy.get('[data-test="signup-last-name"]').type('Silva');
    cy.get('[data-test="signup-username"]').type('JoaoSilva123');
    cy.get('[data-test="signup-password"]').type('senhaSegura');
    cy.get('[data-test="signup-confirmPassword"]').type('senhaSegura');
    cy.get('[data-test="signup-submit"]').click();
  });

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('/signup');
    cy.get('[data-test="signup-first-name"]').type('João');
    cy.get('[data-test="signup-last-name"]').type('Silva');
    cy.get('[data-test="signup-username"]').type('JoaoSilva123');
    cy.get('[data-test="signup-password"]').type('senhaSegura');
    cy.get('[data-test="signup-submit"]').should('be.disabled');
  });
});