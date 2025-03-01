# **Versus Wordle**
#### by: Matthew Dahlgren

**1** [Features:](#features)

**2** [App Launching Instructions:](#app-launching-instructions)

**3** [Technologies Used](#technologies-used)

**4** [Challenges Faced](#challenges-faced)

**5** [Next Steps](#next-steps)

**6** [Resource Credits](#resource-credits)


## Features
The Math-App has a navigation tool on the first page that takes you to the three different classes that the app supports thus far. In the class page you are presented with a synopsis of what a student is expected to learn that year in that class and you can see sample lesson attached. At the bottom of each sample lesson there is a practice problem.
- In one question I implemented the desmos API so that students can use a graphing calculator while developping their intuition on the relation between the 0th to 2nd derivative.


## App Launchinng Instructions
- Built and Tested on macOS Sequoia.
- Utilize Yarn, React Router.
- Make sure that your cd is in the deepest "math-app folder" and call "yarn start" in the terminal.

If building fails please try redownloading react-router with these commands:
- yarn add react-scripts
- yarn add react-router-dom@latest

- then:
- yarn start

## Technologies Used
- This project was built with React.js, and yarn. With most to all files being written in JavaScript and CSS.
- One API was used, [CaclulusQuestion](./math-app/src/pages/Math/MCV4U/Questions/mcv4uq1.js) has student access to the desmos calculator while working on a question about calculating the second derivative and the value at an instance of the first derivative.


## Challenges Faced:
I have never coded in JavaScript or CSS before, so getting to learn how to develop in this environment in a time crunch was difficult for me. I addressed this by working layer by layer of the project. Firstly, I made the navigation bar and general template for the project to get a base level understanding of the languages and to feel accomplished doing so. After that I worked towards building an active flow of work for people to navigate the app with, drafting and implementing sample lessons, and finally making custom practice problems which give students feedback in the way of displaying green when they answer right. 

## Next Steps:
- Implementing a larger set of questions and topics to allow students to practice on a more broad and accurate representation of the courses
- Add the choice to change colour schemes and font sizes for the app to accomodate those who have vision problems
- Creating a backend database that keeps track of accounts, allowing teachers to access their student's learning diagnostics and progress in their courses.


## Resource Credits
- Mathematics Cirriculum (2020) - https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics
- Desmos API - https://www.desmos.com/api/v1.10/docs/index.html 
