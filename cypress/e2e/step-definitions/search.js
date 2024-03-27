/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

import { productsPage } from "../../pages/productsPage"

Given("the user is in the products page", () => {
  cy.visit("/products")
})

When("the user enters {string} in the search product box", (product) => {
  productsPage.enterSearch(product)
})

When("the user clicks on the search button", () => {
  productsPage.clickSearchBtn()
})

Then(
  "the user should be able to see results with {string} title",
  (product) => {
    productsPage.getProductTitles().each((productTitle) => {
      cy.wrap(productTitle).should("include.text", product)
    })
  }
)
