import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("Render UserForm", () => {
	test("renders UserForm correctly with 2 inputs and 1 button", () => {
		// Render the component
		render(<UserForm onUserAdd={() => {}} />);

		// Manipulate or find the element in it
		const allInputElements = screen.getAllByRole("textbox");
		const buttonElement = screen.getByRole("button");

		// Assertion - Expect component to behave as intended
		expect(allInputElements).toHaveLength(2);
		expect(buttonElement).toBeInTheDocument();
	});

	test("it calls onUserAdd when the form is submitted", () => {
		// NOT THE BEST IMPLEMENTATION

		// mock onUserAdd callback function
		const argList = [];
		const callback = (...args) => {
			argList.push(args);
		};
		// Render the component
		render(<UserForm onUserAdd={callback} />);

		// Find the 2 input elements
		const [nameInput, emailInput] = screen.getAllByRole("textbox");

		// Simulate tying the name
		user.click(nameInput);
		user.keyboard("Kate Winslet");

		// Simulate tying the email
		user.click(emailInput);
		user.keyboard("katew@imdb.com");

		// Simulate clicking the button to submit the form
		const buttonElement = screen.getByRole("button");
		user.click(buttonElement);
		// buttonElement.keyboard("{ENTER}");

		// Assertion to ensure the 'onUserAdd' callback function gets called with name & email
		expect(argList).toHaveLength(1);
		expect(argList[0][0]).toEqual({ name: "Kate", email: "Kate@imdb.com" });
		// expect(argList[0][0]).toEqual({
		// 	name: "Kate Winslet",
		// 	email: "katew@imdb.com",
		// });
	});
});
