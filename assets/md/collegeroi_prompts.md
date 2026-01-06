---
layout: page
title: Prompts used to create CollegeROI.app
sidebar_link: false
---

✨ - marks prompts that were suggested by Gemini

### Initial Setup

Did not save the prompts for the initial setup but it was a combination of searching on Google for how to build a React based webapp and which frameworks/libraries should be used. To be clear, I have never written code in React, have never use NPM, but I can read Javascript and am familiar with using a terminal to setup a new project. So mixed bag in terms of ease of use, but it was not really difficult to setup, and gemini was great about providing code that could be run in a terminal, that would run with 1-click. Sample prompt that I likely used is below:

* Setup a project folder for a React single page application using “Vite”. Also setup the dependencies as needed for the project.

### Building the home page

Again, like the initial setup for the project, I missed saving most of the intial prompts, so what you see here is only a partial log of the prompts used to build the homepage.

* Add a similar disclaimer to the home page of the application
* The home page disclaimer panel is both off the bottom edge of the page and is a visible card, re-design the disclaimer to look more like the disclaimer on the "Calculator.tsx" file
* The disclaimer panel on the homepage is still not flush with the bottom of the homepage, users can still scroll past the disclaimer panel
* Redesign the homepage to show the attached screenshot on the right and put the content from the “For Students” and “For Guardians” cards into different elements on the left of the page


### Building the Calculator page

This is a mostly complete record of all the prompts used to build the calculator page, which is where the main body of the webapp lives. This section shows the prompts addressing the overall design and layout of the page.

* Create a page with a topnavbar and 3 columns with each column having a header as below:
    * Inputs
    * Costs, Interest, Cash Flow and Savings
    * Help
* Improve the design of the top navbar for this page
* Center the CollegeROI text and icon in the navbar
* Use 3 independent scroll bars on the Calculator page, one for each column
* Add a feature to collapse the side columns to give more space to the center column ✨
* Move the "Show instructions" element to the topnavbar in the center
* Add a smooth transition animation when the instructions panel expands and collapses ✨
* To the “Estimated Cash Flow” card in the “Estimates & Summaries” column, add a table footer showing the Net cash flow at the bottom
* Help make the ROI or Total Projected savings more prominent on the page when the user is entering data in the inputs column
* Add a toggle to hide/show the floating metrics bar in the navbar settings
* Move the "floating metrics" to the top of the page just under the top navbar
* Add a feature to allow users to drag and drop the floating metrics bar to their preferred position
* Move the "floating metrics" into the top navbar so the bar is no longer floating
* Increase the font size for the floatingmetrics and center the metrics in the top navbar
* Add a responsive design update to stack the navbar items vertically on mobile screens
* Consolidate the “Show instructions” and “Show floating metrics” controls into a single set of controls
* Add a "Share" button to the navbar that generates a unique URL with the current inputs ✨
* Consolidate the “Share”, “Guidance” and “View Settings” buttons in the top navbar into a hamburger menu in the top navbar
* Adjust the college name in floating metrics bar dynamically so that the full college name is visible 


#### Building the "Your Data" column

This was the first column/section of the website that was built. As you will see as you read through the prompts - there was some iteration through a couple of layouts and designs. I also changed some of the HTML text and labels manually that sometimes broke tests that I had to fix.

* Change the font of the input boxes to black
* Add validation so when the user clicks the "Calculate Payment Table" button, if all the fields don't contain valid data, alert the user to fill the missing data in red colored text
* Highlight the fields that are missing the data during the validation step after the user clicks the "Calculate Payment Table" button
* When the user clicks into the "4-year tuition" input box - display a modal with 4 input number fields where a user can enter the tuition for each year. The labels for each input field are: Year-1, Year-2, Year-3 and Year-4. Also add a "Done" button at the bottom of the modal. When the user clicks the "Done" button, the "4-year tuition" field displays the SUM of the 4 inputs in the modal
* For the tuition breakdown modal functionality - add validation to ensure that only numbers can be entered into the input fields
* Split the "loan interest" input row into 2 columns - the first for "loan interest" similar to how it is currently, the second for "Loan term (yrs)"
* For the "Tuition Breakdown" modal:
    * Rename the modal to "4-Year Cost Breakdown"
    * Split the row for each year into 2 columns - the first for Tuition + Other Costs, the second for Room + Board
    * Adjust the summation functions accordingly
