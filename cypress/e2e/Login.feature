Feature: Testing login and validation

   Scenario Outline: Scenario Outline name: Login using credentials
    Given User is at the login page
    When I enter credentials username as '<username>' and password as '<password>'
    Then I select dropdown as '<dropdown>'
    Examples:
        | username   | password | dropdown |
        | malik0691  | 123456   | REPTILES |
