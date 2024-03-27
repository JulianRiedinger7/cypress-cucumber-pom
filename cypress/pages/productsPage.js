class ProductsPage {
  elements = {
    searchInput: () => cy.get("#search_product"),
    searchBtn: () => cy.get("#submit_search"),
    productsTitles: () => cy.get(".productinfo > p"),
  }

  enterSearch(text) {
    this.elements.searchInput().type(text)
  }

  clickSearchBtn() {
    this.elements.searchBtn().click()
  }

  getProductTitles() {
    return this.elements.productsTitles()
  }
}

export const productsPage = new ProductsPage()
