Feature: Product Search

  The user should be able to search products
  and see the correct results

  Scenario Outline: Search different products
    Given the user is in the products page
    When the user enters "<product>" in the search product box
    And the user clicks on the search button
    Then the user should be able to see results with "<product>" title

    Examples:
      | product |
      | Dress   |
      | Jeans   |
      | Top     |