Feature: search
 As a user
 I want a search bar
 So that I can search the destination info


 Scenario: searching travel destination in search bar
   Given a user has been through homepage
   When the user clicks "search" button
   Then the user should be redirected to the destination information page