* Add a "Clear All" button to the modal to reset all cost inputs ✨
* On the "4-Year Cost Breakdown" modal, next to the first row - add a button to copy the values from the first row to all other rows
* Implement a feature to apply an inflation rate when copying values to subsequent years ✨
* Add a tooltip to the inflation input explaining how it works, and add a percentage symbol next to the entered value ✨
* Change the color of * In the results and tables column - add 3 numerical fields whose values will be calculated based on the inputs from the Inputs column on the page. Create functions to calculate these numbers if possible. The fields are as below:
    * 4-Year Cost
    * 4-Year Family Contribution
    * Loan Amount
* Implement the monthly payment calculation logic in the results sectionthe inflation input field to white
* Add a text label next to the Inflation input field titled: "Inflation %"
* Change the font color for the inflation input box to black
* At the top of the Calculator page, add some information on how to use this calculator page
* Add a dropdown that uses this CSV file to provide a list of Colleges. When the user selects any college from the dropdown, the College Name, Annual Tuition and Fees, Annual Room and Board and Median starting salary values for that college are used to populate the relevant input fields on the Calculate.tsx page
* Split the inputs in the Inputs section into collapsible sections, the first named "Costs" containing "College Name", "4-Year Tuition ($)" and "Annual Family Contribution ($)". The second section named "Loans" has the "Loan Interest (%)" and "Loan Term (yrs)" inputs and the last section named "Payments" contains the remaining elements
* For each collapsible section's header - make the background color the same as the collegeROI logo and the font white
* By default only the first or the active collapsible section should be open, the others should be closed
* Add a "Next" button at the bottom of each section to automatically open the next section ✨
* For the Auto-fill modal - remove the following html label: "&lt;label htmlFor="collegeSelectModal">Top 20 Colleges&lt;/label>" and adjust the tests accordingly
* Add an aria-label to the select element for accessibility since the visual label was removed ✨
* Replace the "Auto-fill" component with the "Select a college" dropdown with an auto-complete component in the "College Name" input field. Now, when the user types into the "College Name" input field, the user can select from a list of colleges based on the characters being typed to fill the same information into the same fields.
    * Adjust the relevant functions and test accordingly
* When the user clicks on the "Show Payment Schedule" button, the "Costs and Interest" column should automatically scroll to the "Payment Schedule" card
* Redo the browser tab text to display "website name - current page"
* To the "costs" element in the Inputs column - add a financial aid input box, clicking into the box allows users to enter their financial aid for each year of college. DONOT integrate the financial aid inputs into the existing 4-year tuition modal, instead create a new modal for entering financial aid information per year
* Add a "Clear" button in the same row as the "Your Data" title to quickly reset the form ✨
* Add a confirmation dialog to the "Clear" button to prevent accidental data loss ✨
* Constrain all the collapsible sections in the Your data column to the same width, adjust the design and layout for each input-form accordingly

#### Building the “Estimates and Summaries” column

A lot of this section's layout and code was written automatically when Gemini wrote code and created elements for the first "Your Data" column.

* In the results and tables column - add 3 numerical fields whose values will be calculated based on the inputs from the Inputs column on the page. Create functions to calculate these numbers if possible. The fields are as below:
    * 4-Year Cost
    * 4-Year Family Contribution
    * Loan Amount
* Implement the monthly payment calculation logic in the results section
* Add a "Total Interest Paid" field to the results section
* Restructure the results column to contain a single card to show the calculations
* Add a "Summary" title to the card showing costs, etc in the costs & interest column
* Add another row to the Summary card for "Total cost of college" which includes interest paid
* Split the "Summary" card into 2 sections - the first containing "4-Year Cost", "4-Year Family Contribution" and "Total Cost of College". The second containing the remaining fields
* In the "Loans" collapsible section in the "Inputs" column - add a button to the left of the "Next" button called "Show Payment Schedule". Clicking that button adds a collapsible card with a table showing the entire payment schedule for the loan given the variables entered.
    * Note: the table is only displayed or updated when the user clicks on the "Show Payment Schedule" button
