Feature: Logout functionality

  Scenario Outline: Сheck login with incorrect data
    Given I'm on the login page
    When I fill form with  <username> and <password>
    And I click submit button
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                   |
      | ""       | ""                   | Your username is invalid! |
      | ""       | SuperSecretPassword! | Your username is invalid! |
      | tomsmith | ""                   | Your password is invalid! |
      | no       | ohNoooy              | Your username is invalid! |
