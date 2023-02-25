export default function User({ user }) {
	return (
		<tr>
			<td>{user.name}</td>
			<td>{user.email}</td>
		</tr>
	);
}
