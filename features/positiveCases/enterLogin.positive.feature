Feature: Login functionality

  Scenario Outline: Check login with valid values on click "Enter"
    Given I'm on the login page
    When I fill form with  <username> and <password>
    And I click enter
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
