import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

describe("Render UserList", () => {
	test("renders UserList correctly with 2 users", () => {
		const users = [
			{ id: 0, name: "Taylor", email: "Taylor@example.org" },
			{ id: 1, name: "Alice", email: "Alice@test.com" },
			{ id: 2, name: "Bob", email: "Bob@demo.com" },
			{ id: 3, name: "Kate", email: "Kate@imdb.com" },
			{ id: 4, name: "John", email: "John@awx.net" },
		];
		// Render the component
		render(<UserList users={users} />);

		// Manipulate or find the element in it
		const allUserElements = screen.getAllByRole("listitem");

		// Assertion - Expect component to behave as intended
		expect(allUserElements).toHaveLength(2);
	});
});
