Feature: Logout functionality

  Scenario Outline: After logout fields username and password are empty

    Given I'm on the login page
    When I fill form with  <username> and <password>
    And I click submit button
    And I should see a flash message saying <message>
    When I click to logout button
    And I should see a flash message saying <logoutMessage>
    Then field username and password are empty


    Examples:
      | username | password             | message                        |logoutMessage                     |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |You logged out of the secure area!|