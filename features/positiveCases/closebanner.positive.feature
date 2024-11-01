Feature: Banners functionality

  Scenario Outline: The banner will be invisible after closing
    Given I'm on the login page
    When I fill form with  <username> and <password>
    And I click submit button
    And I should see a flash message saying <message>
    When I click  close banner
    Then banner is not visible


    Examples:
      | username | password             | message                   |
      | ""       | ""                   | Your username is invalid! |
     