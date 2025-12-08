describe('Enviar dinheiro', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    cy.visit('/signin');
    cy.get('[data-test="signin-username"]').type('Arvilla_Hegmann');
    cy.get('[data-test="signin-password"]').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    cy.location("pathname").should("equal", "/");
    cy.visit('/transaction/new');
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
    cy.get('[data-test="transaction-create-amount-input"]').type('2000');
    cy.get('[data-test="transaction-create-description-input"]').type('Teste transação');
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="alert-bar-success"]').should('be.visible');
  });

  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    cy.visit('/signin');
    cy.get('[data-test="signin-username"]').type('Arvilla_Hegmann');
    cy.get('[data-test="signin-password"]').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    cy.location("pathname").should("equal", "/");
    cy.visit('/transaction/new');
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
    cy.get('[data-test="transaction-create-amount-input"]').type('10000000');
    cy.get('[data-test="transaction-create-description-input"]').type('Teste transação inválida');
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="alert-bar-error"]').should('be.visible');
  });
});