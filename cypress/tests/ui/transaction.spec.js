import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();

describe('Enviar dinheiro', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser('Arvilla_Hegmann', 's3cret');
    cy.location("pathname").should("equal", "/");
    cy.visit('/transaction/new');
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
    cy.get('[data-test="transaction-create-amount-input"]').type('2000');
    cy.get('[data-test="transaction-create-description-input"]').type('Teste transação');
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="alert-bar-success"]').should('be.visible');
  });

  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginPage.accessLoginPage();
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser('Arvilla_Hegmann', 's3cret');
    cy.location("pathname").should("equal", "/");
    cy.visit('/transaction/new');
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click();
    cy.get('[data-test="transaction-create-amount-input"]').type('10000000');
    cy.get('[data-test="transaction-create-description-input"]').type('Teste transação inválida');
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="alert-bar-error"]').should('be.visible');
  });
});