* Adjust the padding, margins and alignment for the “Payment schedule” section so the table inside is centered
* For the Payment Schedule card + table, fix the following:
    * there is extra space / padding between the table header and the card header, remove the extra space
    * when a user scrolls up, the rows move up behind the header row and are visible, fix this so that users cannot see the rows scrolling behind the table header
* Update the payment table so that the schedule is shown by year - so the first column shows year 1, 2, etc; the second column shows the sum of payments made in that year and so on. However, the value in first column can be expanded to show the detailed payment schedule for that year.
* Add a save button and an export button to the Costs and Interest column, in the same row as the Costs & Interest header
* Use the same styling on the save and export icon buttons as on the "Show Payment Schedule" button
* Implement the functionality for the Save button to save the current state to local storage such as a cookie
* Instead of an alert when saving to local storage, briefly show a green check icon next to the save icon indicating that the save was successful
* Implement the functionality to load the saved state from local storage when the application starts ✨
* Add a "Clear Saved Data" button to the UI to remove the data from local storage ✨
* Add a confirmation dialog before clearing the saved data to prevent accidental deletion ✨
* In the "Payments" section under inputs - add an input field called "Expenses", when the user clicks into that field, it opens a modal where the user can enter the following information: Rent, Groceries, Eating out, Utiliities, Transportation (Gas+CarInsurance), HealthCare, Miscellaenous, 401k Contribution. When the user clicks the "Done" button at the bottom of the modal, the sum of all the inputs is displayed in the "Expenses" field under "Payments". Create the necessary states and functions to store and compute the variables
* In the "Monthly Expenses Breakdown" modal, enter some default values that are reasonable for large urban centers in the US
* Add an info icon next to each field title in the "Monthly Expenses Breakdown" modal explaining what type of expenses could fall in that category of expenses.
* For each field title in the "Monthly Expenses Breakdown" modal, change the info icon to a tooltip
* Below the "Expected Annual Starting Salary ($)" input field, add another input field called "Takehome after taxes", clicking into this input opens a new modal where the user can enter their - State tax rate, medicare tax rate, social security tax rate and city / county tax rate and see what their taxes would be given their monthly gross income. The monthly gross income can be calculated by dividing the "Expected Annual Starting Salary ($)" by 12
* Add a "Federal Tax" field to the tax calculation modal for more accurate estimates ✨
* Add a feature to automatically estimate federal tax rates based on the expected annual starting salary and for a single taxpayer ✨
* Add an info icon and a popover next to the "Federal Tax (%)" header displaying the rates for different income levels in the form of a table
* Add a "Net Monthly Cash Flow" field to the results section that subtracts expenses and loan payments from the take-home pay ✨
* Redo the instructions section so that its easier to read through and more attractive looking
* In the cash flow section, display the following in the "cash flow" card as below, note that a single row could contain 2 sets of values (; separator) and the design of the card should account for the same:
    * Row 1 - Monthly Salary
    * Row 2 - Monthly taxes; Take home after taxes
    * Row 3 - College loan payment; Take home after taxes & loan payment
    * Row 4 - Monthly Expenses; Net monthly cash flow
* Redo the "Cash flow" card so the values are displayed in ledger form
* Add a section or card after the “Cash flow” card showing 10-year savings, which would include a projection of savings based on the net monthly cash flow and 401k savings
* To the left of the “How to use” card, add a card with a blurb on what the goals of this page is and how it might help users
* Add a tooltip to the "ROI" term in the new card explaining what it stands for
* Add the appropriate disclaimers to this website making it clear that this financial, college and tax advice and projections are exactly that - they are calculations based on assumptions and that users should consult professionals for real advice before making decisions.
* Next to the "Estimated Cost Summary" card title - add an info icon that makes it clear that the numbers shown here are estimates based on user inputs
* Add similar info icons to the "Estimated Loan Summary" and "10-Year Savings Projection" card titles for consistency ✨
* Add a similar info icon to the "Estimated Cash Flow" card title
* Left align the text in the info boxes

### Building the help section 

This column was initially the right-most column and as that design didn't work, it was moved to the hamburger menu using this prompt [link](#move-guidance)

