import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();

describe('Login RWA', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('Deve fazer login com um usuário válido', () => {
    loginPage.loginWithAnyUser('Heath93', 's3cret');
    cy.location("pathname").should("equal", "/");
    cy.get("[data-test='transaction-list']").should('be.visible');
  });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.loginWithAnyUser('Heath93', '123456');
    loginPage.checkAccessInvalid();
  });
});