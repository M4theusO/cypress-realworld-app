import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();
const credenciais = require('../../credenciais.json');

describe('Login RWA', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('Deve fazer login com um usuário válido', () => {
    loginPage.loginWithAnyUser(credenciais.login.validUser.username, credenciais.login.validUser.password);
    cy.location("pathname").should("equal", "/");
    cy.get("[data-test='transaction-list']").should('be.visible');
  });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.loginWithAnyUser(credenciais.login.invalidUser.username, credenciais.login.invalidUser.password);
    loginPage.checkAccessInvalid();
  });
});