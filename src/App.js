import { useState } from "react";

import "./App.css";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

export default function App() {
	const [users, setUsers] = useState([]);

	const onUserAdd = (user) => {
		setUsers((previousUsers) => [...previousUsers, user]);
	};

	console.log({ users });

	return (
		<div className="App">
			<p>Learning React Testing</p>
			<UserForm onUserAdd={onUserAdd} />
			<hr />

			<UserList users={users} />
		</div>
	);
}
