Feature: Priority Quote Table Test 
  	This feature 

    Background:
    	Given I am logged into Priority Quote with user "routphil" and password "test"

    Scenario: User fills out the create new group form
    	Given I am on the "create_new_group" page
    	When I wait "2000" milliseconds
    	When I enter text "Test Group" in textbox "GroupName"
    	When I enter text "999999999" in textbox "taxId"
    	When I click on "dropDown_ReligousOrganization_No"
    	When I click on "dropDown_ReligousOrganization_No"
    	When I enter text "Test Street" in textbox "generalAddress"
    	When I enter text "Test Street line 2" in textbox "generalAddress2"
    	When I enter text "Test City" in textbox "generalCity"
    	When I enter text "49505" in textbox "zipcode"
    	When I click on "dropDown_EffectiveDate_Option6"
    	When I click on "button_creatAndClose"