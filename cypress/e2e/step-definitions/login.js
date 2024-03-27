/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { authPage } from "../../pages/authPage"
import { headerPage } from "../../pages/headerPage"

Given("the user is in the authentication page", () => {
  cy.visit("/login")
})

When(
  "the user enters {string} as email and {string} as password",
  (email, password) => {
    authPage.enterEmail(email)
    authPage.enterPassword(password)
  }
)

Then("clicks on the login button", () => {
  authPage.clickLoginBtn()
})

Then(
  "the user should see the Logged in as {string} message in the header",
  (name) => {
    headerPage.getLoggedUser().should("be.visible").and("contain.text", name)
  }
)

Then("the user should be able to see {string} as error message", (message) => {
  authPage.getErrorMessage().should("be.visible").and("have.text", message)
})