* Rename the right column as “Guidance” and create a searchable help document where users can learn more about all the different calculations this website provides
* In the guidance section, add a guide on how to search google for college tuitions and other costs and how to find the expected annual salary for the same
* In the guidance section, add a guide on how to search GenAI engines like ChatGPT or Gemini for college tuitions and other costs and how to find the expected annual salary for the same, include links if possible
* Change the background of the searchbox in the guidance column to white and the color of the typed text to black
* Add a clear button (x) inside the search box to easily clear the search text ✨
* Add a hover effect to the search box to make the border color darker ✨

### Building the Compare section

The compare section was intially in the top navigation bar on the calculator page, before moving it to the right column using this [prompt](#move-comparison)

* Link the “Add to comparison” button in the Inputs column to a new feature where users can save all the data for a given college to a new compare menu or carousel on the navbar. The comparison carousel can save up to 5 colleges and clicking on the college name shows the data saved for that college. Extend this functionality to states and to what is being saved to localStorage so all colleges added to comparison are retrieved on browser open.
* Add a "Compare All" view that opens a modal showing a side-by-side comparison table of all saved colleges ✨
* Add a test case to verify that adding a college to comparison updates the navbar list
* <a name="move-guidance"></a>Move the contents of the guidance column to a new button and menu in the top navbar. However retain the right column and rename it.
* <a name="move-comparison"></a>Move the comparison carousel from the navbar to the new "Compare" column, also also show the “net cash flow per month” and “10-year total projected ROI” with the name of each college being compared
* Add a feature where users can easily see in the compare column - which college is currently selectedCalculator component.
* Create an introductory survey for users when a user clicks on the "enter calculator" button for the first time - meaning there is nothing stored in localStorage. Then the users should be taken through a survey modal flow as follows:
    * First page of the survey modal asks them to select 2-5 of the top20 colleges, explaining that this is to setup a comparison, so they can see how the application is supposed to work
    * Second page asks them to enter any financial aid or parental contributions they might expect to help with college
    * Third page shows that we are assuming a 6.5% interest rate and 10 year loan term for the purpose of this simulation
    * Then users are redirected to the College Comparison modal showing the comparison between the colleges they selected
* Create a link where the user can use the intro survey despite not being a first time user
* Add a similar info icon to the "College Comparison" modal title


### Writing tests

This was in some ways the most unexpected part of this experiment, I did not expect Gemini to write tests - but once it started writing tests - I was equally surprised by how many mistakes it seemed to make with tests and how simplistic the tests were.

* Write tests for the input fields in the “Input” column of the “Calculator” page 
* Run the tests again to confirm they pass
* Run the tests in the current file and fix any errors you see
* Add a test case to verify that the error message appears when submitting an empty form ✨
* Add a test case to verify that the invalid fields have the 'error-input' class when submitting an empty form ✨
* Run the tests to confirm the new test case passes
* Fix this error: TestingLibraryElementError: Found multiple elements with the role "button" and name /Calculate Payment Table/i
* Add or update the test cases to make sure that the summation functions in the "4-year Cost Breakdown" modal are working as intended
* Add a test case to verify that the "Copy to all" button on the 4-Year Cost Breakdown modal is working correctly
* Add a test case to verify that the inflation rate is correctly applied when copying values
* Add a test case to verify that selecting a college from the dropdown correctly populates the form fields
* Fix the test error in the context: “src/Calculator.test.tsx > Calculator inputs > renders a submit button. TestingLibraryElementError: Found multiple elements with the role "button"”
* Add a test case to verify that clearing the financial aid modal resets the values to 0
* Add a test case to verify the monthly payment calculation is correct
* Add a test case to verify the "Total Cost of College" calculation
* Add a test cases to verify the "Estimated loan summary" calculations
* Add a test case to verify that the payment schedule table is populated correctly when the button is clicked
* Add a test case to verify that the clear data button triggers a confirmation dialog ✨
* Add a test cases to verify that clicking the save button saves to localStorage and when the application starts, the data saved to local storage is loaded correctly
* Add a test case to verify that the expenses modal opens and calculates the total correctly ✨
* Review all the tests to make sure that the tests match the updated field names and elements
* Add a test case to verify the Net Monthly Cash Flow is calculated correctly and displayed in the new card
* Add a test case to verify the ledger table structure and values
* Add a test case to verify the 10-year savings projection calculations
* Add a test case to verify the disclaimer footer is present in the document
* Check or evaluate all tests to ensure that where the label text changed, the test is updated to match the updated label text (After manually updating a number of labels for greater readability)
