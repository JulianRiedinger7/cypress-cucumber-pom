/// <reference types="Cypress" />

class AuthPage {
  elements = {
    emailInput: () => cy.get("[data-qa='login-email']"),
    passwordInput: () => cy.get("[data-qa='login-password']"),
    loginBtn: () => cy.get("[data-qa='login-button']"),
    errorMessage: () => cy.get("form[action='/login'] > p"),
  }

  enterEmail(email = "") {
    this.elements.emailInput().type(email)
  }

  enterPassword(password = "") {
    this.elements.passwordInput().type(password)
  }

  clickLoginBtn() {
    this.elements.loginBtn().click()
  }

  login(email, password) {
    this.enterEmail(email)
    this.enterPassword(password)
    this.clickLoginBtn()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

export const authPage = new AuthPage()
