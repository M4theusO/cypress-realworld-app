import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();

describe('Login RWA', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser('Heath93', 's3cret');    
    cy.location("pathname").should("equal", "/");
  });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser('Heath93', '123456');
    loginPage.checkAccessInvalid();
  });
});