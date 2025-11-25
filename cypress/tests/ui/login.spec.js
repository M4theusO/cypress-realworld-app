describe('Login RWA', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/signin');
    cy.get('[data-test="signin-username"]').type('Heath93');
    cy.get('[data-test="signin-password"]').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    cy.location("pathname").should("equal", "/");
  });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('/signin');
    cy.get('[data-test="signin-username"]').type('Heath93');
    cy.get('[data-test="signin-password"]').type('123456');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]');
  });
});