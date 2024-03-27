class HeaderPage {
  elements = {
    loggedUser: () => cy.contains("a", " Logged in as "),
  }

  getLoggedUser() {
    return this.elements.loggedUser()
  }
}

export const headerPage = new HeaderPage()
