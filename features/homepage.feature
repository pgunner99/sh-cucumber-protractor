Feature: Homepage 
  As a user
  I want to visit the homepage
  So that I can access the various features on offer

    Scenario: Successful Login
    	Given I am on the homepage
    	When I enter text "linda@cnrmyhealthtest" in "username"
    	When I enter text "Password1" in "password"
    	Then I should see a "logout" link 	
