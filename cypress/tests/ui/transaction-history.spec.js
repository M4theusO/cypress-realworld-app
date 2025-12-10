import LoginPage from '../../pages/loginPage';

const loginPage = new LoginPage();

describe('Navegar para a página de histórico de transações', () => { 
    
    describe('Visualizar histórico de transações com sucesso', () => {
        it('Deve exibir o histórico de transações de um usuário corretamente', () => {
            loginPage.accessLoginPage();
            loginPage.loginWithAnyUser('Heath93', 's3cret');
            cy.location("pathname").should("equal", "/");
            cy.visit('/personal');
            cy.get('[data-test="transaction-list"]').should('be.visible');
        });
    });

    describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
        it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
            loginPage.accessLoginPage();
            loginPage.loginWithAnyUser('M4theus', '230900');
            cy.location("pathname").should("equal", "/");
            cy.visit('/personal');
            cy.get('[data-test="empty-list-header"]').should('be.visible');
        });
    });
});