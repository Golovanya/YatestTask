Feature: Logout functionality

  Scenario Outline: Check logout functionality
    Given I'm on the login page
    When I fill form with  <username> and <password>
    And I click submit button
    And I should see a flash message saying <message>
    When I click to logout button
    Then I should see a flash message saying <logoutMessage>

    Examples:
      | username | password             | message                        |logoutMessage                     |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |You logged out of the secure area!|