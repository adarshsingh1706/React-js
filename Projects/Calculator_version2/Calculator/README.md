
React Calculator
Overview
This React Calculator is a web application that leverages React's component-based architecture, utilizing both props and state to manage the application's functionality and user interface. It enables users to perform basic arithmetic operations, offering features like clearing the display, deleting the last character, and evaluating expressions.

Live Demo
Check out the live demo:[ React Calculator](https://react-js-teal.vercel.app/)

Features
Responsive Design: The calculator has a responsive design, ensuring a seamless experience on various devices.

Basic Operations: Perform addition, subtraction, multiplication, and division.

Clear and Delete: Use the "AC" button to clear the display and the "DEL" button to delete the last character.

Evaluation: Press "=" to evaluate the entered expression.

Tech Stack
React: Built with the React library for a modular and efficient user interface.

Props and State: Utilizes React's props and state to manage the flow of data between components and maintain the application's state.

CSS Modules: Styling is done using CSS Modules for scoped and maintainable styles.

Vercel Deployment: The app is deployed on Vercel for easy and fast hosting.

Getting Started
To run the project locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/react-calculator.git

Navigate to the project directory: cd react-calculator

Install dependencies: npm install

Run the development server: npm start

Open your browser and visit http://localhost:3000 to see the app in action.

Usage
Enter numbers and operators using the provided buttons.

Press the "=" button to see the result.

Use the "AC" button to clear the display.

Press "DEL" to delete the last character.

Props and State in React
Props: Components receive data through props (short for "properties"). In this project, the ButtonsContainer component receives a function onButtonClick as a prop, allowing child components to communicate with the parent App component.

State: The App component uses React's useState hook to manage the state of the calculator display (calVal). When a button is clicked, the state is updated, triggering a re-render of the component to reflect the changes in the UI.

Contributing
If you'd like to contribute, please fork the repository and create a pull request. Feel free to open issues for feature requests, bug fixes, or general improvements.

Credits
This project is maintained by Adarsh Singh. Special thanks to the React community for their excellent documentation.
