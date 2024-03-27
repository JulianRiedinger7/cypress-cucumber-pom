Feature: Login with valid and invalid credentials

  The user should be able to see an error message
  when trying to login with invalid credentials and
  navigate correctly when enterting valid credentials

  Background:
    Given the user is in the authentication page

  @regression
  Scenario: Login with valid credentials
    When the user enters "julian@gmail.com" as email and "julian123" as password
    And clicks on the login button
    Then the user should see the Logged in as "julian" message in the header

  Scenario: Login with invalid credentials
    When the user enters "asd@gmail.com" as email and "asasd" as password
    And clicks on the login button
    Then the user should be able to see "Your email or password is incorrect!" as error message