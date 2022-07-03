Feature: event
 As a user
 I want a event form
 So that I can fill up the event information


 Scenario: Add info to the event form
   Given a user has navigated to the homepage
   When the user clicks "create new event" to generate the event for travelling
   Then the user should be redirected to the event form to click "create a event"