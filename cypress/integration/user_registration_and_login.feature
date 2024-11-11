Feature: User Registration and Login

  Scenario: User can register and then log in
    Given I am on the registration page
    When I enter valid registration details
    And I submit the registration form
    Then I should see a registration success message

    When I log out
    And I am on the login page
    And I enter the same login credentials
    And I submit the login form
    Then I should be redirected to the user dashboard
