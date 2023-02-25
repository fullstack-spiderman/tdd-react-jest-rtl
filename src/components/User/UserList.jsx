import User from "./User";

export default function UserList({ users }) {
	// console.log({ users });
	// const defaultUsers = [
	// 	{ id: 0, name: "Taylor", email: "taylor@mail.com" },
	// 	{ id: 1, name: "Alice", email: "alice@mail.com" },
	// 	{ id: 2, name: "Bob", email: "bob@mail.com" },
	// ];
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users ? (
					users.map((user) => <User key={user?.name} user={user} />)
				) : (
					<p>No users yet</p>
				)}
			</tbody>
		</table>
	);
}
