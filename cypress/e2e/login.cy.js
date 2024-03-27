/// <reference types="cypress" />

import { authPage } from "../pages/AuthPage"
import { headerPage } from "../pages/headerPage"

describe("Login test suite", () => {
  beforeEach(() => {
    cy.visit("/login")
  })

  it("should see an error message when trying to login with invalid credentials", () => {
    cy.fixture("credentials").then((credentials) => {
      const invalidCredentials = credentials.invalidCredentials

      authPage.login(invalidCredentials.email, invalidCredentials.password)

      authPage
        .getErrorMessage()
        .should("be.visible")
        .and("contain.text", invalidCredentials.message)
    })
  })

  it("should login correctly with valid credentials", () => {
    cy.fixture("credentials").then((credentials) => {
      const validCredentials = credentials.validCredentials

      authPage.login(validCredentials.email, validCredentials.password)

      headerPage
        .getLoggedUser()
        .should("be.visible")
        .and("contain.text", validCredentials.name)
    })
  })
})
