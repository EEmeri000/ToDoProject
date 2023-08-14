React To-Do List: Project Prompt
Our goal is to create a To Do List UI. This UI will have 6 main components:

6 components (Header, Sign In, To Do(to do list, to do, to do form), Completed List)

A sign in form that links to the task list

Header that labels the 'To Do list'. This is just a basic application identifier

A form that adds a To Do task item to the list. The default complete should be set to false.

A list to display each to do item. Next to each item will be three buttons displayed(check box, a trash can, edit button).

When the check box is clicked it checks it off and puts a line through the text then adds this task to to the completed list page.
When the trash can button is clicked it deletes the item from the list
When the edit button is clicked you are able to change the text
A page that list all the completed tasks once marked as completed

Step-by-Step start to creating a to do list
Create a React application npm: npx create-react-app todo-list
cd into todo-list and run npm install. Next npm start. Your project should now be served on localhost:300

Create components folder
We will create a components folder in the src directory and add 4 folders within it:

Header Sign In Todo Completed

Inside these folders we will add files in each folder

Header
Header.js - This is where all of our functional components will go. Header.css - This is where the styles for the application will go.

Sign In
SignIn.js - This is where all of our functional components will go. SignIn.css - This is where the styles for the application will go.

Todo
ToDo.js - This is where all of our functional components will go. ToDoForm.js - This is where all of our functional components will go. ToDOList.js - This is where all of our functional components will go. ToDo.css - This is where the styles for the application will go.

Completed
Completed.js - This is where all of our functional components will go. Completed.css - This is where the styles for the application will go.

App.js Navigate to App.js and get rid of everything between the two

tags.
Header Then, Create a presentational component that will display a header identifying the name of your application. Export your Header and import it to App.js. In the empty

, add .
DAY 1
Each section will be broken into 7 days. We will work step by step to make sure each task for this assignment is completed in a timely manner.

Create Figma Mockup - 20 mins Before you get started let create a mockup of what your application will look like.
Go to figma.com and create an account. Here we will work through create a mockup and prototype on figma together.

Once the mockup is created you will go back to your React application and build out your first page(Sign up).

alt text

Sign Up - 30mins-1hr You will have create a sign in page similar to the one below. Add your own styling to make it more unique.
This page will consist of a title.
A small message prompting the user to sign up.
An username, email and password field.
A Sign Up button. (For now the only functionality this button will have is when it is clicked on it will direct the user to the ToDo list page)
Create Figma Mockup(ToDoList) - 30 mins Create mockup fo your you to do list page

Input Form (ToDoForm page) Create an input that takes in a task and adds it to your to do list.