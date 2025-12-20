import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();
const credenciais = require('../../credenciais.json');

describe('User register', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.get('[data-test="signup-first-name"]').type(credenciais.signup.newUser.firstName);
    cy.get('[data-test="signup-last-name"]').type(credenciais.signup.newUser.lastName);
    cy.get('[data-test="signup-username"]').type(credenciais.signup.newUser.username);
    cy.get('[data-test="signup-password"]').type(credenciais.signup.newUser.password);
    cy.get('[data-test="signup-confirmPassword"]').type(credenciais.signup.newUser.password);
    cy.get('[data-test="signup-submit"]').click();
    loginPage.loginWithAnyUser(credenciais.signup.newUser.username, credenciais.signup.newUser.password);
    cy.location("pathname").should("equal", "/");
    cy.get('[data-test="user-onboarding-next"]').should('be.visible');
  });

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.get('[data-test="signup-first-name"]').type(credenciais.signup.newUser.firstName);
    cy.get('[data-test="signup-last-name"]').type(credenciais.signup.newUser.lastName);
    cy.get('[data-test="signup-username"]').type(credenciais.signup.newUser.username);
    cy.get('[data-test="signup-password"]').type(credenciais.signup.newUser.password);
    cy.get('[data-test="signup-submit"]').should('be.disabled');
  });
});