import { useState } from "react";

export default function UserForm({ onUserAdd }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onUserAdd({ name, email });
				setName("");
				setEmail("");
			}}
		>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<button>Submit</button>
			</div>
		</form>
	);
}
