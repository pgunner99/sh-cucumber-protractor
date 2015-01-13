Feature: Login 
  	As a user
  	I want to visit the homepage
  	So that I can access the various features on offer

    Scenario: UnSuccessful Login
    	Given I am on the homepage
    	When I enter text "linda@cnrmyhealthtest" in "username"
    	When I enter text "Password2" in "password"
