import User from "./User";

export default function UserList({ users }) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users
						? users.map((user) => (
								<User user={user} key={user.email} />
						  ))
						: null}
				</tbody>
			</table>
		</>
	);
}
