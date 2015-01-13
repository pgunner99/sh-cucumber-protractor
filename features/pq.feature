Feature: Priority Quote Table Test 
  	This feature 

    Background:
    	Given I am logged into Priority Quote with user "routphil" and password "test"

    Scenario: User fills out the create new group form
    	Given I am on the "create_new_group" page
    	When I enter text "Group Name" in textbox with name "groupinfo_groupname"
    	When I enter text "tax id" in textbox with name "groupinfo_taxid"
    	When I wait "20000" milliseconds