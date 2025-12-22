import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();
const credenciais = require('../../credenciais.json');

const selectorList = {
  firstNameInput: '[data-test="signup-first-name"]',
  lastNameInput: '[data-test="signup-last-name"]',
  usernameInput: '[data-test="signup-username"]',
  passwordInput: '[data-test="signup-password"]',
  confirmPasswordInput: '[data-test="signup-confirmPassword"]',
  submitButton: '[data-test="signup-submit"]',
  nextButton: '[data-test="user-onboarding-next"]'
};

describe('User register', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.get(selectorList.firstNameInput).type(credenciais.signup.newUser.firstName);
    cy.get(selectorList.lastNameInput).type(credenciais.signup.newUser.lastName);
    cy.get(selectorList.usernameInput).type(credenciais.signup.newUser.username);
    cy.get(selectorList.passwordInput).type(credenciais.signup.newUser.password);
    cy.get(selectorList.confirmPasswordInput).type(credenciais.signup.newUser.password);
    cy.get(selectorList.submitButton).click();
    loginPage.loginWithAnyUser(credenciais.signup.newUser.username, credenciais.signup.newUser.password);
    cy.location("pathname").should("equal", "/");
    cy.get(selectorList.nextButton).should('be.visible');
  });

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.get(selectorList.firstNameInput).type(credenciais.signup.newUser.firstName);
    cy.get(selectorList.lastNameInput).type(credenciais.signup.newUser.lastName);
    cy.get(selectorList.usernameInput).type(credenciais.signup.newUser.username);
    cy.get(selectorList.passwordInput).type(credenciais.signup.newUser.password);
    cy.get(selectorList.submitButton).should('be.disabled');
  });
});