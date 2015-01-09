Feature: Homepage 
  As a user
  I want to visit the homepage
  So that I can access the various features on offer

    Scenario: Successful Login
    	Given I am on the homepage
    	When I enter text "trista@cnrmyhealthtest.com" in "username"
    	When I enter text "Password1" in "password"
    	When I wait "1000" milliseconds
    	When I click on MyHealth Login
    	When I wait "45000" milliseconds
    	When I click on the "messages" id
    	When I wait "1000" milliseconds
    	Then I should see a "UPCOMING EVENTS" link 	
    	#Then I should see the text "MyHealth"
