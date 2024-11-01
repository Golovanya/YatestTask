Feature: Logout functionality

  Scenario Outline: Check login with valid values
    Given User is on the login page
    When I fill form with valid <username> and <password>
    And I click submit button
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                   |
      | ""       | ""                   | Your username is invalid! |
      | ""       | SuperSecretPassword! | Your username is invalid! |
      | tomsmith | ""                   | Your password is invalid! |
      | no       | ohNoooy              | Your username is invalid! |
