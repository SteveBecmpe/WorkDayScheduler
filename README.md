# Project Name: Work Day Scheduler
-this project allows the user to enter events in specific times slots during the day. The information is saved when the save button is pressed. the saved information is local to the machine and reloads when the page is refreshed.
- the background color of each time slot is supposed to change color as time progresses.. this is a difficult bit for me and isn't working at the moment.

# Images

# Start. Given Html base shows like this:
![GivenHtmlDisplayed] (./Assets/GivenHtmlDisplayed.JPG)

# First functional Push. image tag FFP.JPG
![hardcodehtmlforcsscheck] (./Assets/HardCoded9amTimeSlot.JPG)



# CSS file changes
- there where several things in the given css file that didn't make sense. Color in the past present and future class's, board radius's that seem to be on the wrong edges etc. Adjustments where made to match the general theme and build symetry. It Does NOT match the given gif exactly but seems to blend the given gif and the intent based on what was provided in the CSS file.


# Check list of things to complete.
-[X] page loaded and ready. 1 hour increments load. load ready syntax present. Need to finish render code.
-[X] current date is presented at the top of the page, above the line. HTML line 30 P section ID currentDay
-[X] maybe current time could be presented somewhere, Optional.. will need current time at some point. This looping at the top. updating every second(500ms)
-[X] 1 hour increments are divided in normal work hours of the day per given gif. The title for each is preloaded into the object array. the actual size in time is controlled by a variable.
-[/] hourly increments are color coded base on past, present, and future. This test was completed 1-3-20 using console.log on the workday array objects. updating based off current time.
-[X] clicking into an hourly increment allows you to enter text and save using save button
-[X] clicking save saves the data in local storage
-[X] refreshing page does NOT lose the data. IE it reloads what is saved in local storage.
-[/] need function that checks for past, present, future states and reassigns the css class every second or checks for when an hour has been broken. the runs update.

# Current Status------------------------------------------------------------------------
- auto load works. 
- Clear content doesn't seem to work consistently still have 2 renders
- need set interval function
- need logic loop trigger for set interval 



# Functional coding progression:
- page load, ready then loads
- define variables.
- autoload function is called at bottom of js file
- autoload calls:
  + render fram work, list?
  + check for saved data and render
  + Check past, present, future and update class for divs or list
- load/refresh checks to see if anything is saved locally? check variables
- the




# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

  * [Luxon](https://moment.github.io/luxon/)

  * [Day.js](https://day.js.org/)

  * [date-fns](https://date-fns.org/)

  * [js-Joda](https://js-joda.github.io/js-joda/)

Whichever library you choose, be sure to read the documentation carefully!


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Mock-Up

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses the Moment.js library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
