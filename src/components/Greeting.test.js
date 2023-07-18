import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
    test('renders Hello world as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        // ... nothing
    
        // Assert
       const helloWorldElement = screen.getByText('Hello World!');
       expect(helloWorldElement).toBeInTheDocument();
    });

    test('render "good to see you"',() => {
        render(<Greeting />)

        const notChanged = screen.getByText("good to see you", {exact : false});
        expect(notChanged).toBeInTheDocument();
    })
    
    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />)

        // Act
    
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);


        // Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    })
})
