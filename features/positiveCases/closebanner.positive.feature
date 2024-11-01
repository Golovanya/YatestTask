Feature: Banners functionality

  Scenario Outline: Banner will not visible after closing
    Given User is on the login page
    When I fill form with valid <username> and <password>
    And I click submit button
    And I should see a flash message saying <message>
    When I click  close banner
    Then banner is not visible


    Examples:
      | username | password             | message                   |
      | ""       | ""                   | Your username is invalid! |
     