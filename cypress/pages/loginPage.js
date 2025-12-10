class LoginPage{
    selectorsList(){
        const selectors = {
            usernameInput: '[data-test="signin-username"]',
            passwordInput: '[data-test="signin-password"]',
            loginButton: '[data-test="signin-submit"]',
            wrongCredentialAlert: '[data-test="signin-error"]'
        }
        return selectors 
    }

    accessLoginPage(){
        cy.visit('/signin')
    }

    loginWithAnyUser(username, password){
        cy.get(this.selectorsList().usernameInput).type(username)
        cy.get(this.selectorsList().passwordInput).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage