import { useState } from "react";

export default function UserForm({ onUserAdd }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onUserAdd({ name, email });
		console.log({ name, email });
		setName("");
		setEmail("");
	};

	return (
		<>
			<h2>Add a user</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						value={name}
						onChange={(e) => {
							console.log(e.target.value);
							setName(e.target.value);
						}}
						id="name"
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						value={email}
						onChange={(e) => {
							console.log(e.target.value);
							setEmail(e.target.value);
						}}
						id="email"
						type="text"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
